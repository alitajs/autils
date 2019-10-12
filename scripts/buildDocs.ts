import path from 'path'
import fs from 'fs-extra';
import { cd, exec, rm } from 'shelljs';
import { Reflection, ReflectionKind } from 'typedoc';
import { groupBy, Defined, forOwn, dedent } from '../src';

type Item = Reflection & {
  signatures: Array<Item>,
  parameters?: Array<Item>,
}

type Brief = {
  name: string,
  body: string,
  source: Defined<Reflection['sources']>[0],
}

async function main() {
  // 工作目录
  const wd = path.join(__dirname, '..');

  const typeDocPath = path.join(__dirname, '../.typedoc');
  const readMeFile = path.join(__dirname, '../README.md');
  const typeDocDataFile = path.join(typeDocPath, 'data.json');

  // 切换至工作目录
  cd(wd);

  // 构建包
  exec(`typedoc --ignoreCompilerErrors --excludeNotExported --excludePrivate --excludeProtected --json ${typeDocDataFile} --mode file src/index.ts`);

  const list = (await fs.readJSON(typeDocDataFile)).children as Item[];
  const listByKind = groupBy(list, item => item.kind);

  const briefListByKind: Record<ReflectionKind, Brief[]> = {} as any;

  const readMeFlagByKind: Partial<Record<ReflectionKind, string>> = {
    [ReflectionKind.Function]: '工具函数',
    [ReflectionKind.Class]: '工具类',
    [ReflectionKind.TypeAlias]: '工具类型',
  };

  let readme = (await fs.readFile(readMeFile)).toString();

  forOwn(listByKind, (list, kind) => {
    switch (Number(kind)) {
      case ReflectionKind.Function:
        list.forEach(item => {
          (briefListByKind[kind] || (briefListByKind[kind] = [])).push({
            name: item.name,
            body: (item.signatures || []).map(signature => {
              const desc = getDesc(signature);
              const example = getExample(signature);
              return dedent`
                ${desc}
                ${example}
              `
            }).join('\n\n'),
            source: item.sources![0],
          })
        });
        break;
      case ReflectionKind.Class:
        list.forEach(item => {
          const desc = getDesc(item);
          const example = getExample(item);
          briefListByKind[kind] = briefListByKind[kind] || [];
          briefListByKind[kind].push({
            name: item.name,
            body: dedent`
              ${desc}
              ${example}
            `,
            source: item.sources![0],
          })
        });
        break;
      case ReflectionKind.TypeAlias:
        list.forEach(item => {
          if (item.sources![0].fileName !== 'enhanceType.ts') return;
          const desc = getDesc(item);
          const example = getExample(item);
          briefListByKind[kind] = briefListByKind[kind] || [];
          briefListByKind[kind].push({
            name: item.name,
            body: dedent`
              ${desc}
              ${example}
            `,
            source: item.sources![0],
          })
        });
        break;
      default:
        break
    }
  });

  forOwn(briefListByKind, (briefList, kind) => {
    if (readMeFlagByKind[kind]) {
      readme = readme
        .replace(
          new RegExp(`(<!-- ${readMeFlagByKind[kind]}!目录 -->).+?(<!-- ${readMeFlagByKind[kind]}i目录 -->)`, 's'),
          `$1\n### ${readMeFlagByKind[kind]}\n${
            briefList.map(
              brief => {
                const apiUrl = (
                  Number(kind) === ReflectionKind.Class
                    ? `https://alitajs.github.io/autils/classes/${brief.name.toLowerCase()}.html`
                    : `https://alitajs.github.io/autils/globals.html#${brief.name.toLowerCase()}`
                );
                const description = brief.body.split('\n')[0];
                return dedent`
                  * [${brief.name}](${apiUrl}) ${description}
                `
              },
            )
            .join('\n')
          }\n$2`,
        )
    }
  });

  await fs.writeFile(readMeFile, readme);

  // 构建文档
  rm('-rf', typeDocPath);
  exec(`typedoc --readme README.md --ignoreCompilerErrors --excludeNotExported --excludePrivate --excludeProtected --out ${typeDocPath} --theme minimal --mode file src/index.ts`)
}

function getDesc(reflection: Reflection): string {
  const comment: Defined<Reflection['comment']> = (reflection.comment || {} as any);
  return [
    comment.shortText,
    comment.text,
  ]
    .filter(Boolean)
    .map(
      v => v.trim()
        .replace(/\n\n/g, '__NN__')
        .replace(/\n(?!\s*(-|\d\.))/g, '')
        .replace(/__NN__/g, '\n\n'),
    )
    .join('\n\n')
}

// @ts-ignore
function getExample(reflection: Reflection): string {
  const example = ((reflection.comment && reflection.comment.tags) || []).find(
    item => (item as any).tag === 'example',
  );
  return ((example && example.text) || '').trim()
}

main().then(() => {});

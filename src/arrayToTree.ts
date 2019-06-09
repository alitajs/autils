import { isArray } from './isArray';
import { deepClone } from './deepClone';
import { groupBy } from './groupBy';

interface IItem {
  [key: string]: any;
}

export interface IArrayToTreeOptions {
  // 父节点属性的名称
  parentProperty?: string;
  // 存储子节点的属性的名称
  childrenProperty?: string;
  // 唯一的节点标识符
  customID?: string;
  rootID: number | string;
}

function createTree(array, rootNodes, customID, childrenProperty) {
  const tree = [];

  for (let rootNode in rootNodes) {
    const node = rootNodes[rootNode];
    const childNode = array[node[customID]];

    if (!node && !rootNodes.hasOwnProperty(rootNode)) {
      continue;
    }

    if (childNode) {
      node[childrenProperty] = createTree(
        array,
        childNode,
        customID,
        childrenProperty
      );
    }

    tree.push(node);
  }

  return tree;
}

function groupByParents(array, options?: IArrayToTreeOptions) {
  const arrayByID = groupBy(array, item => item[options.customID]);

  return array.reduce(function(prev, item) {
    let parentID = item[options.parentProperty];

    if (!arrayByID.hasOwnProperty(parentID)) {
      parentID = options.rootID;
    }

    if (prev.hasOwnProperty(parentID)) {
      prev[parentID].push(item);
      return prev;
    }

    prev[parentID] = [item];
    return prev;
  }, {});
}

/**
 * 将数组转换为树形结构数据
 *
 * @since 0.0.6
 *
 * @param list
 * @param options
 *
 * @example
 *
 */
export function arrayToTree(
  list: IItem[],
  options?: IArrayToTreeOptions
) {
  // 默认配置
  const defaultOptions: IArrayToTreeOptions = {
    parentProperty: 'parentId',
    childrenProperty: 'children',
    customID: 'id',
    rootID: 0
  };

  options = Object.assign(defaultOptions, options);

  if (!isArray(list)) {
    throw new TypeError('期望一个数组，但得到的是一个无效参数');
  }

  const grouped = groupByParents(deepClone(list), options);

  return createTree(
    grouped,
    grouped[options.rootID],
    options.customID,
    options.childrenProperty
  );
}

import isString from '../isString';
import isArray from '../isArray';

/**
 * 解析后的操作集合
 *
 * @example
 *
 * ```js
 * const actions = {
 *   'module1': [
 *     'module1/action1',
 *     'module1/action2'
*     ]
 * }
 * ```
 */
export interface IModuleAction {
  [module: string]: string[]
}

/**
 * 操作类型 (可理解为权限)
 *
 * @example
 *
 * ```
 * { module: 'module1', action: 'action1' }
 * ```
 */
export interface IAction {
  module: string;
  action: string;
}

/**
 * 授权语句
 */
export interface IStatement {
  /** 授权效力 allow: 允许 deny: 禁止 */
  effect: 'allow' | 'deny';
  /**
   * 操作列表
   *
   * 1. `*` 表示所有
   * 2. `module/*` 表示`module`模块所有
   * */
  action: '*' | string[];
}

/**
 * 权限策略
 */
export interface IPolicyData {
  /** 该权限策略版本 */
  version: string | number;
  /** 授权语句集合 */
  statement: IStatement[]
}

/**
 * 解析权限策略，并提供验证功能
 *
 * @example
 * ```js
 * const policy = new Policy();
 *
 * const actions = [
 *   { module: 'module1', action: 'action1' },
 *   { module: 'module1', action: 'action2' },
 *   { module: 'module1', action: 'action3' },
 *   { module: 'module2', action: 'action1' },
 *   { module: 'module2', action: 'action2' }
 * ];
 *
 * policy.addPolicy({
 *  version: 1,
 *  statement: [
 *    {
 *      effect: 'allow',
 *      action: [
 *        'module1/*'
 *      ]
 *    }
 *  ]
 * });
 *
 * policy.singleVerify('module1/action1');
 *
 * // >> true
 * ```
 * */
export default class Policy {
  private readonly separator: string;
  public moduleMap: IModuleAction = {};
  public allowActions: string[];
  public denyActions: string[];

  /**
   * @param actions 操作集合
   * @param separator 分隔符
   * */
  constructor(actions: IAction[], separator?: string) {
    // 模块的操作集合
    this.moduleMap = this.getModuleMap(actions);
    // 允许的操作
    this.allowActions = [];
    // 拒绝的操作
    this.denyActions = [];
    // 分隔符自定义
    this.separator = separator || '/';
  }

  /**
   * 按照模块组织操作
   * */
  private getModuleMap = (actions: IAction[] = []) => {
    const moduleMap: IModuleAction = {};

    if (actions && actions.length) {
      actions.forEach(item => {
        const moduleName = item.module;
        const policyAction = `${item.module}${this.separator}${item.action}`;
        if (!moduleMap[moduleName]) {
          moduleMap[moduleName] = [policyAction];
        } else {
          moduleMap[moduleName].push(policyAction);
        }
      })
    }

    return moduleMap;
  };

  // 需要验证组合条件时
  // eg: '((goods/create && !goods/list) && goods/info) || * || goods/info'
  combinationVerify = (actionStr: string): boolean => {
    const reg = /([\w|\d|\*]+\/[\w|*]+)|\*/g;
    let matchList = actionStr.match(reg);
    matchList.map((item) => {
      const result = this.singleVerify(item) ? 'true' : 'false';
      actionStr = actionStr.replace(/([\w|\d|\*]+\/[\w|*]+)|\*/, result);
    });
    return !!eval(actionStr)
  };

  // 验证Action
  multipleVerify = (actions: string | string[]): boolean => {
    if (isString(actions)) {
      return this.singleVerify(actions as string);
    }

    if (isArray(actions)) {
      for(let i = 0, len = actions.length; i < len; i++) {
        const result = this.singleVerify(actions[i]);
        if (!result) {
          return false;
        }
      }

      return true;
    }
  };

  // 验证单个action
  // * | 'module1/action1'
  singleVerify = (action: string): boolean => {
    // 表示任何用户皆可以访问
    if (action === '*') {
      return true;
    } else {
      // 命中不允许使用的权限
      if (this.denyActions.includes(action)) {
        return false;
      }
      if (this.allowActions.includes(action)) {
        return true;
      }
    }

    // 默认不允许访问
    return false;
  };

  addPolicy = (policy: IPolicyData) => {
    if (!policy) return;
    const { statement } = policy;

    if (statement && statement.length) {
      statement.forEach((item) => {
        const { effect, action } = item;

        let actions: IAction[] = [];

        if (isString(action)) {
          actions = this.parseAction(action as string);
        }

        if (isArray(action)) {
          (action as string[]).forEach(item => {
            actions = actions.concat(this.parseAction(item));
          });
        }

        if (effect === 'allow') {
          const actionList = this.allowActions.concat(actions);
          this.allowActions = [...new Set(actionList)];
          return;
        }

        if (effect === 'deny') {
          const actionList = this.denyActions.concat(actions);
          this.denyActions = [...new Set(actionList)];
          return;
        }
      })
    }
  };

  // 解析Action
  private parseAction = (action: string): string[] => {
    const actions = this.getAllAction();
    let result = [];

    if (action === '*') {
      result = actions;
    } else {
      const list = action.split(this.separator);
      if (list.length === 2) {
        const moduleName = list[0];
        const actionName = list[1];
        if (actionName === '*') {
          actions.length && (result = this.moduleMap[moduleName] || []) ;
        } else {
          result = [action];
        }
      }
    }
    return result;
  };

  // 获取所有的Action
  private getAllAction = () => {
    let actions = [];
    const modules = Object.keys(this.moduleMap);

    modules.forEach((key) => {
      actions = actions.concat(this.moduleMap[key]);
    });

    return actions;
  };
}

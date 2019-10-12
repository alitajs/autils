import Policy, { IAction } from '../';

const actions: IAction[] = [
  { module: 'module1', action: 'action1' },
  { module: 'module1', action: 'action2' },
  { module: 'module1', action: 'action3' },
  { module: 'module2', action: 'action1' },
  { module: 'module2', action: 'action2' },
  { module: 'module3', action: 'action1' },
];

let policy = null;

beforeEach(() => {
  policy = new Policy(actions);
});

describe('Policy', () => {
  it('init', () => {
    expect(policy.moduleMap).toEqual({
      module1: ['module1/action1', 'module1/action2', 'module1/action3', ],
      module2: ['module2/action1', 'module2/action2' ],
      module3: ['module3/action1' ]
    });
  });

  it('add allow policy', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'allow',
          action: [
            'module1/*'
          ]
        }
      ]
    });

    expect(policy.allowActions).toEqual(
      ['module1/action1', 'module1/action2', 'module1/action3']
    );
  });

  it('add deny policy', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'deny',
          action: [
            'module1/action1',
            'module2/*',

          ]
        }
      ]
    });

    expect(policy.denyActions).toEqual(
      ['module1/action1', 'module2/action1', 'module2/action2']
    );
  });

  it('add allow and deny', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'allow',
          action: [
            'module1/action1'
          ]
        },
        {
          effect: 'deny',
          action: [
            'module1/action1',
            'module2/*',
          ]
        }
      ]
    });

    expect(policy.allowActions).toEqual(
      ['module1/action1']
    );

    expect(policy.denyActions).toEqual(
      ['module1/action1', 'module2/action1', 'module2/action2']
    );
  });
});

// 测试验证
describe('action verify', () => {

  it('multipleVerify string', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'allow',
          action: [
            'module1/action1',
            'module2/*',
          ]
        },
        {
          effect: 'deny',
          action: [
            'module1/action1'
          ]
        }
      ]
    });

    expect(policy.multipleVerify('module1/action1')).toEqual(false);
  });

  it('multipleVerify array', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'allow',
          action: [
            'module1/action1',
            'module2/*',
          ]
        },
        {
          effect: 'deny',
          action: [
            'module1/action1'
          ]
        }
      ]
    });

    expect(policy.multipleVerify(['module2/action1', 'module2/action2'])).toEqual(true);
  });

  it('combinationVerify !', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'allow',
          action: [
            'module1/action1',
            'module2/*',
          ]
        },
        {
          effect: 'deny',
          action: [
            'module1/action1'
          ]
        }
      ]
    });

    expect(policy.combinationVerify('!module1/action1')).toEqual(true);
  });

  it('combinationVerify &&', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'allow',
          action: [
            'module1/action1',
            'module2/*',
          ]
        },
        {
          effect: 'deny',
          action: [
            'module1/action1'
          ]
        }
      ]
    });

    expect(policy.combinationVerify('module2/action1 && module2/action2')).toEqual(true);
  });

  it('combinationVerify ||', () => {
    policy.addPolicy({
      version: 1,
      statement: [
        {
          effect: 'allow',
          action: [
            'module1/action1',
            'module2/*',
          ]
        },
        {
          effect: 'deny',
          action: [
            'module1/action1'
          ]
        }
      ]
    });

    expect(policy.combinationVerify('module2/action1 || module2/action2')).toEqual(true);
  });
});

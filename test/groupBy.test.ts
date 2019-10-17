import { groupBy } from '@/index';

const users = [
  { id: 1, name: 'Jay', age: 20 },
  { id: 2, name: 'Alan', age: 20 },
  { id: 3, name: 'Ming', age: 21 },
];

describe('groupBy', () => {
  it('test id', () => {
    expect(groupBy(users,item => item.id)).toEqual(
      {
        1: [users[0]],
        2: [users[1]],
        3: [users[2]],
      }
    );
  });

  it('测试分组', () => {
    expect(groupBy(users,item => item.age)).toEqual(
      {
        20: [users[0], users[1]],
        21: [users[2]],
      }
    );
  });

  it('测试格式化', () => {
    const formatter = (item) => {
      return `${item.name}:${item.age}`;
    };
    expect(groupBy(users,item => item.age, formatter)).toEqual(
      {
        20: [formatter(users[0]), formatter(users[1])],
        21: [formatter(users[2])],
      }
    );
  });
});


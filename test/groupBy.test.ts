import groupBy from '@/groupBy';

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

  it('test age', () => {
    expect(groupBy(users,item => item.age)).toEqual(
      {
        20: [users[0], users[1]],
        21: [users[2]],
      }
    );
  });
});


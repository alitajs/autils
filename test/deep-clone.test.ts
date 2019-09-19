import deepClone from '@/deep-clone';

describe('deepClone', () => {
  it('test number', () => {
    expect(deepClone(1)).toEqual(1);
  });

  it('test string', () => {
    expect(deepClone('test')).toEqual('test');
  });

  it('test array', () => {
    expect(deepClone([1, 2, 3])).toEqual([1, 2, 3]);

    expect(deepClone(['1', '2', '3'])).toEqual(['1', '2', '3']);

    expect(deepClone([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 2], [3, 4], [5, 6]]);

    expect(deepClone([{ key1: 1, key2: 2 }, 3])).toEqual([{ key1: 1, key2: 2 }, 3]);
  });

  it('test object', () => {
    expect(deepClone({})).toEqual({});

    expect(deepClone({ name: 'tom' })).toEqual({ name: 'tom' });

    expect(deepClone({ name: 'tom', role: [1, 2] })).toEqual({ name: 'tom', role: [1, 2] });

    expect(deepClone({ name: 'tom', info: { age: 1 } })).toEqual({ name: 'tom', info: { age: 1 } });
  });
});

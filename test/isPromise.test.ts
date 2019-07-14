import { isPromise } from '@/isPromise';

describe('isPromise', () => {
  it('test number', () => {
    expect(isPromise(1)).toEqual(false);
  });

  it('test boolean', () => {
    expect(isPromise(true)).toEqual(false);
  });

  it('test string', () => {
    expect(isPromise('')).toEqual(false);
  });

  it('test function', () => {
    expect(isPromise(function () {})).toEqual(false);
  });

  it('test promise', () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve('200 OK');
      }, 1000)
    });
    expect(isPromise(promise)).toEqual(true);
  });
});

import { getUrlParams } from '@/index';

describe('getUrlParams', () => {
  it('test return params object', () => {
    expect(getUrlParams('https://www.google.com/search?id=123&name=ding')).toEqual({
      id: '123',
      name: 'ding'
    });
  });

  it('test return params object of null', () => {
    expect(getUrlParams('https://www.google.com/search')).toEqual({});
  });
});

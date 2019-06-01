import isUrl from '../src/isUrl';

describe('test isUrl function', () => {
  it('test other string', () => {
    expect(isUrl('test')).toEqual(false);
  });

  it('test www.baidu.com', () => {
    expect(isUrl('www.baidu.com')).toEqual(true);
  });

  it('test http://www.baidu.com?page=1', () => {
    expect(isUrl('http://www.baidu.com?page=1')).toEqual(true);
  });
});

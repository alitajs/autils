import isEmail from '@/is-email';

describe('isEmail', () => {
  it('test 156148958@qq.com', () => {
    expect(isEmail('156148958@qq.com')).toEqual(true);
  });

  it('test xingkang.wang@company.com', () => {
    expect(isEmail('xingkang.wang@company.com')).toEqual(true);
  });

  it('test xingkang.wang@company.cn', () => {
    expect(isEmail('xingkang.wang@company.cn')).toEqual(true);
  });

  it('test xingkang.wang@company', () => {
    expect(isEmail('xingkang.wang@company')).toEqual(false);
  });

  it('test number', () => {
    expect(isEmail(0)).toEqual(false);
  });

  it('test string', () => {
    expect(isEmail('test')).toEqual(false);
  });

  it('test boolean', () => {
    expect(isEmail(true)).toEqual(false);
  });
});

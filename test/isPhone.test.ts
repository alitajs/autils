import { isPhone } from '@/index';

describe('isPhone', () => {
  it('test 17710067606', () => {
    expect(isPhone('17710067606')).toEqual(true);
  });

  it('test 1771006760', () => {
    expect(isPhone('1771006760')).toEqual(false);
  });

  it('test 177100676066', () => {
    expect(isPhone('177100676066')).toEqual(false);
  });
});

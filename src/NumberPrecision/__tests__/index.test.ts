import NumberPrecision from '../';

let NP: NumberPrecision = null;

beforeEach(() => {
  NP = new NumberPrecision();
});

describe('NumberPrecision', () => {
  it('times', () => {
    expect(NP.times(0.07, 100)).toEqual(7);
    expect(NP.times(0.7, 0.1)).toEqual(0.07);
    expect(NP.times(3, 0.3)).toEqual(0.9);
    expect(NP.times(118762317358.75, 1e-8)).toEqual(1187.6231735875);
    expect(NP.times(0.362, 100)).toEqual(36.2);
    expect(NP.times(1.1, 1.1)).toEqual(1.21);
    expect(NP.times(2.018, 1000)).toEqual(2018);
    expect(NP.times(2.5, -0.92)).toEqual(-2.3);
  });

  it('plus', () => {
    expect(NP.plus(0.1, 0.2)).toEqual(0.3);
    expect(NP.plus(2.3, 2.4)).toEqual(4.7);
    expect(NP.plus(-1.6, -1)).toEqual(-2.6);
    expect(NP.plus(-2.0, 63)).toEqual(61);
    expect(NP.plus(-3, 7)).toEqual(4);
    expect(NP.plus(-221, 38)).toEqual(-183);
    expect(NP.plus(-1, 0)).toEqual(-1);
    expect(NP.plus(2.018, 0.001)).toEqual(2.019);
    expect(NP.plus(1.3224e10, 1.3224e3)).toEqual(13224001322.4);
    expect(NP.plus(0.1, 0.2, 0.3)).toEqual(0.6);
  });

  it('minus', () => {
    expect(NP.minus(0.2, 0.1)).toEqual(0.1);
  });

  it('divide', () => {
    expect(NP.divide(0.2, 0.1)).toEqual(2);
  });
});

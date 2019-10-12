import { round } from '@/index';

describe('round', () => {
  describe('round default type', () => {
    it('add allow policy', () => {
      expect(round(0.129, 3)).toEqual(0.129);
      expect(round(0.129, 2)).toEqual(0.13);
      expect(round(1.005, 2)).toEqual(1.01);
      expect(round(1.005, 0)).toEqual(1);
      expect(round(111.1, -2)).toEqual(100);
      expect(round(-0.375, 2)).toEqual(-0.38);
    })
  });

  describe('round down type', () => {
    it('add allow policy', () => {
      expect(round(0.666, 3, 'down')).toEqual(0.666);
      expect(round(0.666, 2, 'down')).toEqual(0.66);
      expect(round(0.666, 1, 'down')).toEqual(0.6);
      expect(round(1.006, 2, 'down')).toEqual(1.0);
      expect(round(1.006, 0, 'down')).toEqual(1);
      expect(round(111.6, -2, 'down')).toEqual(100);
      expect(round(-0.375, 2, 'down')).toEqual(-0.38);
    })
  });

  describe('round up type', () => {
    it('add allow policy', () => {
      expect(round(0.111, 3, 'up')).toEqual(0.111);
      expect(round(0.111, 2, 'up')).toEqual(0.12);
      expect(round(0.111, 1, 'up')).toEqual(0.2);
      expect(round(1.004, 2, 'up')).toEqual(1.01);
      expect(round(1.006, 0, 'up')).toEqual(2);
      expect(round(111.1, -2, 'up')).toEqual(200);
      expect(round(-0.375, 2, 'up')).toEqual(-0.37);
    })
  });
});

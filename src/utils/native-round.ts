function nativeRound(
  fn: Math['round'] | Math['ceil'] | Math['floor'],
  number: number, precision: number = 0
): number {
  if (number < 0 && fn === Math.round) {
    return -nativeRound(fn, -number, precision)
  }
  precision = precision >= 0 ? Math.min(precision, 292) : Math.max(precision, -292);
  if (precision) {
    let pair = `${number}e`.split('e');
    const value = fn(+`${pair[0]}e${+pair[1] + precision}`);
    pair = `${value}e`.split('e');
    return +`${pair[0]}e${+pair[1] - precision}`;
  }
  return fn(number)
}

export default nativeRound;

/**
 * 解决浮动运算问题，避免小数点后产生多数值和计算精度损失
 */
class NumberPrecision {
  // 是否进行边界检查
  private readonly boundaryCheckingState: boolean;

  constructor(flag: boolean = true) {
    this.boundaryCheckingState = flag;
  }

  /**
   * 获取数字小数位的长度
   * @param num 需要获取的数字
   */
  private digitLength = (num: number): number => {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split('.')[1] || '').length - (+(eSplit[1] || 0));
    return len > 0 ? len : 0;
  };

  private checkBoundary = (num: number) => {
    if (this.boundaryCheckingState) {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        console.warn(`${num} is beyond boundary when transfer to integer, the results may not be accurate`);
      }
    }
  };

  private strip = (num: number, precision = 12): number => {
    return +parseFloat(num.toPrecision(precision));
  };

  private float2Fixed = (num: number): number => {
    if (num.toString().indexOf('e') === -1) {
      return Number(num.toString().replace('.', ''));
    }
    const dLen = this.digitLength(num);
    return dLen > 0 ? this.strip(num * Math.pow(10, dLen)) : num;
  };

  /**
   * 精确加法
   * @param num1
   * @param num2
   * @param others
   */
  plus = (num1: number, num2: number, ...others: number[]) => {
    if (others.length > 0) {
      return this.plus(this.plus(num1, num2), others[0], ...others.slice(1));
    }
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
    return (this.times(num1, baseNum) + this.times(num2, baseNum)) / baseNum;
  };

  /**
   * 精确乘法
   * @param num1
   * @param num2
   * @param others
   */
  times = (num1: number, num2: number, ...others: number[]): number => {
    if (others.length > 0) {
      return this.times(this.times(num1, num2), others[0], ...others.slice(1));
    }
    const num1Changed = this.float2Fixed(num1);
    const num2Changed = this.float2Fixed(num2);
    const baseNum = this.digitLength(num1) + this.digitLength(num2);
    const leftValue = num1Changed * num2Changed;

    this.checkBoundary(leftValue);

    return leftValue / Math.pow(10, baseNum);
  };

  /**
   * 精确减法
   * @param num1
   * @param num2
   * @param others
   */
  minus = (num1: number, num2: number, ...others: number[]): number => {
    if (others.length > 0) {
      return this.minus(this.minus(num1, num2), others[0], ...others.slice(1));
    }
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
    return (this.times(num1, baseNum) - this.times(num2, baseNum)) / baseNum;
  };

  /**
   * 精确除法
   * @param num1
   * @param num2
   * @param others
   */
  divide = (num1: number, num2: number, ...others: number[]): number => {
    if (others.length > 0) {
      return this.divide(this.divide(num1, num2), others[0], ...others.slice(1));
    }
    const num1Changed = this.float2Fixed(num1);
    const num2Changed = this.float2Fixed(num2);
    this.checkBoundary(num1Changed);
    this.checkBoundary(num2Changed);
    return this.times((num1Changed / num2Changed), Math.pow(10, this.digitLength(num2) - this.digitLength(num1)));
  }
}

export default NumberPrecision;

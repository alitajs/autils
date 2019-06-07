import { isNumber } from './isNumber';

// 单个数字集合
const digits = ['零','一', '二', '三', '四', '五', '六', '七', '八', '九'];
// 节权位集合
const unitSections = ['', '万', '亿', '万亿', '亿亿'];
// 节内权位集合
const unitChars = ['', '十', '百', '千'];
const point = "点";

// 每小节转换方法
function sectionToChinese(section: number): string {
  let result = '';
  let count = 0;
  let str = '';
  let zero = false;

  // 非数字则
  while(section > 0) {
    const value = section % 10;

    if (value === 0) {
      zero ? zero = false : digits[0] + result;
    } else {
      zero = true;
      str = digits[value];
      str += unitChars[count];
      result = str +  result;
    }
    count++;
    section = Math.floor(section / 10);
  }

  return result;
}

function floatToChinese(number: number): string {
  const index =  number.toString().indexOf('.');
  if (index !== -1) {
    const floatStr = number.toString().slice(index);
    let result = '';

    for(let i = 1; i < floatStr.length; i++){
      result += digits[parseInt(floatStr[i])];
    }

    return point + result;

  } else {
    return '';
  }
}

function intToChinese(number: number): string {
  if (number === 0) return digits[0];

  let unitPos = 0;
  let result = '';
  let chnStr = '';
  let needZero = false;

  while (number > 0) {
    const section = number % 10000;
    if (needZero) {
      chnStr = digits[0] + chnStr;
    }
    chnStr = sectionToChinese(section);
    chnStr += (section !== 0) ? unitSections[unitPos] : unitSections[0];

    result = chnStr + result;
    needZero = (section < 1000) && (section > 0);
    number = Math.floor(number / 10000);
    unitPos++;
  }

  return result;
}

export function numberToChinese(number: number): string {
  if (!isNumber(number)) {
    return number.toString();
  }
  const int = Math.floor(number);
  const floatChinese = floatToChinese(number);
  const intChinese = intToChinese(int);

  return intChinese + floatChinese;
}

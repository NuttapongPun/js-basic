function sumSquare(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}

function sumAbs(array) {
  /**
   * หาผลบวกของค่า absolute ของตัวเลขใน array
   */
  // TODO: Write code here
  let res = 0;
  for (const i of array) {
    res += Math.abs(i);
  }
  return res;
}

function sumPositive(array) {
  /**
   * เลือกเฉพาะจำนวนบวกมาหาผลรวม ตอบผลรวมนั้น
   */
  // TODO: Write code here
  let res = 0;
  for (const i of array) {
    if (i >= 0) {
      res += i;
    }
  }
  return res;
}

function maxAbsSum(array, maxNumber) {
  /**
   * เลือกเลขใน array มาไม่เกิน maxNumber ตัว ที่เอามา absolute แล้วได้ผลบวกเยอะสุด ตอบผลบวกนั้น
   */
  // TODO: Write code here
  const arr = array.map(e => Math.abs(e));
  arr.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < maxNumber; i++) {
    res += arr[i];
  }
  return res;
}

module.exports = { sumSquare, sumAbs, maxAbsSum, sumPositive };

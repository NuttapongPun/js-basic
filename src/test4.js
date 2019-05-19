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
}

function sumPositive(array) {
  /**
   * เลือกเฉพาะจำนวนบวกมาหาผลรวม ตอบผลรวมนั้น
   */
  // TODO: Write code here
}

function maxAbsSum(array, maxNumber) {
  /**
   * เลือกเลขใน array มาไม่เกิน maxNumber ตัว ที่เอามา absolute แล้วได้ผลบวกเยอะสุด ตอบผลบวกนั้น
   */
  // TODO: Write code here
}

module.exports = { sumSquare, sumAbs, maxAbsSum, sumPositive };

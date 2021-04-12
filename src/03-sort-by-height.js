/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrNew = [];
  const arrTemp = arr.slice();
  const arrL = arr.length;
  let temp = 0;
  let num = 0;
  for (let i = 0; i <= arrL + 1; i++) {
    if (typeof (arrTemp[i]) !== 'undefined') {
      if (arrTemp[i] === -1) {
        arrNew.push(-1);
      } else {
        temp = arrTemp[i];
        num = i;
        for (let j = i + 1; j <= arrL; j++) {
          // j += 1;
          if ((temp > arrTemp[j]) && (typeof (arrTemp[j]) !== 'undefined') && (arrTemp[j] !== -1)) {
            num = j;
            temp = arrTemp[j];
            // alert(temp)
          }
        }
        arrNew.push(temp);
        delete arrTemp[num];
      }
    }
  }
  for (let i = 0; i <= arrL; i++) {
    if ((typeof (arrTemp[i]) !== 'undefined') && (arrTemp[i] !== -1)) {
      arrNew.push(arrTemp[i]);
    }
  }
  return arrNew;
}

module.exports = sortByHeight;

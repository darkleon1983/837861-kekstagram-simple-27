const getValueFromRange = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  } else if (a === 0 && b === 0) {
    return NaN;
  } else if (typeof a === 'string' || typeof b === 'string') {
    return NaN;
  } else if (a === undefined || b === undefined) {
    return NaN;
  }
  if (a > b) {
    const c = a;
    a = b;
    b = c;
  }
  const array = [];
  for (let i = 0; i <= b - a; i++) {
    array[i] = [Math.random(), a + i];
  }
  return array.sort()[0][1];
};

getValueFromRange();

const checkStringLength = (currentString, maxLength) => {
  if (currentString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

checkStringLength();

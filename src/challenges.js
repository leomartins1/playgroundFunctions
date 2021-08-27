// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(x) {
  let split = x.split(' ');
  return split;
}

// Desafio 4
function concatName(x) {
  return x[x.length - 1] + ', ' + x[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiesPoints = ties * 1;
  let total = tiesPoints + winPoints;
  return total;
}

// Desafio 6
function highestCount(x) {
  let highest = Math.max.apply(null, x);
  let count = 0;
  for (index = 0; index < x.length; index++) {
    if (highest == x[index]) {
      count = count + 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 = dist1 * -1;
  } else if (dist2 < 0) {
    dist2 = dist2 * -1;
  }
  if (dist1 > dist2) {
    return 'cat2';
  } else if (dist2 > dist1) {
    return 'cat1';
  } else if (dist1 == dist2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(x) {
  let newName = [];
  for (index = 0; index < x.length; index++) {
    if (x[index] % 3 === 0 && x[index] % 5 === 0) {
      newName.push('fizzBuzz');
    } else if (x[index] % 5 === 0) {
      newName.push('buzz');
    } else if (x[index] % 3 === 0) {
      newName.push('fizz');
    } else if (x[index] % 3 !== 0 && x[index] % 5 !== 0) {
      newName.push('bug!');
    }
  }
  return newName;
}

// Desafio 9
function encode(x) {
  let newCode = x;
  for (index = 0; index < x.length; index++) {
    if (x[index] == 'a') {
      newCode = newCode.replace(/a/g, '1');
    } else if (x[index] == 'e') {
      newCode = newCode.replace(/e/g, '2');
    } else if (x[index] == 'i') {
      newCode = newCode.replace(/i/g, '3');
    } else if (x[index] == 'o') {
      newCode = newCode.replace(/o/g, '4');
    } else if (x[index] == 'u') {
      newCode = newCode.replace(/u/g, '5');
    }
  }
  return newCode;
}

function decode(x) {
  let newCode = x;
  for (index = 0; index < x.length; index++) {
    if (x[index] == '1') {
      newCode = newCode.replace(/1/g, 'a');
    } else if (x[index] == '2') {
      newCode = newCode.replace(/2/g, 'e');
    } else if (x[index] == '3') {
      newCode = newCode.replace(/3/g, 'i');
    } else if (x[index] == '4') {
      newCode = newCode.replace(/4/g, 'o');
    } else if (x[index] == '5') {
      newCode = newCode.replace(/5/g, 'u');
    }
  }
  return newCode;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

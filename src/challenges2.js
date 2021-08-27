// Desafio 10
function techList(techName, name) {
  let orderList = techName.sort();
  let Object;
  let list = [];
  if (techName.length < 1) {
    return 'Vazio!';
  } else {
    for (index = 0; index < orderList.length; index++) {
      Object = {
        name: name,
        tech: orderList[index],
      };
      list.push(Object);
    }
    return list;
  }
}

// Desafio 11
function generatePhoneNumber(phone) {
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

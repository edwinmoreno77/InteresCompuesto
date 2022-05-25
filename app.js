
let calcular = document.querySelector('#calcular');
const resultado = document.querySelector('textarea');

calcular.addEventListener('click', () => {
  let capital = document.querySelector('#capital').value;
  let meses = document.querySelector('#meses').value;
  let interes = document.querySelector('#interes').value;
  let deposito = document.querySelector('#deposito').value;

  capital = capital * 1;
  meses = meses * 1;
  interes = interes * 1;
  deposito = deposito * 1;

  for (let i = 1; i <= meses; i++) {

    capital += ((interes / 100) * capital) + deposito;

    capital = capital * 100;
    capital = Math.round(capital);
    capital = capital / 100;

    resultado.innerText = 'mes ' + i + ' = ' + capital;

    console.log('Mes ' + i + ' = ' + capital);
  }

})


// ----------------------------------------------------------


// Algoritmo para calcular ganancias con interes compuesto.

// let a;  // Capital Inicial = a           dolares $.
// let b;  // meses = b                     tiempo en meses.
// let c;  // interes compuesto = c         % mensual.
// let d;  // deposito mensual = d          Ahorros mensuales reinvertidos.

// function interesCompuesto(a, b, c, d) {

//   for (let i = 1; i <= b; i++) {

//     a += ((c / 100) * a) + d;
//     a = a * 100;
//     a = Math.round(a);
//     a = a / 100;


//     console.log('Mes ' + i + ' = ' + a + ' $');
//   }
// }
// interesCompuesto();
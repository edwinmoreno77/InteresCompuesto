
let calcular = document.querySelector('#calcular');
let restaurar = document.querySelector('#restaurar');
const divResultado = document.querySelector('#resultado');

dataArr = [];

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

    const data = `mes/año ${i} = ${capital}`;
    dataArr.push(data);
  }

  crearHtml();
})

const crearHtml = () => {

  const p = `<p class="p-3 m-2 aling-item-center"><b> ${dataArr[dataArr.length - 1]}</b></p>`;

  const div = document.createElement('div');
  div.classList.add('divHijo');
  div.innerHTML = p;

  return divResultado.append(div);

}




restaurar.addEventListener('click', () => {

  const divHijo = document.querySelector('.divHijo');
  divResultado.removeChild(divHijo);
  dataArr = [];

})









//para imprimir todo el proceso mes a mes o año a año pegar esto dentro del For dentro de la funccion calcular y para evitar conflictos cambiar nombre de constantes y clases en conflicto.

    // const crearHtml = () => {

    //   const p = `<p class="p-3 m-2 aling-item-center"><b>${'mes/año '}${i}${' = '}${capital}</b></p>`;

    //   const div = document.createElement('div');
    //   div.classList.add('divHijo');
    //   div.innerHTML = p;

    //   divResultado.append(div)

    //   return div
    // }

    // crearHtml();
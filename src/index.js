import validator from './validator.js';

const btnCard = document.querySelector('[data-form-btn]');

// verificar la validez de número de tarjeta
const valid = (evento) => {
    evento.preventDefault();
    const val = document.querySelector('[data-form-input]');
    const n = val.value;
    let cc = n;
    const numb = validator.isValid(n);
    const validNumb = validation(numb);
    if (validNumb === true) {
        mostrar("cardValid");
    }else{
        mostrar("cardInvalid");
    }
    val.value = validator.maskify(cc);
};

btnCard.addEventListener("click", valid);

// ubicarse en el input
const inputCard = document.querySelector('[data-form-input]');

// convertir en # los valores conforme se escriben en el input
const ocultNumb = () =>{
    const num = document.querySelector('[data-form-input]');
    let cc = num.value;
    num.value = validator.maskify(cc);
};

inputCard.addEventListener("keypress", ocultNumb);

function mostrar(section) {
    const most = document.getElementsByClassName("oculto");
    for (let i = 0, ocul =most.length; i < ocul; i++){
        most[i].getElementsByClassName.display = "none";
    }
    document.getElementById(section).style.display = "block";
}

// Informar al usuario si la tarjeta es valida
function validation (n){
  if (n === true){
    return "Tu tarjeta es válida";
  }else{
    return "Tu tarjeta es invalida";
  }
}
import validator from './validator.js';

document.getElementById("donar").focus();

const btnCard = document.querySelector('[data-form-btn]');
// verificar la validez de número de tarjeta
const valid = (evento) => {
    evento.preventDefault();
    const val = document.querySelector('[data-form-input]');
    const n = val.value;
    let cc = n;
    const numb = validator.isValid(n);
    const validNumb = validator.validation(numb);
    if (validNumb === true) {
        mostrar("cardValid");
    }else{
        mostrar("cardInvalid");
    }
    // const resultVal = document.querySelector("[data-result]");
    // const resultP = document.createElement("li");
    // resultP.classList.add("avisResult");
    val.value = validator.maskify(cc);
    // const result = `<div><p>${validNumb}</p></div>`;
    // resultP.innerHTML = result;
    // resultVal.appendChild(resultP);
};

btnCard.addEventListener("click", valid);

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
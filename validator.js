const validator = {
// ocultar los valores ingresados, excepto los ultimos 4
    maskify (cc){
        cc = cc.split("");
        for(let i = 0; i < cc.length - 4; i++){
            cc[i] = "#";
        }
        cc = cc.join("");
        return cc;
    },
// validador de tarjeta
    isValid (n){
        let sum = 0;
        while (n > 0){
          let a = n % 10;
          n = Math.floor(n / 10);
          let b = (n % 10) * 2;
          n = Math.floor(n / 10);
          if (b > 9){
            b -= 9;
          }
          sum += a + b;
        }
        const valid = sum % 10 == 0;
        return valid;
      }
};
export default validator;
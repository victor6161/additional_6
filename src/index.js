module.exports = function zeros(expression) {
   expression = expression.split('*');
  let num2 = 0;
  let num5 = 0;
  for ( let i = 0; i < expression.length; i++){
      if (expression[i].indexOf('!!') === -1){
          expression[i] = new Number(expression[i].replace("!",""));
          for (let ii = 1; ii < expression[i] + 1; ii++){
              if(ii % 5 === 0 && ii % 25 !== 0) num5++;
              if(ii % 25 === 0) num5 += 2;
              if(ii % 2 === 0) num2++;
          }
      }
      else {
          expression[i] = new Number(expression[i].replace("!!",""));
          if (expression[i] % 2 === 1){
                for (let ii = 1; ii < expression[i] + 1; ii += 2){
                  if(ii % 5 === 0 && ii % 25 !== 0) num5++;
                  if(ii % 25 === 0) num5 += 2;
                  if(ii % 2 === 0) num2++;
              }
          }
          else {
              for (let ii = 2; ii < expression[i] + 1; ii += 2){
                  if(ii % 5 === 0 && ii % 25 !== 0) num5++;
                  if(ii % 25 === 0) num5 += 2;
                  if(ii % 2 === 0) num2++;
              }
            
          }
      }
  }
  return Math.min(num2, num5);
   
     

}

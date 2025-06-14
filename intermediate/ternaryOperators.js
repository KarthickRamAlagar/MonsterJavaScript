// it is the alternative for the if else conditional statment
// it is only operators in javascripts takes three operands
// syntax
//   condition? expIfTrue:expIfFalse
let password=1;
function passwordChecker(ps){
    // if(ps<=0) return 'weak password';
    // else return 'Strong password';
     return ps<=0?'weak password':"strong password"
}
console.log(passwordChecker(password));



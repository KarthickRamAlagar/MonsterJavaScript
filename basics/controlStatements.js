//Control Statments

let money='1000';
if(money !== '1000'){
    console.log('You have money in string type');
}
else if(money != 1000){
    console.log('You have money');
}
else{
    console.log('You have money in number type');
}

let color= 'Green';

switch(color){
    case 'Red':
        console.log('Color is Red');
        break;
    case 'Green':
        console.log('Color is Green');
        break;
    default:
        console.log('Color is not Red or Green');
        break;
}

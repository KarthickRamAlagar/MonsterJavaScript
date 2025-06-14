//Create variables  FirstName  & store the  lastName 
// create variable FullName (full name) and concate with the  FirstName , lastName 
// create variable name (uppercase) & capitalize your favv actor name
// create a variables name (message); & store `My FirstName is () & abut your name` should in uppercase
//Now append this message to the (message variables) `his best show is silicon valey`.
//log it

let FirstName ='Ram';
let lastName ='Alagar';
var FullName= FirstName.concat(lastName);
FullName = FullName.toUpperCase();
let message=`My FirstName is ${FirstName}${lastName},`;
message += ` his best show is silicon valley.`;
console.log(message);

//equality operators
// "=="operator , check if the value of the two values ae equal, ignore data type 

const age = '26';
if(age==26){
    console.log('you are eligible to vote');
}
else{
    console.log('you are not eligible to vote');
}

//"==="operator : both data types and values must be same .i.e number = number or string = string 
if(age === 26){
    console.log('you are eligible to vote');
}
else{
    console.log('you are not eligible to vote');
}
const num1 = parseInt(prompt('enter the number'));
const num2 = parseInt(prompt('enter the number'));
document.write('<br>')
if(num1>num2){
    document.write('num1 is greater than num2')
}
else if(num2>num1){
    document.write('num2 is greater than num1')
}
else{
    document.write('both are equal')
}
document.write('<br>')
document.write('<br>')
document.write('<br>')
const age = parseInt(prompt('enter your age'));
document.write('<br>')
if((age<=18)){
    document.write('you are not eligible to vote')
}
else{
    document.write('you are eligible to vote')
    
}




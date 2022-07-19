//operator
//  && operator : if both condition are true, it return true otherwise false.

const age = true;
const hasLicense = true;
if(age && hasLicense){
    document.write('you are eligible to vote');
}
else{
    document.write('you are not eligible to vote')
}

// OR(||) Operator: if any one condition is true it retun true.

const isMarried = false;
const masterCompleted = true;
if(isMarried||masterCompleted){
document.write('you can go abroad')
}
else{
    document.write('you cannot go to abroad')
}


//example

const new_age = 20;
const isSingle = false; 

if(new_age <=18 && isSingle){
    document.write('you can marry');
}
else{
    document.write('you cannot marry');
}

document.write('<br>')
document.write('<br>')
document.write('<br>')

//calculate average

const num1 =21;
const num2 = 3;
const num3 = 40;
const average = (num1+num2+num3/3);
document.write(average);
document.write('<br>')
document.write('<br>')

if(average>=20 ){
    document.write('You Pass');
}
else{
    document.write('You Fail')
}


document.write('<br>')

document.write('<br>')

document.write('<br>')


//switch case

const day = "tuesday";


switch(day){
    case'sunday':
    document.write('its a holiday');
    break;

    case'monday':
    document.write('its a woking day');
    break;

    case'tuesday':
    document.write('its playing day')
    break;

    default:
        document.write('its a holiday')
    }

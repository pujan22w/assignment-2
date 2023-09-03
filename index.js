let number1= +prompt("Enter a number you want to do square");

for(i=0;i<number1;i++){
 let value= parseFloat(prompt(`Enter number is ${i+1}: `))
 console.log(`num${i} is :${value}`);
 
function loop(number){
    let num= number*number;
    console.log(`Square of ${value} is  ${num}`);
    alert(`Square of ${value} is :${num}`);
}
loop(value);
};

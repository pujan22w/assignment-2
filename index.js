let number1= +prompt("Enter a number you want to do square");

for(i=0;i<number1;i++){
 let value= parseFloat(prompt(`Enter number is ${i+1}: `))
 console.log(value);
 
function loop(number){
    let num= number*number;
    console.log(num);
    alert(`Square of ${value} is :${num}`);
}
loop(value);
};

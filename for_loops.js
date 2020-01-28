let i = 0;

while (i < 5) {
  i++;
  console.log(`The number is: ${i}.`);
  if (i === 3) {
    break;
  }
}



// Let’s write a loop that will iterate from 0 to 20. For each iteration, it will check if 
// the current number is even or odd, and print that on the screen. You will need the remainder operator to do the exercise. Expected output:


let z = 0;

while (z < 20){
    if (z % 2 === 0){
        console.log(`The number is: ${z} and it is Even`);
    }
    else {
        console.log(`The number is: ${z} and it is Odd`);
    }
    z++
}
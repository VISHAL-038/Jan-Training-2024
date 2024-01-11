//print the number whosse digits sum is not prime using array
//if 22 is the number of index 1 then first count its digit sum (2+2) = if not prime then print?
//HW

// Function to calculate the digit sum of a number
function calculateDigitSum(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numbers = [22, 37, 45, 55, 73,1];

for (let i = 0; i < numbers.length; ++i) {
    const digitSum = calculateDigitSum(numbers[i]);

    if (!isPrime(digitSum)) {
        console.log(`Number at index ${i}: ${numbers[i]} (Digit sum: ${digitSum}) is not prime.`);
    }
    
}

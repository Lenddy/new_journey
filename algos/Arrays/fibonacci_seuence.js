// what is the Fibonacci sequence
// the Fibonacci sequence is the sum 0f the 2 number before the current number
// it always start at [0,1]

// f(2) == [0,1]
// f(3) == [0,1,1]
//f(7) = [0,1,1,2,3,5,8,]
// sum the 2 previous number
//store it in an array

// make a loop that keeps looping until the amount of iterations is == to the the given number

//add the sum of the 2 previous number to the array

// make a function that takes in a positive number
// in this function we are going to make a loop
// the loop will keep iterating over and over until the amout of indexes that are in the array are == to the number that it the function was given
//every time we loop we are going to add the sum of the 2 previous number to the end of the array
// we need to check if there are 2 previous number

// make a variable that already contains f(2)
// use that variable as a base line
// check if the given number is either  0  of 1
// if it is 0 return index 0 an if it is 1 retun both values in the array

const Fibonacci = (n = 0) => {
	const arr = [0, 1];
	if (n === 0) return arr[0];
	else if (n === 1) return arr;
	else {
		for (let i = 2; i < n; i++) {
			arr[i] = arr[i - 2] + arr[i - 1];
		}
	}
	return arr;
};

console.log(Fibonacci(8));

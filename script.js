function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = str.split('')
	let ans = ''
	for(let i=0; i<arr.length; i++){
		let count = 0
		for(let j=i+1; j<arr.length; j++){
			if(arr[i] != arr[j]){
				ans = arr[i]
			}
		}
	}
	return ans
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

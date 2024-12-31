function firstNonRepeatedChar(str) {
 // Write your code here
	
	let map = new Map()
	let flag = false
	for(let t of str){
		map.has(t)? map.set(t,map.get(t)+1): map.set(t,1)
	}
	let ans = 'z'
	for(let t of map){
		if(t[1] == 1){
			if(t[0]<ans){
				ans = t[0]
				flag = true
			}
		}
	
	}
	if(flag == false){
		return null
	}
	return ans
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

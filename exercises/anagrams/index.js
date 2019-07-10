// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

	const str1 = cleanStr(stringA);
	const str2 = cleanStr(stringB);

	return str1 === str2;	

}

function cleanStr(str){

	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

}

module.exports = anagrams;





// function anagrams(stringA, stringB) {

// 	const str1 = buildStrMap(stringA);
// 	const str2 = buildStrMap(stringB);

// 	if(Object.keys(str1).length !== Object.keys(str2).length){
// 		return false;
// 	}

// 	else{
// 		for(let ele in str1){
// 			if(str1[ele] !== str2[ele]){
// 				return false;
// 			}
// 		}
// 	}

// 	return true;

// }

// function buildStrMap(str){

// 	const map = {};

// 	for(let char of str.replace(/[^\w]/g, '').toLowerCase()){

// 		map[char] = map[char]+1 || 1;
// 	}

// 	return map;

// }
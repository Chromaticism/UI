// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {

// 	let result = '';
// 	for (var i = str.length - 1; i >= 0; i--) {
// 		result += str[i];
// 	}
// 	return result;
// }

function reverse(str) {

	return str.split('').reduce((reverse, character) => character + reverse, '');
}

module.exports = reverse;

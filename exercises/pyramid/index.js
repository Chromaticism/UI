// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1, stair = '') {

	// row = n, col = 2n -1

	if(row === n+1){
		return
	}

	if(stair.length === 2 * n - 1){
		console.log(stair);

		return pyramid(n, row += 1);
	}

	stair.length >= n - row && stair.length < n + row -1 ? stair += '#' : stair += ' ';

	pyramid(n, row, stair);
	
}

module.exports = pyramid;


// function pyramid(n) {

// 	// row = n, col = 2n -1

// 	for(let i = 1; i <= n; i++){

// 		let pyramid = "";

// 		for(let j = 0; j < 2*n - 1; j++)
// 		{
// 			j >= n - i && j < n+i -1? pyramid += '#': pyramid += ' ';

// 		}

// 		console.log(pyramid);
// 	}
// }
// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

	constructor(){
		this.dataOri = new Stack();
		this.dataHol = new Stack();
	}

	add(record){

		this.dataOri.push(record);

	}

	remove(){

		while(this.dataOri.peek()){
			this.dataHol.push(this.dataOri.pop());
		}
		const re = this.dataHol.pop();

		while(this.dataHol.peek()){
			this.dataOri.push(this.dataHol.pop());
		}

		return re;
	}

	peek(){

		while(this.dataOri.peek()){
			this.dataHol.push(this.dataOri.pop());
		}
		const re = this.dataHol.peek();

		while(this.dataHol.peek()){
			this.dataOri.push(this.dataHol.pop());
		}

		return re;
	}
}


module.exports = Queue;

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

	constructor(Data, Node = null){

		this.data = Data;
		this.next = Node;
	}

}

class LinkedList {


	constructor(){
		this.head = null;
		//this.size = 0;	
	}

	insertFirst(data){
		this.head = new Node(data, this.head);
		//this.size++;
	}

	size(){
		let size = 0;

		let head  = this.head;

		while(head != null) {

			head = head.next;
			size++;
		}

		return size;
	}

	getFirst(){
		return this.head;
	}

	getLast(){

		if(!this.head){
			return null;
		}

		let head  = this.head;

		while(head.next != null) {

			head = head.next;		
		}

		return head;

	}

	clear(){
		this.head = null;
	}

	removeFirst(){
		if(!this.head){
			return;
		}
		this.head = this.head.next;
	}

	removeLast(){
		if(!this.head){
			return;
		}
		if(!this.head.next){
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;
		while(node.next){
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}

	insertLast(data){

		let node = new Node(data);
		const last = this.getLast();

		if(last){

			last.next = node;

		}
		else{
			this.head = node;
		}

	}

	getAt(index){

		
		let counter = 0;
		let node = this.head;

		while(node){

			if(counter === index){
				return node;
			}
			counter ++;
			node = node.next;
		}
		return null;

	}

	removeAt(index){



		let counter = 0;
		let node = this.head;

		if(!this.head){
			return;
		}
		if(index === 0){
			this.head = this.head.next;
			return;
		}
		
		const previous = this.getAt(index-1);

		if(!previous.next){
			return;
		}

		previous.next = previous.next.next;

		
	}

	insertAt(data, index){

		if(!this.head){
			this.head = new Node(data);
			return;
		}
		if(index === 0){
			this.insertFirst(data);
			return;
		}
		const previous = this.getAt(index-1) || this.getLast();
		const node = new Node(data,previous.next);

		previous.next = node;

	}

	forEach(fn){

		let node = this.head;
		let counter = 0;

		while(node){
			fn(node, counter);
			node = node.next;
			counter++;
		}


	}

	*[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }





}

module.exports = { Node, LinkedList };

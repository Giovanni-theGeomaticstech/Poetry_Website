//User Queue for adding in different images 

//Javascript Classes using ES6

//syntax 

//ES5

//function Person(firstName, lastName) {
//  // the "new" operator sets the reference of
//  // "this" to a new object
//  this.firstName = firstName;
//  this.lastName = lastName;
//}

//class nameClass { constructor() {}}
// the name of the ES5 constructor
// function is name of the ES2015 class

//class Person {

  // observe there is no "function" keyword
  // also, the word "constructor" is used, not "Person"
  //constructor(firstName, lastName) {

    // this represents the new object being
    // created and initialized
    //this.firstName = firstName;
    //this.lastName = lastName;

  //}
    // functions to be implemented
//}

//unshift (adds to the front gives length), push (adds to array end and returns length)
//Stack

//https://www.accelebrate.com/blog/javascript-es6-classes-and-prototype-inheritance-part-1-of-2/


class useStack { //Last in First Out
    //methods: push,pop,top,isempty
    constructor(){
        this.stack = [] //intializing the empty stack 
        this.len = 0
    }
    
    push(element) {
        this.stack.push(element)
        ++this.len
    }
    
    pop(){
        
        if(this.len == 0){
            return "Empty"
        }
        else{
            --this.len
            return this.stack.pop()
        }
        
    }
    
    top(){
        return this.stack[this.len - 1] // 
    }
    
    isempty(){ // this is the empty stack 
        return (this.stack.length == 0)
    }
    
}




//Queue
//class Queue { //First in Last Out
    //methods: enque, deque, first, isempty
    
    
//}
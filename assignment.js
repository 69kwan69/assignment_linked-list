import LinkedList from './LinkedList.js';

// After carefully consideration, I divided into 3 cases how LinkedList would be used

// Case 1: Common use
const list1 = new LinkedList();
list1.append('2');
list1.append('3');
list1.append('4');
list1.prepend('1');
console.log(list1.toString()); // ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null

// Case 2: LinkedList contains only 1 node
const list2 = new LinkedList();
list2.append('yolo');
console.log(list2.toString()); // ( yolo ) -> null

// Case 3: LinkedList first created (doesn't have node)
const list3 = new LinkedList();
console.log(list3.toString()); // null

// PLAYGROUND
// ...yeah, it would be too verbose to test all methods with all 3 cases. Being lazy myself, I decide not to, instead give anyone reading this a playground to test this out.

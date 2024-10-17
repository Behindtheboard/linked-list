import { linkedList } from "./linked-list.js";

let list = linkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(4));
console.log(list.pop());
console.log(list.getSize());
console.log(list.getHead());
console.log(list.contains("dog"));
console.log(list.find("snake"));
console.log(list.toString());
console.log(list.insertAt("monkey", 4));
console.log(list.toString());
console.log(list.removeAt(4))
console.log(list.toString());
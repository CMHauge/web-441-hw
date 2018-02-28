/*
HW-5; Objects and Classes

Instructions: Please create solutions to the following problems.
You can include all of your answers in this single document.

In order to test your HW, I will simply copy and paste the
entirety of this document into a web console and check that
the correct output occurs.

 */





/**************************************************/
// PROBLEM 1 - Classes - Vec()
//
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
//
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).


// Your code here.
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  minus(something) {
    return new Vec(this.x - something.x, this.y - something.y);
  }
  plus(something) {
    return new Vec(this.x + something.x, this.y + something.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Function Calls - DO NOT ALTER
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5


/**************************************************/
// PROBLEM 2 - Groups
//
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can only be part of a set once—adding it again doesn’t have any effect.
//
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (it if was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
//
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
//
// Give the class a static from method that takes an iteratable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
  // Your code here.
constructor() {
  this.associate=[];
}
add(number) {
  // It took me a while to understand what ! does. It's like a light switch.  If something is false, it makes it true. If it's true it makes it false.
  // Right? That's how I understood it anyway. Took some outside research to figure that one out.
  if  (!this.has(number))  {
    this.associate.push(number);
  }
}
delete(number) {
  this.associate = this.associate.filter(v => v !== number);
}
has(number) {
  return  this.associate.includes(number);
}
//Wasn't exactly sure about this part on my own. The way it was explained in the book was a bit confusing, to be perfectly honest.
static from(collection) {
  let group  = new Group;
  for (let number of collection) {
    group.add(number);
  }
return group;
}
}
//Trying to make my code unique with different wording.
//I hate how restrictive it seems to be.
//There must be a different way to write this all. I'm not sure how you'd even go about it though.

// Function Calls - DO NOT ALTER
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


/**************************************************/
// PROBLEM 3 - Retry
//
// Say you have a function primitiveMultiply that, in 20 percent of cases, multiplies two numbers, and in the other 80 percent, raises an exception of type MultiplicatorUnitFailure. Write a function ( "reliableMultiply()" ) that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
//
// Make sure you handle only the exceptions you are trying to handle.

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2)
    return a * b;
  else
    throw new MultiplicatorUnitFailure("Klunk");
}

function reliableMultiply(a, b) {
  // Your code here.
for (;;) {
  try {
    return primitiveMultiply(a, b);
  }
  catch (error) {
    if (!(error instanceof MultiplicatorUnitFailure))
    throw error;
  }
}
}

console.log(reliableMultiply(8, 8));
//This is also really restrictive, it seems... 




/**************************************************/
// SUBMISSION
//
// When you have finished with this weeks homework, please write a readme response to the week. You should then add this directory into your git repo, sync it, and provide a link to the repo directory (1 link only), to the HW-5 Submission Forum via Moodle.
/**************************************************/

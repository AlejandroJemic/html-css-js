

function write(text, tag = undefined, className = undefined, type = undefined) {
  if(tag === undefined) tag ='p';
  let element = document.createElement(tag);
  if (className !== undefined) element.className = className;
  if (type !== undefined) element.type = type;
  element.innerHTML = text;
  document.body.append(element);
}

write("Javavascript Page", "h1");
write("this page is fully generated with javascript code", "div", "maincont");


// class ********************************************************************************************************
write("this is a class", "h2");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // methods
    greet() {
        write(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    //static methods
    static compare(person1, person2) {
        if (person1.age > person2.age) {
            return `${person1.name} is older than ${person2.name}`;
        } else {
            return `${person2.name} is older than ${person1.name}`;
        }
    }

}
let juan = new Person('Juan', 25);
juan.greet();

//inheritance
write("this is inheritance", "h2");
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    greet() { //overriding a method from Person class
        write(`Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.position}.`);
    }
    work() {
        write(`${this.name} is working.`);
    }
    set modfyPosition(position) { this.position = position; }
    get getPosition() {return `${this.name} now is working as a ${this.position}.`	} // 'this.position;}
}
let jose = new Employee('Jose', 30, 'software engineer');
jose.greet();
write("this is a polimorfism", "b");
jose.work();

write("this is static methods", "b");
write( Person.compare(juan, jose));


write("getters and setters", "b");
jose.modfyPosition = 'manager';
write(jose.getPosition);


// string methods ************************************************************************************************
write("string methods", "h2");
let myString = "This is a demo string"

//concat 
write("concat",'b')
write (myString.concat('concated'));
//statsWith 
write("startsWith",'b')
write (myString.startsWith('t'));
//endsWith 
write("endsWith",'b')
write (myString.endsWith('g'));
//includes 
write("includes",'b')
write (myString.includes('demo'));
//indexOf 
write("indexOf",'b')
write (myString.indexOf('is'));
//lastIndexOf 
write("lastIndexOf",'b')
write (myString.lastIndexOf('s'));
//padStart 
write("padStart",'b')
write (myString.padStart(50,'-'));
//padEnd 
write("padEnd",'b')
write (myString.padEnd(50,'-'));
//repeat 
write("repeat",'b')
write (myString.repeat(2));
//replace 
write("replace",'b')
write (myString.replace('string','SONG ;-)'));
//split 
write("split by ' '",'b')
write (myString.split(' ')[1]);
//slice.returns a section of the string
write("slice",'b')
write (myString.slice(5,30));
//substring 
write("substring",'b')
write (myString.substring(5,30));
//toString 
write("toString",'b')
const n = 1000
write ( `the number ${n} to string is ` + n.toString());
//toLowerCase 
write("toLowerCase",'b')
write (myString.toLowerCase());
//toUpperCase 
write("toUpperCase",'b')
write (myString.toUpperCase());
//trim 
write("trim",'b')
write (myString.trim() +' without spaces');
//trimStart 
write("trimStart",'b')
write (myString.trimStart() +' without leading spaces');
//trimEnd 
write("trimEnd",'b')
write (myString.trimEnd() +' without trailing spaces');


// ARRAY METHODS ************************************************************************************************

write("array methods", "h2");

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

write("this is a demo array: " + myArray)

// join
write("join",'b')
let joinedArrya = myArray.join(' ~ ');
write(joinedArrya);

//forEach
write("forEach",'b') 
let sum = 0;
myArray.forEach(element => {    
    sum += element;
});
write(`the sum is ${sum}`);

//pop
write("pop",'b')
myArray.pop();
write(myArray + " after pop")

//shift
write("shift",'b')
myArray.shift();
write(myArray + " after shift")

//push
write("push",'b')
myArray.push(11);
write(myArray + " after push 11")

//unshift
write("unshift",'b')
write(myArray.unshift(0));
write(myArray + " after unshift 0")

//slice
write("slice",'b')
const sliceArray = myArray.slice(1, 6);
write(sliceArray + " after slice from 1 to 6")

//splice
write("splice",'b')
myArray.splice(7, myArray.length);
write(myArray + " after splice from 7 to end")
//sort
write("sort",'b')
write(myArray.sort() + " is sorted");
//reverse
write("reverse",'b')
write(myArray.reverse() + " is reversed");
//filter
write("filter",'b')
write(myArray.filter(element => element % 2 == 0) + " is filtered even numbers");
//find
write("find",'b')
write(myArray.find(element => element % 3 == 0) + " is found 3 multiples numbers");
//findIndex
write("findIndex",'b')
write(myArray.findIndex(element => element == 5) + " is the index of 5 in the array");
//some
write("some",'b')
write(myArray.some(element => element == 5) + " is some 5 in the array");   
//every
write("every",'b')
write(myArray.every(element => element > 2) + " is every element > 2 in the array");
//map
write("map",'b')
write(myArray.map(element => element * 2) + " is mapped by 2");


// MATH OBJECT METHODS ************************************************************************************************

write("math object methods", "h2");

write('math object props', 'b')
// Math.PI
write('Math.PI = ' + Math.PI);
// Math.E
write('Math.E = ' + Math.E);
// Math.LN2
write('Math.LN2 = ' + Math.LN2);
// Math.LN10
write('Math.LN10 = ' + Math.LN10);
// Math.LOG2E
write('Math.LOG2E = ' + Math.LOG2E);
// Math.LOG10E
write('Math.LOG10E = ' + Math.LOG10E);
// Math.SQRT1_2
write('Math.SQRT1_2 = ' + Math.SQRT1_2);
// Math.SQRT2
write('Math.SQRT2 = ' + Math.SQRT2);

write('math object methods', 'b')
let myNumber = 64; 
// sqrt
write('Math.sqrt(' + myNumber + ') = ' + Math.sqrt(myNumber));
// cbrt
write('Math.cbrt(' + myNumber + ') = ' + Math.cbrt(myNumber));
// min 
write('Math.min(' + myArray + ') = ' + Math.min(...myArray));
// max
write('Math.max(' + myArray + ') = ' + Math.max(...myArray));
// ramdom
write('Math.random() = ' + Math.random());
// round
write('Math.round(' + Math.PI + ') = ' + Math.round(Math.PI));
// fround
write('Math.fround(' + Math.PI + ') = ' + Math.fround(Math.PI));
// floor
write('Math.floor(' + 4.6 + ') = ' + Math.floor(4.6));
// trunc
write('Math.trunc(' + 4.6 + ') = ' + Math.trunc(4.6));
// ceil
write('Math.ceil(' + 4.6 + ') = ' + Math.ceil(4.6));
// abs
write('Math.abs(' + -4.6 + ') = ' + Math.abs(-4.6));
// sign
write('Math.sign(' + -4.6 + ') = ' + Math.sign(-4.6));
// exp
write('Math.exp(' + 3 + ') = ' + Math.exp(3));
// log
write('Math.log(' + 21 + ') = ' + Math.log(21));

write('and so much more...', 'h4')

 write('cos -  sin -  tan -  acos -  asin -  atan -  cosh -  sinh -  tanh -  acosh -  asinh -  atanh -  hypot -  expm1 -  log1p -  log10 -  log2', 'b');

// CONSOLE METHODS ************************************************************************************************

write("console methods", "h2");
write('press F12 to open the console');

// clear
console.clear();
// log
console.log("hello");
// info
console.info("demo info");
// warn
console.warn("demo warning");
// error
console.error("demo error");
// assert
console.assert(4 > 3, "4 is greater than 3");
// dir
console.dir(myArray);
// trace
console.trace('demo trace');

// count
console.count('counting');
console.count('counting');
// countReset
console.countReset('counting');

// group
console.group('demo group');
console.log("first in group");
console.log("second in group");
// groupEnd
console.groupEnd('end demo group');

// groupCollapsed
console.groupCollapsed('demo group Collapsed');
console.log("first in group");
console.log("second in group");
// groupEnd
console.groupEnd('end demo group');

// time
console.time('time');
setTimeout(() => {
    // timeLog
    console.timeLog('time')
    // timeEnd
    elapsed = console.timeEnd('time');
}, 1500)

// table
console.table(myArray);


// DOM METHODS ************************************************************************************************

write("DOM selectors", "h2");

// nodeTypes:
// document is a global object defined by the browser that represents the entire page
// element  is a node defined by the browser
// text     is the text content of the element
// attr     is the attribute of the element or the value of the attribute

write('selectors methods', 'b')

// document selectors methods
// querySelector
write('document.querySelector("h1") = ' + document.querySelector('h1').innerHTML);
// querySelectorAll
write('document.querySelectorAll("p") length is ' + document.querySelectorAll('p').length);
// getElementById
write('document.getElementById("myID") = ' + document.getElementById('p1') + ' becouse it was not found');
// getElementsByClassName
write('document.getElementsByClassName("maincont") length is ' + document.getElementsByClassName('maincont').length);
// getElementsByTagName
write('document.getElementsByTagName("div") length is ' + document.getElementsByTagName('div').length);
// getElementsByName
write('document.getElementsByName("myNAME")  length is ' + document.getElementsByName('myNAME').length + ' becouse it was not found');

write('attributes methods', 'b')
write('','br')
write('','input','input');
let inputElement = document.getElementsByClassName('input')[0];
if(inputElement){
    // setAttribute
    inputElement.setAttribute('placeholder', 'enter unsername');
    write('inputElement.setAttribute("placeholder", "enter unsername")... placeholder is set');
    // getAttribute
    write( 'inputElement.getAttribute("placeholder") is ' +   inputElement.getAttribute('placeholder'));
}

// removeAttribute
inputElement.removeAttribute('placeholder');
write('inputElement.removeAttribute("placeholder")... placeholder is gone');

write('global atributes', 'b');
write('id: str');
write('class: str');
write('contenteditable: true|false');
write('dir; ltr -rtl');
write('hidden: true|false');
write('style: str');
write('title: str');
write('value: str');
write('tabindex: int');
write('classlist: string[]');

write('INPUT element attributes', 'h2');
write('this are directly accessible as properties in js code'); 
write('checked: true|false, if type is checkbox or radio');
write('disabled: true|false, cant be edited');
write('readonly: true|false, cant be edited');
write('required: true|false, cant be empty');
write('classname: str');
write('minlength: int');
write('maxlength: int');
write('name: str');
write('placeholder: str');
write('value: str');
write('autofocus: true|false');
write('form: str');
write('accept: str, is for file upload');
write('style: str, can access any css property');

write('input with classname "input"','b')
write('','br')

let input =  document.createElement('input');
input.type = 'text'; 
input.placeholder = 'enter some text';
input.readonly = false;
input.disabled = false;
input.required = false;
input.autofocus = false;
input.minLength = 5;
input.maxLength = 100;
input.className = 'input';
input.name = 'text-input';
input.id = 'text-input';
input.style.backgroundColor = '#ddf';
document.body.appendChild(input);
write('','br')

write('type: checkbox | radio | submit | reset | button | fileupload | text | password | number| range | hidden | email |tel | url | range | date | time | week | month | color');
write('','br')
write('','input','','radio');
write('','input','','checkbox');
write('enviar','input','','submit');
write('reset','input','','reset');
write('click it','input','','button');
write('','input','','fileupload');
write('','input','','text');
write('','input','','password');
write('','input','','number');
write('','input','','range');
write('','input','','hidden');
write('','input','','email');
write('','input','','tel');
write('','input','','url');
write('','input','','date');
write('','input','','time');
write('','input','','week');
write('','input','','month');
write('','input','','color');

write('playing with the input classList add and remove', 'b');
write('','br');
let classInput = document.createElement('input');

const classes = ["red", "yellow", "green"];
let currentIndex = 0;

document.body.appendChild(classInput);
function switchClass() {

    classInput.classList.remove(classes[currentIndex]);
    currentIndex = (currentIndex + 1) % classes.length;
    classInput.classList.add(classes[currentIndex]);
    classInput.value = 'my color is '+ classes[currentIndex];
}
setInterval(switchClass, 1000);

write('also can use:','b');
write('classList.item(index) to get the class at index');
write('classList.contains(className) to check if the class is present');
write('classList.toggle(className) to add or remove the class');
write('classList.replace(oldClass, newClass) to replace the old class with a new one');

write('element contnent propoerties:', 'b');

write('element.textContent: displays the text content of the element and its children');
write('element.innerHTML: displays the HTML content of the element and its children');
write('element.outerHTML: displays the HTML content of the element and its children');


write('input.outerHTML is:', 'b');
let html = String.raw;
html = "`" + input.outerHTML + "`";
const escapeHtml = (unsafe) => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

html = escapeHtml(html);
write(html);

// DOM ELEMENTS HANDLING ********************************************************************************************
write("DOM ELEMENTS", "h2");

// createElement

write('createElement, createTextNode, CreateDocumentFragment, appendChild', 'b');
let container = document.createElement('DIV'); // must be uppercase
container.className = 'maincont';
let list = document.createElement('LI');
// createTextNode
let textoList = document.createTextNode(' text createTextNode');
// appendChild
list.appendChild(textoList);
container.appendChild(list);
document.body.appendChild(container);

// createDocumentFragment
let frag = document.createDocumentFragment();
for(let i = 0; i < 2; i++){
    let li = document.createElement('LI');
    li.textContent = 'list item ' + i;
    frag.appendChild(li);
}
container.appendChild(frag);


write('firstChild, lastChild, firstElementChild, lastElementChild, childNodes, children', 'b');
// firstChild
const first = container.firstChild;
write('DIV firstChild: ' + first.textContent);
// lastChild  
const last = container.lastChild;
write('DIV lastChild: ' +last.textContent);
// firstElementChild
const firstElement = container.firstElementChild;
write('DIV firstElementChild: ' + firstElement.outerHTML);
// lastElementChild
const lastElement = container.lastElementChild;
write ('DIV lastElementChild: ' + lastElement.outerHTML);
// childNodes
const childNodes = container.childNodes; // es un nodelist( cada node es un html object completo), que es diferentes de un array
                                         // se puede recorrer con un foreach
write('DIV have childNodes: ' + childNodes.length);
// children
const children = container.children; // es un html collection, que es un array, no se puede recorrer con un foreach, solo con "for (item of colecction)"
write('DIV have children: ' + children.length);
for (child of children){
    write(child.textContent);
}

write('appendChild, removeChild, replaceChild, insertBefore, hasChildNodes', 'b');

let div2 = document.createElement('DIV'); // must be uppercase
div2.className = 'maincont';
const oldParagraph = document.createElement('P');
oldParagraph.innerText = ' text of the old paragraph';

// appendChild
div2.appendChild(oldParagraph);

const newParagraph = document.createElement('B');
newParagraph.innerText = ' text of the new paragraph';
document.body.appendChild(div2);
// replaceChild
div2.replaceChild(newParagraph,oldParagraph );

// insertBefore
let beforeParagraph = document.createElement('P');
beforeParagraph.innerText = ' text of the before paragraph';
div2.insertBefore(beforeParagraph, newParagraph);

// removeChild
div2.removeChild(newParagraph);

// hasChildNodes
write('DIV2 have childNodes: ' + div2.hasChildNodes());

write('parentElement, parentNode','b')
// parentElement - if parent is not an element(its a node) return null
write('DIV2 parent ELEMENT is '+ div2.parentElement)
// parentNode - in some cases the parent is not an element, but it will always returned
write('body parent NODE is '+ document.body.parentNode)

write('nextSibling, previousSibling, nextElementSibling, previousElementSibling', 'b')

let div3 = document.createElement('DIV'); // must be uppercase
div3.className = 'maincont';
document.body.appendChild(div3);

const firstsilibing = document.createElement('P');
firstsilibing.innerText = 'first sibling';
const secondSilibing = document.createElement('P');
secondSilibing.innerText = 'second sibling';

div3.appendChild(firstsilibing);
div3.appendChild(secondSilibing);

// nextSibling - always returns a node
write('nextSibling is "'+ firstsilibing.nextSibling.textContent + '"');

// previousSibling
write('previousSibling is "'+ secondSilibing.previousSibling.textContent + '"');

// nextElementSibling - only returns elements
write('nextElementSibling is "'+ firstsilibing.nextElementSibling.textContent + '"');

// previousElementSibling
write('previousElementSibling is "'+ secondSilibing.previousElementSibling.textContent + '"');


write('closest', 'b')

let div4 = document.createElement('DIV'); // must be uppercase
div4.className = 'maincont';
document.body.appendChild(div4);

let div5 = document.createElement('DIV'); // must be uppercase
div5.className = 'secondcont';
div4.appendChild(div5);

let header = document.createElement('H5');
header.innerText = 'header';
div5.appendChild(header);

// closest
write('header\'s closest DIV classname is "'+ header.closest('div').className + '"');




write('this is the end. Thanks you for watching my code','h4');

window.scrollTo(0, document.body.scrollHeight);
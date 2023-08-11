//length

// let text="asdfghjkl";
// let length = text.length;
// console.log(length);

//slice
//slice(start,end)

// let text = "Apple, banana, kiwi";
// let part = text.slice(7,13);

//if a parameter is negative, the position is counted from the end of the string
// let text ="Apple, Banana, Kiwi";
// let part = text.slice(-12);
//slices out a portion of a string from position -12 to position -6
//let text = "Apple, Banana, kiwi";
//let part = text.slice(-12,-6);

//substring()
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7,13);

//substr
//the second parameter, specifies the length of the extracted part.
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7,6);

//replace
// let text = "please visit";
// let newText = text.replace("visit","hey");
// console.log(newText);

//ReplaceAll
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");

//toUpperCase()
// let text1 = "Hello World!";
//let text2 = text1.toUpperCase();

//toLowerCase()
//let text1 ="Hello World!";
// let text2 = text1.toLowerCase();

//concat()
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ",text2);

// text = "Hello" + " " + "World!";
// text = "Hello".concat(" ","World!");

//trim()
// let text1 = "   Hello World!   ";
// let text2 = text1.trim();

//trimStart()   removes whitespace from start
// let text1 = "     Hello World!    ";
// let text2 = text1.trimStart();

//trimEnd()      removes whitespace from end
// let text1 = "     Hello World!    ";
// let text2 = text1.trimEnd();

//padstart()
// let text="1";
// let padded = text.padStart(4,"0");
// console.log(padded);


// let text="6";
// let padded = text.padStart(3,"x");
// console.log(padded);

//padEnd()
// let text="8";
// let r = text.padEnd(5,"x");
// console.log(r);

//charAt()
// let text = "ABCDEFGHIJKLMNOPQRST";
// let hello = text.charAt(5);
// console.log(hello);

//charCodeAt()
// let text = "ABCDEFGHIJKLMNOPQRST";
// let hello = text.charCodeAt(5);
// console.log(hello);

//property access
// let text = "HELLO WORLD";
// let char = text[0];
// console.log(char);

//js string search

//string indexOf()
// let text = "please find the word";
// let index = text.indexOf("find");
// console.log(index);

//string lastIndexOf()
// let text = "please find the word find";
// let index = text.lastIndexOf("find");
// console.log(index);


//string search()
// let text = "please find the word find";
// let index = text.search("find");
// console.log(index);

// string match()
// let text = "The rain in SPAIN stays mainly in the plain";
// let res=text.match("ain");
// console.log(res);

//matchAll()
// let text = "The rain in SPAIN stays mainly in the plain";
// let res=text.match(/inl/g);
// let ind=text.indexOf(res);
// console.log(res);
// console.log(ind);

//includes()
// let text = " hello world!";
// let res = text.includes("hello");
// console.log(res);


//startsWith()
// let text = "hello world!";
// let res = text.startsWith("hello");
// console.log(res);

// let text = "hello world!";
// let res = text.startsWith("world",6);
// console.log(res);

//endsWith()
// let text = "Hello World! jkl";
// let res = text.endsWith("jkl");
// console.log(res);


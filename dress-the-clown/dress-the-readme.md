[Home](../README.md)|
---|

# Dress The Clown!

### Learning Competencies

- Using Javascript to work with HTML images.
- Binding functions to the arrow keys.
- Writing logical functions in Javascript.

## Summary

Look at that clown! Sure, he looks pretty good; but without an outfit can he really _call himself a clown?_
You are going to write some JAVASCRIPT FUNCTIONS and bind them to the arrow keys on your keyboard. The *up and down arrow keys* will toggle between different parts of the clown, and the *left and right* arrow keys will cycle between different clothing options.

Resources:\
[Getting an Element by ID](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)\
[HTML Images](https://www.w3schools.com/html/html_images.asp)\
[Concat Strings in Javascript](https://www.w3schools.com/jsref/jsref_concat_string.asp)\
[KeyboardEvent Documentation](https://www.w3schools.com/jsref/event_key_keycode.asp)\
[Detect Keycodes!](https://keycode.info/)

## Time to Dress The Clown!

Let's get started.

1. Familiarize yourself with the `dress-the-clown.html` document and the `images` folder. Notice how each body part has six images and follow a naming convention: bodypartname + number.

2. The first thing you'll wanna do in `dress-the-clown.js` is write a function that can change the *head* image of the clown. The function might be called something like `changeClownHead() { }`.  

3. You'll need some way to _get a reference to the head image and save it to a variable_ so you can change it. A good way of doing this would be to give the head `<img>` html tag an ID, such as `id="head"`. Then try reading up on [getting an element by ID](https://www.w3schools.com/jsref/met_document_getelementbyid.asp).

4. Now that you have a reference to the head image, you can change the `src` to point to a different picture. That would look something like `head.src = "./images/head1.png"` (assuming you named your head image variable "head"). Try calling your function and see if the head changes. 

5. Hopefully that worked.. but frankly it's a pretty terrible function. This function is meant to _cycle through_ the heads, but all it does currently is change from head0 to head1. What you really want is to be able to fire the function over and over again, and have the `src` of the image change dynamically based on some kind of _head index variable_. IE, `var headIndex = 0`. That variable should be *outside of your function* and _increase every time the function is called_. 

6. So what you're probably thinking now is: "What good does that do me?? How do I use the head variable to set the `src` of the head image variable??". Allow me to blow your mind with the concept of [Concatenation](https://www.w3schools.com/jsref/jsref_concat_string.asp). 

## Reflection

Open `my-reflections-sprint-5.md` in VS Code and add your reflections from this challenge under the `Dress A Clown` heading.

Commit and push to GitHub.

## Stretch

1. Once you click on a satisfied clown, instead of popping up an alert it should reset back to empty!
2. Add a squirting sound effect that plays whenever you click on a clown!
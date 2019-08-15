[Home](../README.md)|
---|

# Dress The Clown!

### Learning Competencies

- Using Javascript to work with HTML images.
- Binding functions to the arrow keys.
- Writing logical, DRY functions in Javascript.

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

6. So what you're probably thinking now is: "What good does that do me?? How do I use the head variable to set the `src` of the head image variable??". Allow me to blow your mind with the concept of [Concatenation](https://www.w3schools.com/jsref/jsref_concat_string.asp). This allows you to dynamically consturct a string and use it as the `src` for your head variable. You can use the `concat` method linked above, or simply add strings together with a plus symbol. IE: `var headSrc = "./images/head" + headIndex + ".png"`, then use that variable to set the `src` of the image. 

7. In order to test whether the function is working, you'll have to be able to fire it over and over again. This is where the arrow keys come in! You're going to handle this one on your own. Do some googling. Something along the lines of "fire a function with arrow keys javascript" should do it. Bind the function to the *right arrow key*. (Spoiler alert: you will need to figure out what the "keycode" for the right arrow key is. Try using this tool [Detect Keycodes!](https://keycode.info/)).

8. All going well, by this point you should be able to use the right arrow key to toggle between different head images. However, there is a bug. If your `headIndex` variable increases _higher_ than the amount of head images available, everything breaks. How could you refactor your code to prevent this? Probably an `if ()` statement. 

9. Okay so you solved that problem, now refactor your code again to allow for toggling _left_ through the head images. This functionality will be almost indentical, but now your `headIndex` variable needs to _decrease_ rather than decrease. In order to avoid re-creating that same bug from before, you will now also need to check and make sure the index doesn't fall _below zero_. 

10. You should now have a fully functioning Put A Clown In Different Hats Simulator. The next step is going to be using the up and down arrow keys to *toggle between the different body parts*. You're going to need another index that keeps track of which body part you are currently selecting clothing for. Something along the lines of `var clothingIndex = 0`. Write some code that allows you to *use the up and down arrow keys to increase and decrease the clothingIndex variable*. The index will correspond to the different body parts: 0 = head, 1 = body, 2 = feet. Make sure you include an `if ()` statement that prevents the index from going higher than 2, or lower than 0. 

11. This is the somewhat tricky part. You need to refactor your code so that if your `clothingIndex == 0`, the left and right arrow keys change the head image, OR, if the `clothingIndex == 1`, the left and right arrow keys change the body image. etc. Try to avoid duplicating your code whenever possible. (Keep it D.R.Y.). Instead of duplicating the entire `changeClownHead() { }` function, try reworking it into a `changeClothes()` function. The logic is going to be _almost identical_. Really *the only difference is going to be which HTML `<img>` you are changing, and what your concatenated src string is.* 

12. That previous step might take you a while to get right, but once you're there; you're done! 
You have dressed the clown!

## Reflection

Open `my-reflections-sprint-5.md` in VS Code and add your reflections from this challenge under the `Dress A Clown` heading.

Commit and push to GitHub.

## Stretch

1. It's kind of annoying how you can't tell _which_ body part you have selected. Could you highlight that in some way?
2. Try adding some of your own outfits! Copy one of the images and doodle on it in the paint application of choice. 
3. What if there was a button you could press that could SAVE a picture of your clown to your computer to share with your friends? How on earth would you do that? More importantly; Why would you want to?!
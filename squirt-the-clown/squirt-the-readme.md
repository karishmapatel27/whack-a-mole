[Home](../README.md)|
---|

# Squirt The Clown

### Learning Competencies

- Using Javascript to work with HTML images.
- The onClick() method.
- Writing and firing functions in Javascript.

## Summary

These clowns love to receive water in the mouth and have their balloons inflated!
Unfortunately for the clowns, currently they can not be squirted! 
Use your Javascript skills to squirt the clowns.

Resources:\
[Javascript onClick() method](https://www.w3schools.com/jsref/event_onclick.asp)\
[HTML Images](https://www.w3schools.com/html/html_images.asp)\
[Javascript Alerts](https://www.w3schools.com/jsref/met_win_alert.asp)

## Time to Squrit The Clown!

Let's get started.

1. In the `squirt-the-clown.html` document, find the three placeholder `<img>` tags and replace their `src=` elements to the `clown-0.png` image.

2. Read up on the [Javascript onClick() method](https://www.w3schools.com/jsref/event_onclick.asp).
You will need to write a function that fires every time you click on one of the clowns.

3. You might be asking yourself something like, "how do I change an HTML image using Javascript?"
Instead of asking yourself that, try typing _those exact words_ into Google. And further more, whenever you find yourself pondering over how to do something specific while programming: *TYPE THE WORDS INTO GOOGLE*.

4. In order to change to the correct image, you're going to need to keep track of the current state of the clowns. There are several ways you could do this; probably you're going to want to create some variables. ie, `var clown1 = 0`, or `var clown1 = "empty", etc. You could also store all the clown states in a single object. 

5. If a clown has cycled through all the images and is "full", clicking on them should pop up a [Javascript Alert](https://www.w3schools.com/jsref/met_win_alert.asp) that says, "Clown Number `x`'s desires are completely satasfied!". Congratulations! 

## Reflection

Open `my-reflections-sprint-5.md` in VS Code and add your reflections from this challenge under the `Squirt A Clown` heading.

Commit and push to GitHub.

## Stretch

1. Once you click on a satasfied clown, instead of popping up an alert it should reset back to empty!
2. Add a squirting sound effect that plays whenever you click on a clown!
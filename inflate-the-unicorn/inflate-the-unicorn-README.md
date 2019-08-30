[Home](../README.md)|
---|

# Squirt The Clown

### Learning Competencies

- Using Javascript to work with HTML images.
- Firing functions with the onClick() method.
- Using conditionals to control function logic.
- Using the Alert() method.

## Summary

These unicorns have baloons for horns; but what good is a deflated horn? In this challenge you are going to replace the placeholder images with deflated unicorns, then write some logic that cycles through the appropriate images when you click on a unicorn. Once the unicorn horn is fully inflated, an alert will pop up on the screen with a heartfelt THANK YOU from the unicorn. 

Resources:\
[HTML Images](https://www.w3schools.com/html/html_images.asp)\
[Javascript onClick() method](https://www.w3schools.com/jsref/event_onclick.asp)\
[Javascript Alerts](https://www.w3schools.com/jsref/met_win_alert.asp)

## Help those unicorns! 

Let's get started.

0. Open up `inflate-the-unicorn.html` in your browser and have a look. You'll notice that currently it's just placeholder images. The first step is going to be replacing those with pictures of the completely deflated unicorn in the /images directory. 

1. With the `inflate-the-unicorn.html` open in your text editor, find the three placeholder `<img>` tags and replace their `src=` elements to the `unicorn-0.png` image.

2. Read up on the [Javascript onClick() method](https://www.w3schools.com/jsref/event_onclick.asp).
You will need to write a function that fires every time you click on one of the unicorns.

3. You might be asking yourself something like, "how do I change an HTML image using Javascript?"
Instead of asking yourself that, try typing _those exact words_ into Google. And further more, whenever you find yourself pondering over how to do something specific while programming: *TYPE THE WORDS INTO GOOGLE*.

4. In order to change to the correct image, you're going to need to keep track of the current state of the unicorns. There are several ways you could do this; probably you're going to want to create some variables. ie, `var unicorn1 = 0`, or `var unicorn1 = "empty", etc. You could also store all the unicorn states in a single object. 

5. If a unicorn has cycled through all the images and is "full", clicking on them should pop up a [Javascript Alert](https://www.w3schools.com/jsref/met_win_alert.asp) that says, "Unicorn Number `x`'s says thank you!". Congratulations! 

## Reflection

Open `my-reflections-sprint-5.md` in VS Code and add your reflections from this challenge under the `Inflate A Unicorn!` heading.
Did you learn anything new during this exercise? What was it? 

Commit and push to GitHub.

## Stretch

1. Once you click on a satisfied unicorn, instead of popping up an alert, what else could happen?
2. Would adding some sound effects to this process make it more interesting? What sound does a unicorn make? 
3. Could you replace the unicorn with another mystical animal of your choice? 
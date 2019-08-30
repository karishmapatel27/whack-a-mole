[Home](../README.md)|
---|

# Whack-a-Mole

### Learning Competencies

- Using Javascript to work with HTML tables
- The onClick() method.
- Playing audio with Javascript
- Working with Randomness in logic

## Summary

The Javascript Carnival has a mole problem! But it's the opposite problem to the one you're picturing; there aren't _enough_ moles. None in fact! Use your Javascript skills to write functions that randomly pop up a mole, then pop it back up somewhere else again after it has been whacked. This challenge is going to require some conditional logic and randomness. 

Resources:\
[HTML Tables](https://www.w3schools.com/html/html_tables.asp)
[Javascript onClick() method](https://www.w3schools.com/jsref/event_onclick.asp)\
[Playing audio with Javascript](https://www.developphp.com/lib/JavaScript/Audio)\
[Javascript Random](https://www.w3schools.com/js/js_random.asp)  

## Whack! That! Mole!

Let's get started.

*NOTE FROM THE AUTHOR: This is totally confusing and needs to be all rewritten. Give a step by step breakdown of why you are doing what you're doing.*

1. The trickiest part of this whole exercise basically comes right at the beginning. You need to find a way to _store references_ to all the cells so you can put moles in them. There are multiple ways you could go about doing this; trying [reading up on how to work with HTML tables using Javascript.](https://www.w3schools.com/jsref/coll_table_cells.asp). Probably your best bet is going to involve _creating an array that has all the cells inside it._ If that is a daunting task, *ask the internet how to do it*.

2. Once you have a reference to all the cells, you have to write a function that randomly selects one to put the mole in. If you have stored the cells in an array, you can create an indexer by generating a random number within a certain range and then use it to get back a random cell from inside your array. ie, 

`var randomIndex = GetRandomIndexFunctionIWrote()`\
`var randomCell = cells[randomIndex]`

Note: your random indexer should only be able to go as high as the length of the array, otherwise it will try to access cells that don't exist and you will get an "indexer out of bounds" error.

3. Now you need to write a function that actually _puts_ the mole into the cell. Again, there are many ways you could do this. Probably you'll want to create an image tag in the HTML and then in your `main.css`, style the #mole accordingly. ie, 

`<img id="mole" src="mole.png">` 

But- I hear you cry: "how to I make the mole appear in the cell??"
Try checking out the [appendChild method](https://www.w3schools.com/jsref/met_node_appendchild.asp), and remember that you can always find what you need with a well crafted Google search, Something along the lines of: "move an HTML element with Javascript".

4. By this point you should have a mole that appears in a random cell, and if you refresh your browser it should appear in a different cell. (Barring the 1/25 chance that it re-appears in the same cell again). Now you'll need to write an [onClick() method](https://www.w3schools.com/jsref/event_onclick.asp) that watches for clicks on the mole, and fires a WhackedMole() function. The WhackedMole() function is going to [playing a sound effect](https://www.developphp.com/lib/JavaScript/Audio) when it is executed. An _hilarious cartoon spring sound effect_ has been provided for you: `whack-audio.wav`.

5. The WhackedMole() function should also move the mole to a different cell, but that shouldn't be too challenging because you can just re-use the functions you wrote at the start of the exercise. 

You're done! Whack-a-Mole!

## Reflection

Open `my-reflections-sprint-5.md` in VS Code and add your reflections from this challenge under the `Whack-a-Mole` heading.
What was the hardest part of this exercise? Can you think of any different ways you could have accomplished the same outcome? 

Commit and push to GitHub.

## Stretch

1. Add a COUNTER to the page that counts how many times you have whacked the mole!
2. Add a TIMER to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.
3. Add a HIGH SCORE field that stores your highest score and replaces it if a new, higher score is achived. *Note, this score will be reset if you refresh your browser. For it to be persistent, you would need some form of _database_ which we will cover later in the course.
4. Rewrite your RandomIndex() function so it can't give you the same index twice in a row. 

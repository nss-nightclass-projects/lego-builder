# Lego Builder

This assignment is inspired in part by [this pretty nifty book](https://www.youtube.com/watch?v=tDnDrO7neUE) 📖

## Setup

You will have at least this many files with your setup:
```
|- db
    |- parts.json
|- src
    |- components
        |- legoCharacter.js
        |- legoCharacter.scss
    |- data
        |- partsData.js
    |- index.js
    |- index.scss
    |- index.html
|- .eslintignore
|- .eslintrc
|- .gitignore
|- package.json
|- README.md
|- webpack.config.js
```

## Requirements

- Use [SASS](https://sass-lang.com/guide) for styling your page and components.
- When the user loads the page, they should see a head, a torso, and legs printed together on the page. This is your lego character.
- Your lego character should display with a name that is the mashup of names of the head + torso + legs pieces respectively.
- There should be some way for the user to change the selected head, torso, and leg pieces. You should implement at least one of these:
  1. 3 dropdowns that contain the different options the user can choose. When the user chooses an option, it swaps out that lego piece. You would populate the dropdowns with json data.
  1. When clicking on the head, torso, or leg elements, that lego piece changes (as well as that portion of the name of the character)
  1. Create a randomizer button that will randomly swap out your lego character's pieces.
  
## Bonus

- When clicking on the head, torso, or leg elements, implement some type of css transition while the image changes to the next piece. Some suggestions: slide transition, fade in/fade out, ...and if you want shower tears, try implementing image flip or turn.
- Add saving functionality so that the user is able to save lego characters. The saved lego characters should show up as a smaller composite thumbnail image with their character's name. You should be able to save multiple characters (but sadly these will go away when you refresh the page).

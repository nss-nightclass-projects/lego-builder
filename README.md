# Lego Builder

This assignment is inspired by [this pretty cool book](https://www.youtube.com/watch?v=tDnDrO7neUE)

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

- When the user loads the page, they should see a head, a torso, and legs render on the page to make a constructed lego character. The character should have a name that is the concatenated names of the head + torso + legs respectively.
- There should be some way for the user to change the selected head, torso, and leg elements. You should implement at least one of these:
  1. 3 dropdowns that contain the different options the user can choose. When the user chooses an option, it changes the built lego character. 
  1. When clicking on the head, torso, or leg elements, that piece of the character changes (as well as that portion of the name of the character)
  1. Create a randomizer button that will randomly swap out your lego character's pieces.
  
## Bonus

- When clicking on the head, torso, or leg elements, implement some type of css transition while the image changes to the next piece. An extra hard bonus would be to try implementing an image flip or turn.
- Add saving functionality so that the user is able to save lego characters. The saved lego characters should show up as a smaller composite thumbnail image with their character's name. You should be able to save multiple characters (but sadly these will still go away when you refresh).

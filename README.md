# Cornered: A Dots and Boxes Game

This game is based on the pencil and paper game "Dots and Boxes". 

## How to Play

Connect two dots with a line. The player who closes a square by drawing the last side of a square wins that square. The square is then marked with that players first initial of their name. The player who just won the square gets to go again.

The game ends when all squares have been occupied. The player with the most squares wins.


# Technology Used
HTML, CSS, Javascript, JQuery, Git, Github

## Approach to Development
Establish a 5x5 board of dots connected by grayed out lines to form a grid of 5x5 boxes. 

When a line is selected change the border color property of that border. 
When the last border of a square is drawn put the first initial of the player in the square and allow another turn for the player who just went.

If a border is already drawn by a player it cannot be selected again. 

When all borders are taken by the players no more moves can be made and the game ends. 

The total squares won by each player is then compared and the player with the most squares wins the game.
 

## Link to Project
[Github](https://github.com/masterkong06/masterkong06.github.io)


## Know Issues

- The border of all 4 squares can be selected, but the player name is added to the square immediately when clicked.
- The players' whole name is displayed instead of the first initial.
- Dots are not rendered. Their higher z-index prevented interaction with the lower z-index (lines).
- Used CSS to give the illusion that the borders that are next to each other is actually one border, but it is two. Because of this it is difficult to trigger the win state.
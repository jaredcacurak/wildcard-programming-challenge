[Problem #1](http://www.trywildcard.com/challenge/problem1)
-----------
At Wildcard we have different card designs for different types of common user actions on the internet — product search cards, purchase cards, login cards, etc — and we use a bulletin board and index cards to brainstorm designs for different card types. The index cards are arranged on the bulletin board like so, where ![X](http://www.trywildcard.com/images/challenge/chart-x.png) represents a grid position where a card has been placed, and ![*](http://www.trywildcard.com/images/challenge/chart-dot.png) represents a position which is currently empty.

![chart](http://www.trywildcard.com/images/challenge/chart.png)


Since cards are representative of actions at existing web sites - like Nike.com, Walmart.com, Homedepot.com, etc - we often have many cards representing different actions for the same brand. For example Walmart may have a product search card and a store locator card. In order to keep the bulletin board grid orderly, one constraint that we'd like to apply, is that if there are multiple cards from the same brand, we'd like to lay them all out in the same row or same column so that they're easier to find as a group.


In this case, many of the spots in the grid have already been filled. One of Wildcard's designers is working on cards for a new brand, and comes up with 5 great unique cards that he has to figure out how to include in the grid. Given the current state of the grid provided by [this input file](http://www.trywildcard.com/problem1input.txt), where '*' marks an open spot and 'X' marks a committed spot, how many distinct ways can you position the 5 unique cards in open spots in the grid such that they all appear in the same row, or same column?
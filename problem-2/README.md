Problem #2
--------------
Nice job on problem 1. Try problem 2.

When a user searches for something on Wildcard, they are given a set of cards that will hopefully satisfy their query. There's a candidate set of cards for the query "running shoes" and Wildcard would like to send as many cards from the candidate set as possible to the user in the final set, however each card takes a certain amount of time to generate. In addition, depending on how many cards we send, each card takes a certain amount of time to position itself amongst the other cards.

For a set of N candidate cards, you are given an array generation_time of length N, where generation_time[i] is the # of milliseconds it takes to generate card i. You are also given an array overhead of length N, where overhead[i] is the number of milliseconds that it takes to position card i, for every additional card included in the final set. For example
```
Example 1  
generation_time[0] = 2  
overhead[0] = 4  
final set includes 2 cards

It would take 6 ms total to generate and position card 0. 2ms to generate, and 4ms  
total overhead for the 1 additional card in the final set.
```
```
Example 2  
generation_time[0] = 20  
overhead[0] = 1  
final set includes 5 card

It would take 24ms total to generate and position card 0. 20ms to generate, and 4ms  
total overhead for the 4 additional cards in the final set.
```

Unfortunately, since our servers are at capacity, we can only generate and position cards one at a time, and can't begin executing on a card in the final set until the previous card in the final set has finished executing. Your job is, given a candidate set's generate and overhead times, and a budget of the maximum # of milliseconds that we can spend constructing the final set before returning to the user, return the maximum # of cards that we can include in the final set and send to the user in the budgeted time.

- - - - - - -
**Generation** =[9, 10, 21, 20, 7, 11, 4, 15, 7, 7, 14, 5, 20, 6, 29, 8, 11, 19, 18, 22, 29, 14, 27, 17, 6, 22, 12, 18, 18, 30]  
- - - - - - -
**Overhead** =[21, 16, 19, 26, 26, 7, 1, 8, 17, 14, 15, 25, 20, 3, 24, 5, 28, 9, 2, 14, 9, 25, 15, 13, 15, 9, 6, 20, 27, 22]  
- - - - - - -
**Budget** =2912
- - - - - - -
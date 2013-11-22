var generation = [9, 10, 21, 20, 7, 11, 4, 15, 7, 7, 14, 5, 20, 6, 29, 8, 11, 19, 18, 22, 29, 14, 27, 17, 6, 22, 12, 18, 18, 30],
    overhead = [21, 16, 19, 26, 26, 7, 1, 8, 17, 14, 15, 25, 20, 3, 24, 5, 28, 9, 2, 14, 9, 25, 15, 13, 15, 9, 6, 20, 27, 22],
    budget = 2912,
    maxNumberOfCards;

maxNumberOfCards = (function () {
    'use strict';

    /**
     * Calculate the maximum number of cards included in the final set within the budgeted time.
     *
     * @param {number} budget The maximun number of milliseconds that can be spent constructing the final set.
     * @param {Array} generation The amount of time it takes each card to generate.
     * @param {Array} overhead The amount of time each card takes to position itself amongst the other cards.
     * @return {number} The number of cards that can be included in the final set.
     */
    return function (budget, generation, overhead) {
        return countWhile(nextCard(generation, overhead), lessThan(budget));
    };

    function countWhile(fn, condition) {
        var count, value;

        count = -1;
        value = fn();

        while (condition(value)) {
            value = fn();
            count += 1;
        }
        return count;
    }

    function nextCard(generation, overhead) {
        var total, index;

        total = 0;
        index = 0;

        return function () {
            total += generation[index] + reduce(take(overhead, index), sum, 0);
            index += 1;
            return total;
        };
    }

    function lessThan(value) {
        return function (number) {
            return number < value;
        };
    }

    function reduce(array, fn, init) {
        return Array.prototype.reduce.call(array, fn, init);
    }

    function take(array, length) {
        return Array.prototype.slice.call(array, 0, length);
    }

    function sum(x, y) {
        return x + y;
    }
}());

maxNumberOfCards(budget, generation, overhead); // 17
var url = 'https://raw.github.com/jaredcacurak/wildcard-programming-challenge/master/problem-1/problem1input.txt?token=45584__eyJzY29wZSI6IlJhd0Jsb2I6amFyZWRjYWN1cmFrL3dpbGRjYXJkLXByb2dyYW1taW5nLWNoYWxsZW5nZS9tYXN0ZXIvcHJvYmxlbS0xL3Byb2JsZW0xaW5wdXQudHh0IiwiZXhwaXJlcyI6MTM4NTA2NjUyMH0%3D--2d1097f4f0ea866618b364462a6bc12418b6c779',
    myRequest = new XMLHttpRequest();

myRequest.open('GET', url, false);
myRequest.send();

countDistinctPositions('*', 5, myRequest.responseText); //167160

/**
 * Calculate the number of distinct ways unique cards can be positioned in the
 * open spaces of the same row or column of a grid.
 *
 * @param openSpot {string} Character representing an open spot.
 * @param numberOfCards {number} Number of unique cards to be positioned.
 * @param grid {string} Strings representing the grid. (terminating newline)
 * @return {number} Number of distinct ways cards can be positioned.
 */
function countDistinctPositions(openSpot, numberOfCards, grid) {
    'use strict';

    grid = grid && grid.split('\n');

    return reduce(reduce(grid, occurrence(openSpot), []),
            sumIf(permutations(numberOfCards), greaterThanEqualTo(numberOfCards)),
            0);

    function reduce(array, fn, init) {
        return Array.prototype.reduce.call(array, fn, init);
    }

    function occurrence(character) {
        return function (acc, line, index) {
            var position, length;

            position = -1;
            length = line.length;

            while (true) {
                position = line.indexOf(character, ++position);

                if (position == -1) {
                    break;
                }
                else {
                    acc[index] = (acc[index] || 0) + 1;
                    acc[position + length] = (acc[position + length] || 0) + 1;
                }
            }
            return acc;
        };
    }

    function sumIf(fn, condition) {
        return function (acc, n) {
            return (condition(n))
                ? acc + fn.call(null, n)
                : acc;
        };
    }

    function permutations(n) {
        var cache = [];

        function permutation(k) {
            var result, stop;

            result = 1;
            stop = k - n;

            while (k > stop) {
                result *= k;
                k -= 1;
            }
            return result;  // k! / n!
        }

        return function (k) {
            cache[k] = cache[k] || permutation(k);
            return cache[k];
        };
    }

    function greaterThanEqualTo(value) {
        return function (number) {
            return number >= value;
        };
    }
}
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let x = 0, y = 0, current = 1, last = n * n;
    const xDirections = [1, 0, -1, 0];
    const yDirections = [0, 1, 0, -1];
    let directionIndex = 0;
    const result = Array(n);
    for(let i = 0; i < n; i++) {
        result[i] = [];
    }

    while(current <= last) {
        result[y][x] = current;
        const nextX = x + xDirections[directionIndex];
        const nextY = y + yDirections[directionIndex];
        if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || result[nextY][nextX]) {
            directionIndex = (++directionIndex)%4;
        }
        x = x + xDirections[directionIndex];
        y = y + yDirections[directionIndex];
        current++;
    }


    return result;
};

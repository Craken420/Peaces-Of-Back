//Comun
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let acc = 0;
for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
}
acc; // 45

// Simplificar con ‘reduce’:

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, index) => acc + index, 0); // 45

// Y la solución recursiva sería de la siguiente manera:

 function sum(nums) {
    if (nums.length === 0) {
        return 0;
    } else {
        const [first, ...rest] = nums;
        return first + sum(rest);
    }
 }

sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); // 45
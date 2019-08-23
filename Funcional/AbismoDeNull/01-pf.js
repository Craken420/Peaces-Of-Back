
/*** For comun */
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
}
array; // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

/*** Map haciendo la misma función que el for de manera funcional */
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => Math.pow(num, 2));
// [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

/*** Función impura
 * debido a qe puede mutar por el valor global 
 ***/
var likes = 0;
function addLike() {
    return ++likes;
}

/*** Funcion pura
 * que opera con sus parametros los cuales permiten un mayor control y testeo
 ***/
function addLike(likes) {
    return ++likes;
}
addLike(addLike(0)); // 2


/*** código imperativo ***/
let enrollment = [
    { enrrolled: 2, grade: 100 },
    { enrrolled: 2, grade: 80 },
    { enrrolled: 1, grade: 89 },
];

var totalGrades = 0;
var totalStudentsFound = 0;
for (let i = 0; i < enrollment.length; i++) {
    let student = enrollment[i];
    if (student !== null) {
        if (student.enrolled > 1) {
             totalGrades += student.grade;
             totalStudentsFound++;
        }
    }
}
var average = totalGrades  / totalStudentsFound; // 90

/*** Y la forma funcional: ***/

_.chain(enrollment)
    .filter(student => student.enrolled > 1)
    .pluck('grade')
    .average()
    .value(); // 90
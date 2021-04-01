const show = console.log
const R = require('ramda')

/*-------------------------------------------------------------
    Funciones puras
---------------------------------------------------------------*/  
    var likes = 0;
    function addLike() { return ++likes; } // Función impura: puede mutar por el valor global

    function addLike(likes) { return ++likes; } // Funcion pura: Usa sus parámetros para control

/*-------------------------------------------------------------
    Imperativa VS Funcional
---------------------------------------------------------------*/
    /* Ejem1: Imperativa */
        var array = [0, 1, 2];
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] + 2;
        }
            show('\n#1.1-Imp Sum2: ', array); //-> [2, 3, 4]

    /* Ejem1: Funcional */
        let mapResu = [0, 1, 2].map(num => num + 2); 
            show('#1.2-Fnl Sum2: ', mapResu) //-> [2, 3, 4]


    /* Ejem 2: Imperativo */
        let enrollment = [
            { enrrolled: 2, grade: 100 },
            { enrrolled: 2, grade: 80 },
            { enrrolled: 1, grade: 89 },
        ];

        var totalGrades = 0;
        var totalStudentsFound = 0;

        for (let i = 0; i < enrollment.length; i++) {
            let student = enrollment[i]; // Toma valores
            if (student !== null) // Valida nulos
                if (student['enrrolled'] > 1) { // Filtra
                    totalGrades += student.grade; // Suma
                    totalStudentsFound++; // Avanza for
                }
        }
        var average = totalGrades / totalStudentsFound; // Divide
            show('\n#2.1-Imp Promedio: ', average)

    /* Ejem 2: Funcional */
        let averageF = R.pipe(
            R.filter(student => student['enrrolled'] > 1), // Filtra
            R.pluck('grade'), // Toma valores
            val => R.sum(val) / R.length(val) // Suma y divide
        ); 
            show('#2.2-Fnl Promedio: ', averageF(enrollment), '\n') // 90
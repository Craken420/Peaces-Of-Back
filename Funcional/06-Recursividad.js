const show = console.log
const R = require('ramda')

/* Recursividad */
    const arrSumTest = [0, 1, 2];
    //#1 Imp:
        function impSum (arr){
            let acc = 0;
            for (let i = 0; i < arr.length; i++) {
                acc += arr[i];
            }
            return acc
        }
            show('  #1.1-Imp: ', impSum(arrSumTest) ); //-> 3

    //#2 ‘reduce’:
        const reducSum = arr => arr.reduce((acc, index) => acc + index, 0) 
            show('  #1.2-Reduce: ', reducSum(arrSumTest) ); //-> 3

    //#3 Recursiva:
        show('  #1.3 Recursiva:')
        
        //#3.1 Pure JS
            const pureSum = nums => {
                if (nums.length === 0) {
                    return 0;
                } else {
                    const [first, ...rest] = nums;
                    return first + pureSum(rest);
                }
            }
                show('    #1.3.1 Pure JS: ', pureSum(arrSumTest) ); //-> 3
        
        //#3.2 Ramda
            const ramdaSum = arr => ( R.isEmpty(arr) ) ? 0 : R.add( R.head(arr), ramdaSum( R.drop(1, arr) ) )
                show('    #1.3.2 Ramda:', ramdaSum(arrSumTest) ); //-> 3
        
        
        //##3.3 Ramda con closure:
            const sumClosure = R.curry( 
                (arr, acc = 0) => ( R.isEmpty(arr) ) ? acc : sumClosure( R.drop(1, arr), acc + R.head(arr) ) )
                    show('    #1.3.3 Ramda con closure: ', sumClosure(arrSumTest) ); //-> 3


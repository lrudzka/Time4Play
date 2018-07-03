class CheckColors {

    static compareColors(hiddenNumber1, hiddenNumber2, hiddenNumber3, hiddenNumber4, setNumber1, setNumber2, setNumber3, setNumber4){
        let resultArray = [0,0,0,0];
        let num1SetUp = false;
        let num2SetUp = false;
        let num3SetUp = false;
        let num4SetUp = false;

        console.log(hiddenNumber1, hiddenNumber2, hiddenNumber3, hiddenNumber4);
        console.log(setNumber1, setNumber2, setNumber3, setNumber4);

        if (setNumber1 == hiddenNumber1 ) {
            resultArray[0] = 2;
            num1SetUp = true;
        }

        if (setNumber2 == hiddenNumber2 ) {
            resultArray[1] = 2;
            num2SetUp = true;
        }

        if (setNumber3 == hiddenNumber3 ) {
            resultArray[2] = 2;
            num3SetUp = 3;
        }

        if (setNumber4 == hiddenNumber4) {
            resultArray[3] = 2;
            num4SetUp = true;
        }

        console.log('etap1, resultArray: ', resultArray);

        if ( resultArray[0] == 0 ) {

            if        (setNumber1 == hiddenNumber2 && num2SetUp == false) {
                resultArray[0] = 1;
                num2SetUp = true;
            } else if (setNumber1 == hiddenNumber3 && num3SetUp == false) {
                resultArray[0] = 1;
                num3SetUp = true;
            } else if (setNumber1 == hiddenNumber4 && num4SetUp == false) {
                resultArray[0] = 1;
                num4SetUp = true;
            }

         }

        if ( resultArray[1] == 0 ) {

            if        (setNumber2 == hiddenNumber1 && num1SetUp == false) {
                resultArray[1] = 1;
                num1SetUp = true;
            } else if (setNumber2 == hiddenNumber3 && num3SetUp == false) {
                resultArray[1] = 1;
                num3SetUp = true;
            } else if (setNumber2 == hiddenNumber4&& num4SetUp == false) {
                resultArray[1] = 1;
                num4SetUp = true;
            }

        }

        if ( resultArray[2] == 0 ) {

            if        (setNumber3 == hiddenNumber1 && num1SetUp == false) {
                resultArray[2] = 1;
                num1SetUp = true;
            } else if (setNumber3 == hiddenNumber2 && num2SetUp == false) {
                resultArray[2] = 1;
                num2SetUp = true;
            } else if (setNumber3 == hiddenNumber4 && num4SetUp == false) {
                resultArray[2] = 1;
                num4SetUp = true;
            }

        }

        if ( resultArray[3] == 0 ) {

            if        (setNumber4 == hiddenNumber1 && num1SetUp == false) {
                resultArray[3] = 1;
                num1SetUp = true;
            } else if (setNumber4 == hiddenNumber2 && num2SetUp == false) {
                resultArray[3] = 1;
                num2SetUp = true;
            } else if (setNumber4 == hiddenNumber3 && num3SetUp == false) {
                resultArray[3] = 1;
                num3SetUp = true;
            }

        }

      //  resultArray.sort( (a, b) => a-b );
        return resultArray;
    }
}

module.exports = CheckColors;
class Number {

    static returnNumber1to6() {
        let randomNum = (Math.random()*5+1).toFixed(0);
        return randomNum;
    }
}

module.exports = Number;
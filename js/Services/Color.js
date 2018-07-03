class Color {

    static returnColor(num) {

        if (num == 1) {
            return 'red';
        } else if (num==2) {
            return 'white';
        } else if (num==3) {
            return 'blue';
        } else if (num==4) {
            return 'green';
        } else if (num==5) {
            return 'hotpink';
        } else if (num==6) {
            return 'yellow'
        }

    }

    static returnPointsColor(num) {
        if (num==0) {
            return 'transparent';
        } else if (num==1) {
            return 'white';
        } else if (num==2) {
            return 'black';
        }
    }
}

module.exports = Color;
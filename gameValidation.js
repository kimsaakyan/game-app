module.exports = (choices) => {
    if (choices.length < 3 || choices.length % 2 === 0) {
        console.log(
            'The number of moves must be greater than or equal to 3 and must be odd.'
        );
        console.log('For example: A B C');
        return false;
    } else {
        for (let i = 0; i < choices.length; i++) {
            for (let j = i + 1; j < choices.length; j++) {
                if (choices[i] === choices[j]) {
                    console.log(
                        `Repetition found!`
                    );
                    console.log(
                        'The moves must not be repeated. For example: A B C, NOT A B B C D'
                    );
                    return false;
                }
            }
        }
        return true;
    }
};

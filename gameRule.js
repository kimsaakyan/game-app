module.exports = (userIndex, compIndex, choices) => {
    /*
	Логика выигрывания такакя:
	1. Если выбор пользователя находится правее выбора компьютера на один шаг - пользователь выигрывает. И наоборот.
	2. Если ходы являются последними элементами массива ходов:
		2.1. Если пользователя выбрал последний ход, а компьютер самый первый из массива ходов -> компьютер выигрывает у пользователя. И наоборот.
		A B C: 
		B выигрывает A
		C выигрывает B
		C проигрывает A
	*/

    if (userIndex === compIndex) {
        return 'Ничья';
    } else if (
        (compIndex === choices.length - 1 && userIndex === 0) ||
        (userIndex > compIndex && userIndex - compIndex === 1)
    ) {
        return 'You win!';
    } else if (
        (compIndex > userIndex && compIndex - userIndex === 1) ||
        (userIndex === choices.length - 1 && compIndex === 0)
    ) {
        return 'Computer win!';
    }
};

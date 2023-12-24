const СomputerGame = require('./computerGame');
const UserGame = require('./userGame');
const gameValidation = require('./gameValidation');
const gameRule = require('./gameRule');
const { generateSecurityKey } = require('./generateSecurityKey');

const choices = process.argv.slice(2);
const computer = new СomputerGame(choices);
const user = new UserGame(choices);

function play(choices) {
    if (gameValidation(choices)) {
        //1 HMAC - комп. , для дальнейшей проверки.
        const secureKey = generateSecurityKey();

        const compHMAC = computer.calculateHMAC(secureKey);
        console.log('Computer HMAC:', compHMAC);

        // Ход пользователя. Открытие меню
        user.displayMenu();
        const userChoice = user.getUserChoice();
        console.log('User Choice:', userChoice);

		// HMAC - польз. , для дальнейшей проверки.
        const userHMAC = computer.calculateHMAC(secureKey);

        // Ход компьтера
        const computerChoice = computer.computerChoice;
        console.log('Computer Choice:', computerChoice);

        // Проверка совпадения HMAC
        if (compHMAC === userHMAC) {
            const userIndex = choices.indexOf(userChoice);
            const compIndex = choices.indexOf(computerChoice);

            console.log(gameRule(userIndex, compIndex, choices));
        }
    }
}

play(choices);

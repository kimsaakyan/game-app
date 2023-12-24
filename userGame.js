const readlineSync = require('readline-sync');
const crypto = require('crypto');

module.exports = class UserGame {
    constructor(choices) {
        this.choices = choices;
    }

    calculateHMAC(secureKey) {
        // Вычисление HMAC от хода пользователя с использованием ключа
        const hmac = crypto.createHmac('sha256', secureKey);
        hmac.update(this.getUserChoice());
        const calculatedHMAC = hmac.digest('hex');
        return calculatedHMAC;
    }

    displayMenu() {
        console.log('Menu:');
        this.choices.forEach((choice, index) => {
            console.log(`${index + 1} - ${choice}`);
        });
        console.log('0 - Exit');
    }

    getUserChoice() {
        let choice;
        do {
            choice = readlineSync.questionInt('Enter your choice: ');
        } while (!this.choiceValidation(choice));

        if (choice === 0) {
            console.log('You exited the game.');
            process.exit(0);
        }

        return this.choices[choice - 1];
    }

    choiceValidation(choice) {
        return (
            Number.isInteger(choice) &&
            choice >= 0 &&
            choice <= this.choices.length
        );
    }
};

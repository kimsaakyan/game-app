const readlineSync = require('readline-sync');
const crypto = require('crypto');

module.exports = class UserGame {
    constructor(choices) {
        this.choices = choices;
        this.secureKey = this.generateSecurityKey();
    }

    generateSecurityKey() {
        // Генерация криптографически стойкого ключа
        const key = crypto.randomBytes(32).toString('hex');
        return key;
    }

    calculateHMAC() {
        // Вычисление HMAC от хода пользователя с использованием ключа
        const hmac = crypto.createHmac('sha256', this.secureKey);
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

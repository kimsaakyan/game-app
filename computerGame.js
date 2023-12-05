const crypto = require('crypto');

module.exports = class ComputerGame {
    constructor(moves) {
        this.moves = moves;
        this.secureKey = this.generateSecurityKey();
        this.computerChoice = this.generateComputerChoice();
    }

    generateSecurityKey() {
        // Генерация криптографически стойкого ключа
        const key = crypto.randomBytes(32).toString('hex'); 
        return key;
    }

    generateComputerChoice() {
        // Генерация случайного хода компьютера
        const randomIndex = Math.floor(Math.random() * this.moves.length);
        const computerChoice = this.moves[randomIndex];
        return computerChoice;
    }

    calculateHMAC() {
        // Вычисление HMAC от хода компьютера с использованием ключа
        const hmac = crypto.createHmac('sha256', this.secureKey);
        hmac.update(this.computerChoice);
        const calculatedHMAC = hmac.digest('hex');
        return calculatedHMAC;
    }
};

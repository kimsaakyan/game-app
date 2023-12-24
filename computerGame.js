const crypto = require('crypto');

module.exports = class ComputerGame {
    constructor(moves) {
        this.moves = moves;
        this.computerChoice = this.generateComputerChoice();
    }

    generateComputerChoice() {
        const randomIndex = Math.floor(Math.random() * this.moves.length);
        const computerChoice = this.moves[randomIndex];
        return computerChoice;
    }

    calculateHMAC(secureKey) {
        // Вычисление HMAC от хода компьютера с использованием ключа
        const hmac = crypto.createHmac('sha256', secureKey);
        hmac.update(this.computerChoice);
        const calculatedHMAC = hmac.digest('hex');
        return calculatedHMAC;
    }
};

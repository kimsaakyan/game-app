const crypto = require('crypto');

generateSecurityKey = () => {
    const key = crypto.randomBytes(32).toString('hex');
    return key;
};

module.exports = {
    generateSecurityKey,
};

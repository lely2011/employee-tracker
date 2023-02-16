const validator = require('validator');

const validate = {
    validateString(str) {
        return str !== '' || 'Please enter a valid response';
    },
    validateSalary(num) {
        if (validator.isDecimal(num)) return true;
        return 'Please enter valid salary response';
    },
    isSame(str1, str2) {
        if (str1 === st2) return true;
    }
};

module.exports = validate;
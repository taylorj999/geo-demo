var sanitizers = {};

//standard is alphanumeric plus space
sanitizers.standard = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ';
sanitizers.numeric = '1234567890';

module.exports = sanitizers;
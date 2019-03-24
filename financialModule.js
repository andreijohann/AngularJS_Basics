angular.module('Financial', [])
    .factory('currencyConverter', function() {
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeingRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
        var convert = function(amount, inCurr, outCurr) {
            return amount * usdToForeingRates[outCurr] / usdToForeingRates[inCurr];
        };

        return {
            currencies: currencies,
            convert: convert
        };

});
angular.module('Financial', [])
    .factory('currencyConverter', ['$http', function($http) {
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeingRates = {};
        var convert = function(amount, inCurr, outCurr) {
            return amount * usdToForeingRates[outCurr] / usdToForeingRates[inCurr];
        };

        var refresh = function () {
            var url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=' + currencies.join(",");
            return $http.get(url).then(function(response) {
                usdToForeingRates = response.data.rates;
                alert(JSON.stringify(response.data));
                usdToForeingRates['USD'] = 1;
            });
        };

        refresh();

        return {
            currencies: currencies,
            convert: convert
        };

}]);
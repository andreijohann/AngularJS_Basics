angular.module('invoice1', [])
    .controller('InvoiceController', function InvoiceController() {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = ['USD', 'EUR', 'CNY'];
        this.usdToForeingRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
        this.total = function total(outCurr) {
            return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
            return amount * this.usdToForeingRates[outCurr] / this.usdToForeingRates[inCurr];
        };
        this.pay = function pay() {
            window.alert('Thanks');
        };

    });
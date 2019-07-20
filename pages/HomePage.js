const logger = require('../log/logger');
require('../util/customlocators.js');
var HomePage = function(){
	
	this.loginAsCustomer = function () {
		element(by.partialButtonText("Customer")).click();
		logger.info("Successfully clicked on: Customer")
	};
	
	this.loginAsBankManager = function () {
		element(by.ngClick("manager()")).click();
		//logger.log('info', 'Successfully clicked on : Bank Manager Login');
		logger.info("Successfully clicked on : Bank Manager Login")
		return require('./AddCustomerDetails.js');
	};
	
	
};

module.exports = new HomePage();
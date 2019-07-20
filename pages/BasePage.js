const logger = require('../log/logger');
var BasePage = function name() {
	
	this.navigateToUrl = function(url) {
		
		browser.get(url);
		logger.info('Successfully navigated to url: '+ url);
	};
	
	this.getPageTitle = function() {
		
		return browser.getTitle();
	};
};

module.exports = new BasePage();
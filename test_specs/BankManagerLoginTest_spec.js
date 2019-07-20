
const logger = require('../log/logger');
var basepage = require('../pages/BasePage.js')
var OR = require('../json/OR.json');

describe("Bank Manager Login Test", function() {
	
	var home_page = require('../pages/HomePage.js');
	
	it("Login as Bank Manager", function() {
		
			basepage.navigateToUrl(OR.testsiteurl);
			logger.log('info', 'Navigating to website');
			//home_page.loginAsBankManager();
			var customer = home_page.loginAsBankManager();
			customer.gotoAddCustomer().addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName, OR.locators.addcustomerdetailspage.testdata.lName, OR.locators.addcustomerdetailspage.testdata.pCode);
			var pageTitle = basepage.getPageTitle();
			expect(pageTitle).toEqual("Protractor practice website - Banking App");
			browser.sleep(2000);
	});
	
});
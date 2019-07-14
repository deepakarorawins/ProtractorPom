
var basepage = require('../pages/BasePage.js')
describe("Bank Manager Login Test", function() {
	
	var home_page = require('../pages/HomePage.js');
	
	it("Login as Bank Manager", function() {
		
			basepage.navigateToUrl("http://www.way2automation.com/angularjs-protractor/banking/#/login");
			home_page.loginAsBankManager();
			var pageTitle = basepage.getPageTitle();
			expect(pageTitle).toEqual("Protractor practice website - Banking App");
			browser.sleep(2000);
	});
	
});
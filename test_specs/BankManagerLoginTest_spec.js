describe("Bank Manager Login Test", function() {
	
	var home_page = require('../pages/HomePage.js');
	
	it("Login as Bank Manager", function() {
		
			browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
			home_page.loginAsBankManager();
			browser.sleep(2000);
	});
	
});
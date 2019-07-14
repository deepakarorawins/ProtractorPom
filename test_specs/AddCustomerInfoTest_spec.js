
describe("Customer Information Test", function() {

	var add_customerPage = require('../pages/AddCustomerDetails.js');

	it("Adding Customer Information", function() {

		add_customerPage.gotoAddCustomer();
		add_customerPage.addCustomerInfo("Raman", "Arora", "123456");

	});

	it("Open Account", function() {

		add_customerPage.gotoOpenAccount();
		add_customerPage.openAccount("Raman Arora", "Rupee");

	});

});
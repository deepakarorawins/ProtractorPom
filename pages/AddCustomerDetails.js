var SelectWrapper = require('../util/select-wrapper.js');
var locator = require('../util/customlocators.js');
var user = new SelectWrapper(by.id("userSelect"));
var currencyList = new SelectWrapper(by.id("currency"));
var OR = require('../json/OR.json');

var AddCustomerDetails = function() {

	this.gotoAddCustomer = function() {
		element(by.ngClick(OR.locators.addcustomerdetailspage.addcustomerbutton)).click();
		return this;
	};

	this.gotoOpenAccount = function() {
		element(by.ngClick(OR.locators.addcustomerdetailspage.openAccount)).click();
		return this;
	};

	this.gotoSearchCustomer = function() {
		element(by.buttonText("Customers")).click();
		return this;
	};

	this.addCustomerInfo = function(fname, lname, postCode) {
		element(by.model(OR.locators.addcustomerdetailspage.fName)).sendKeys(fname);
		element(by.model(OR.locators.addcustomerdetailspage.lName)).sendKeys(lname);
		element(by.model(OR.locators.addcustomerdetailspage.pCode)).sendKeys(postCode);
		element(by.css(OR.locators.addcustomerdetailspage.addcustomer)).click();

		browser.sleep(2000);

		var alertDialog = browser.switchTo().alert();
		alertDialog.getText().then(function(text) {
			console.log(text);
		});

		alertDialog.accept();
		browser.sleep(2000);
		return this;
	};

	this.openAccount = function(customer, currency) {
		user.selectByText(customer);
		currencyList.selectByText(currency);
		element(by.buttonText("Process")).click();

		browser.sleep(2000);

		var alertDialog = browser.switchTo().alert();
		alertDialog.getText().then(function(text) {
			console.log(text);
		});

		alertDialog.accept();
		browser.sleep(2000);

	};

	this.validateCustomerRecords = function() {
		element(by.model("searchCustomer")).sendKeys("Raman");
		var firstName = element(by.repeater("cust in Customer").row(0).column(
				"cust.fName"));
		firstName.getText().then(function(text) {
			console.log(text);
		});

		expect(firstName.getText()).toEqual("Raman");

		browser.sleep(2000);
	};

};

module.exports = new AddCustomerDetails();
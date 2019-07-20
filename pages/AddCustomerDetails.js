const logger = require('../log/logger');
var SelectWrapper = require('../util/select-wrapper.js');
var locator = require('../util/customlocators.js');
var user = new SelectWrapper(by.id("userSelect"));
var currencyList = new SelectWrapper(by.id("currency"));
var OR = require('../json/OR.json');

var AddCustomerDetails = function() {

	this.gotoAddCustomer = function() {
		element(by.ngClick(OR.locators.addcustomerdetailspage.addcustomerbutton)).click();
		logger.info("Successfully clicked on link: Add Customer")

		return this;
	};

	this.gotoOpenAccount = function() {
		element(by.ngClick(OR.locators.addcustomerdetailspage.openAccount)).click();
		logger.info("Successfully clicked on link: Open Account")
		return this;
	};

	this.gotoSearchCustomer = function() {
		element(by.buttonText("Customers")).click();
		logger.info("Successfully clicked on link: Customers")
		return this;
	};

	this.addCustomerInfo = function(fname, lname, postCode) {
		element(by.model(OR.locators.addcustomerdetailspage.fName)).sendKeys(fname);
		logger.info("Successfully entered text in First Name textbox: "+fname)
		element(by.model(OR.locators.addcustomerdetailspage.lName)).sendKeys(lname);
		logger.info("Successfully entered text in Last Name textbox: "+lname)
		element(by.model(OR.locators.addcustomerdetailspage.pCode)).sendKeys(postCode);
		logger.info("Successfully entered text in Post Code textbox: "+postCode)
		element(by.css(OR.locators.addcustomerdetailspage.addcustomer)).click();
		logger.info("Successfully clicked on button: Add Customer")

		browser.sleep(2000);

		var alertDialog = browser.switchTo().alert();
		alertDialog.getText().then(function(text) {
			logger.info("Alert appeared: "+text);
			//console.log(text);
			alertDialog.accept();
			logger.info("Successfully accepted alert")
		});

		
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
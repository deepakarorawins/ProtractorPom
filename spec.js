describe("First spec file", function() {

		it("Verify page title", function() {
			browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
			var pageTitle = browser.getTitle();
			
			expect(pageTitle).toEqual("Protractor practice website - Banking App");
		});
		
});
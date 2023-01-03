import homePage_PO from "../support/pageObjects/homePage_PO";

describe("Check currency symbol on each product price", function () {
    const homePage = new homePage_PO();

    beforeEach(function () {
        homePage.openHomePage();
    })

    before(function () {
        cy.fixture("currName").then(function (data) {
            globalThis.data = data;
        })
    })

    it("Check currency symbol on each product in Home Page", function () {

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })

    it("Check currency symbol on each product in Apparel & accessories Page", function () {
        homePage.selectSpecificPage("Apparel & accessories")

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })

    it("Check currency symbol on each product in Makeup Page", function () {
        homePage.selectSpecificPage("Makeup")

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })

    it("Check currency symbol on each product in Skincare Page", function () {
        homePage.selectSpecificPage("Skincare")

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })

    it("Check currency symbol on each product in Fragrance Page", function () {
        homePage.selectSpecificPage("Fragrance")

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })

    it("Check currency symbol on each product in Men Page", function () {
        homePage.selectSpecificPage("Men")

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })

    it("Check currency symbol on each product in Hair Care Page", function () {
        homePage.selectSpecificPage("Hair Care")

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })

    it("Check currency symbol on each product in Books Page", function () {
        homePage.selectSpecificPage("Books")

        homePage.selectCurrency("Euro");
        homePage.assertPriceContain_CurrSymbol("€")

        homePage.selectCurrency("Pound");
        homePage.assertPriceContain_CurrSymbol("£")

        homePage.selectCurrency("Dollar");
        homePage.assertPriceContain_CurrSymbol("$")
    })
    
})
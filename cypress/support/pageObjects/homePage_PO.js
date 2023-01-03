class homePage_PO {
  openHomePage(headerName) {
    cy.visit("/");
  }

  selectSpecificPage(pageName) {
    cy.get("a[href*='product/category&path=']").contains(pageName).click({multiple: true, force: true});
  }

  selectCurrency(currName) {
    cy.get(".block_6 > .nav > .dropdown > .dropdown-toggle > .caret").click();
    cy.get("a[href*='&currency=']").contains(currName).click();
  }

  assertPriceContain_CurrSymbol(currSymbol) {
    cy.get('.pricetag .price').each(($el, index, $list) => {
      cy.log("Index: " + index + " : "+  $el.text())
    }).invoke("text").then((text) => {
      expect(text).to.contain(currSymbol)
    })
  }
}

export default homePage_PO;

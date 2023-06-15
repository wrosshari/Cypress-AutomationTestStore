require('cypress-xpath');
import homePage_PO from "../support/pageObjects/homePage_PO";

describe("Check product list grid view", function () {
    const homePage = new homePage_PO();

    beforeEach(function () {
        homePage.openHomePage();
        homePage.selectSpecificPage("Apparel & accessories");
    })

 it('shoudl display products sorted by ascending price', () => {
      //select filter Price Low > High
     cy.get('[name="sort"]').select('Price Low > High');

     //get all product prices
     cy.xpath('//div[@class="thumbnails grid row list-inline"]/div/div[2]/div[3]/div[@class="price"]').then(($prices) => {
         const prices = $prices.map((_, el)=> Number(el.innerText.replace('$', '')));   
        cy.log(prices)
     //verify that prices is sorted from the cheapest
          for (let i = 0; i < prices.length - 1; i++) {
              expect(prices[i]).to.be.lte(prices[i + 1]);
          }
     })
 });

    it('should displayed product details in each card', () => {
        // Get all the product cards on the page
        cy.xpath('//div[@class="thumbnails grid row list-inline"]/div/div/div/a[@class="prdocutname"]').each((card)=> {
            // Assert that the product name is visible within the card
            cy.wrap(card).should('be.visible')
        })
      })

      it('should displayed product images in each card', () => {
        // Get all the product cards on the page
        cy.xpath('//div[@class="thumbnails grid row list-inline"]/div/div[2]/a/img').each((card)=> {
            // Assert that the product name is visible within the card
            cy.wrap(card).should('be.visible')
        })
      })

      it('should displayed product prices in each card', () => {
        // Get all the product cards on the page
        cy.xpath('//div[@class="thumbnails grid row list-inline"]/div/div[2]/div[3]/div[@class="price"]').each((card)=> {
            // Assert that the product name is visible within the card
            cy.wrap(card).should('be.visible')
        })
      })
})
# Cypress-AutomationTestStore
Welcome to my UI automation test store test repository using cypress

What should be installd : 
```
- npm install
- npm --save-dev cypress@10
```

How to run :
```
- open your terminal on dir location
- npx cypress run
- select cypress test file : currency.cy.js
```

Scenario test : 
- this test will select each currency and verify whether in product price will show the right currency or not

------------------------------------------------------------------------------------------------------------------------
|       Test case        |       Test steps        |            Expected             |      Actual      |     Status    |
-------------------------|-------------------------|---------------------------------|------------------|----------------
|  User select currecy   |  - open web             | show selected currency in each product product price    |  as expected     |   PASSED      |
|                        |  - click on currency dropdown menu   |       |                  |               |
|                        |  - select currency       |                                 |                  |               |
                        


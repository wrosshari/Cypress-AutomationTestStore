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
|  User select currecy   |  - open web             |   show selected currency in     |  as expected     |   PASSED      |
|                        |  - click on currency dropdown menu   |   each product product price    |                  |               |
|                        |  - select curreny       |                                 |                  |               |
                        
                        
| Attempt | #1  | #2  |
| ------- | --- | --- |
| Seconds | 301 | 283 |
    

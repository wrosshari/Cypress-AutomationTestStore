import loginPage_PO from "../support/pageObjects/loginPage_PO";

describe('Login Page', () => {
    const loginPage = new loginPage_PO();

    beforeEach(() => {
      // Load the login page before each test
      loginPage.openLoginPage('/index.php?rt=account/login')
    })
  
    it('should display the login form', () => {
      // Check if the login form is displayed
      loginPage.checkFields()
    })
  
    it('should show an error message for invalid login name', () => {
      // Enter invalid username and password
      loginPage.inputLoginForm('test','123123')
  
      // Check if the error message is displayed
      loginPage.verifyErrorMessage('Incorrect login or password provided.')
    })

    it('should show an error message for invalid password', () => {
      // Enter invalid username and password
      loginPage.inputLoginForm('testwinda','1231234')
  
      // Check if the error message is displayed
      loginPage.verifyErrorMessage('Incorrect login or password provided.')
    })

    it('should show an error message for empty field', () => {
      // Enter invalid username and password
      loginPage.inputLoginForm(' ',' ')
  
      // Check if the error message is displayed
      loginPage.verifyErrorMessage('Incorrect login or password provided.')
    })
  
    it('should successfully log in with valid credentials', () => {
      // Enter valid username and password
      loginPage.inputLoginForm('testwinda','123123')
  
      // Check if the user is redirected to the account page
      cy.url().should('include', '/index.php?rt=account/account')

      //Check if on account page iis showing user name
      cy.get('.heading1').should('contain', 'test winda')
    })
  })
  
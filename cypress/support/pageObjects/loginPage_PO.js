
const loginnameField = 'input[name="loginname"]'
const passwordField = 'input[name="password"]'
const loginButton = 'button[title="Login"]'

class loginPage_PO {

    openLoginPage(path){
        cy.visit(path)
    }

    checkFields(){
        cy.get('form').should('be.visible')
        cy.get(loginnameField).should('exist')
        cy.get(passwordField).should('exist')
        cy.get(loginButton).should('exist')
    }

    inputLoginForm(loginname, password){
        cy.get(loginnameField).type(loginname)
        cy.get(passwordField).type(password)
        cy.get(loginButton).click()
    }

    verifyErrorMessage(message) {
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('contain', message)
    }
}
export default loginPage_PO;
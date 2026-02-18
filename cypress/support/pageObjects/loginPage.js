class LoginPage {

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  }

  inputUsername(username) {
    cy.get('.oxd-input').eq(0).clear()
    if (username) {
      cy.get('.oxd-input').eq(0).type(username)
    }
  }

  inputPassword(password) {
    cy.get('.oxd-input').eq(1).clear()
    if (password) {
      cy.get('.oxd-input').eq(1).type(password)
    }
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  verifyDashboard() {
    cy.url().should('include', '/dashboard')
  }

  verifyInvalidCredential() {
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
  }

  verifyRequiredField() {
    cy.get('.oxd-input-field-error-message')
      .should('be.visible')
  }

}

export default LoginPage

describe('OrangeHRM Login Feature - With Intercept', () => {

  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

  beforeEach(() => {
    cy.visit(url)
  })

  // TC01 - Intercept POST validate (login success)
  it('TC01 - Login berhasil dengan intercept validate', () => {

    cy.intercept('POST', '**/auth/validate').as('loginRequest')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302)
  })


  // TC02 - Intercept dashboard API setelah login
  it('TC02 - Login dan intercept dashboard API', () => {

    cy.intercept('GET', '**/dashboard/**').as('dashboardRequest')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@dashboardRequest').its('response.statusCode').should('eq', 200)
  })


  // TC03 - Intercept login gagal
  it('TC03 - Login gagal dengan intercept response invalid', () => {

    cy.intercept('POST', '**/auth/validate').as('invalidLogin')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.get('button[type="submit"]').click()

    cy.wait('@invalidLogin')
    cy.contains('Invalid credentials').should('be.visible')
  })


  // TC04 - Intercept request dengan query berbeda
  it('TC04 - Intercept action-summary API', () => {

    cy.intercept('GET', '**/api/v2/dashboard/employees/action-summary').as('actionSummary')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)
  })


  // TC05 - Intercept semua request login dengan wildcard
  it('TC05 - Intercept wildcard auth', () => {

    cy.intercept('**/auth/**').as('authWildcard')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@authWildcard')
    cy.url().should('include', '/dashboard')
  })

})

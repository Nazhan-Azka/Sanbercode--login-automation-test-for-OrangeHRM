describe('OrangeHRM Login Feature', () => {

  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

  beforeEach(() => {
    cy.visit(url)
  })

  // TC01 - Login dengan credential valid
  it('TC01 - Login berhasil dengan username dan password valid', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  // TC02 - Login gagal dengan password salah
  it('TC02 - Login gagal dengan password salah', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  // TC03 - Login gagal dengan username kosong
  it('TC03 - Login gagal dengan username kosong', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  // TC04 - Login gagal dengan password kosong
  it('TC04 - Login gagal dengan password kosong', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  // TC05 - Login gagal dengan kedua field kosong
  it('TC05 - Login gagal dengan username dan password kosong', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

})
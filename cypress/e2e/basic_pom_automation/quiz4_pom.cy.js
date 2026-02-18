import LoginPage from '../../support/pageObjects/loginPage'

describe('OrangeHRM Login Feature - POM Implementation', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
    cy.fixture('loginData').as('data')
  })

  // TC01 - Login Success
  it('TC01 - Login berhasil dengan credential valid', function () {

    loginPage.inputUsername(this.data.validUser.username)
    loginPage.inputPassword(this.data.validUser.password)
    loginPage.clickLogin()
    loginPage.verifyDashboard()

  })

  // TC02 - Login gagal password salah
  it('TC02 - Login gagal dengan password salah', function () {

    loginPage.inputUsername(this.data.invalidUser.username)
    loginPage.inputPassword(this.data.invalidUser.password)
    loginPage.clickLogin()
    loginPage.verifyInvalidCredential()

  })

  // TC03 - Login gagal username kosong
  it('TC03 - Login gagal dengan username kosong', function () {

    loginPage.inputUsername('')
    loginPage.inputPassword(this.data.validUser.password)
    loginPage.clickLogin()
    loginPage.verifyRequiredField()

  })

  // TC04 - Login gagal password kosong
  it('TC04 - Login gagal dengan password kosong', function () {

    loginPage.inputUsername(this.data.validUser.username)
    loginPage.inputPassword('')
    loginPage.clickLogin()
    loginPage.verifyRequiredField()

  })

  // TC05 - Login gagal kedua field kosong
  it('TC05 - Login gagal dengan username dan password kosong', function () {

    loginPage.inputUsername(this.data.emptyUser.username)
    loginPage.inputPassword(this.data.emptyUser.password)
    loginPage.clickLogin()
    loginPage.verifyRequiredField()

  })

})

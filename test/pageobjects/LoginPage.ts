import AbstractPage from './AbstractPage'

class LoginPage extends AbstractPage {
  public get loginForm() {
    return $('#login_form')
  }

  public get userLogin() {
    return $('#user_login')
  }

  public get userPassword() {
    return $('#user_password')
  }

  public get signInButton() {
    return $('input[type="submit"]')
  }

  public get errorMessage() {
    return $('.alert-error')
  }

  public async assertLoginPageIsVisible() {
    await this.loginForm.waitForDisplayed()
  }

  public async login(username: string, password: string) {
    this.assertLoginPageIsVisible()
    await this.userLogin.setValue(username)
    await this.userPassword.setValue(password)
    await this.signInButton.click()
  }

  public async assertLoginPageErrorMessage() {
    await expect(this.errorMessage).toHaveTextContaining(
      'Login and/or password are wrong'
    )
  }
}

export default new LoginPage()

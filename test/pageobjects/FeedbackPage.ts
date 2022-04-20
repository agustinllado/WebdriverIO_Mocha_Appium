import AbstractPage from './AbstractPage'

class FeedbackPage extends AbstractPage {
  public get nameField() {
    return $('#name')
  }

  public get emailField() {
    return $('#email')
  }

  public get subjectField() {
    return $('#subject')
  }

  public get messageField() {
    return $('#comment')
  }

  public get submitButton() {
    return $('input[type="submit"]')
  }

  public async submitForm(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {
    await this.nameField.setValue(name)
    await this.emailField.setValue(email)
    await this.subjectField.setValue(subject)
    await this.messageField.setValue(message)
    await this.submitButton.click()
  }
}

export default new FeedbackPage()

import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage'
import FeedbackPage from '../pageobjects/FeedbackPage'
import NavBar from '../pageobjects/components/NavBar'

describe('Login Test', () => {
  it.skip('Should not login with invalid username and password', async () => {
    await HomePage.visit()
    await NavBar.clickOnSignIn()

    await LoginPage.login('invalid-username', 'invalid-password')

    await LoginPage.assertLoginPageErrorMessage()
    await LoginPage.waitForSeconds(3)
  })
})

describe('Feedback Test', () => {
  it('Should submit the feedback form', async () => {
    await HomePage.visit()
    await HomePage.clickFeedbackLink()
    await FeedbackPage.submitForm(
      'Agustin',
      'Test@test.com',
      'Subject',
      'This is my message'
    )
    await FeedbackPage.waitForSeconds(2)
  })
})

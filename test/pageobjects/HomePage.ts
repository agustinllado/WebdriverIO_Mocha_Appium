import AbstractPage from './AbstractPage'

class HomePage extends AbstractPage {
  public get feedbackLink() {
    return $('#feedback')
  }

  public async visit() {
    await browser.url('http://zero.webappsecurity.com/index.html')
  }

  public async clickFeedbackLink() {
    await this.feedbackLink.click()
  }
}

export default new HomePage()

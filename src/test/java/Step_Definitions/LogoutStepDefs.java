package Step_Definitions;

import Pages.HomePage;
import Utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.log4j.Logger;

import static org.junit.Assert.assertTrue;

public class LogoutStepDefs {

    private static final Logger logger = Logger.getLogger(LogoutStepDefs.class);

    HomePage homePage = new HomePage();

    @Given("I am at the top of the {string} page")
    public void i_am_at_the_top_of_the_page(String commentsTitle) {
        assertTrue(homePage.commentsTitle.isDisplayed());
        logger.info("I am at the top of the Comments page");
    }

    @When("I click logout button")
    public void i_click_logout_button() {
        BrowserUtils.waitFor(2);    //This wait is not necessary, I put this just for watching the steps!
        homePage.logoutButton.click();
    }

    @Then("I should be able to logout successfully and see the login page again")
    public void i_should_be_able_to_logout_successfully_and_see_the_login_page_again() {
        BrowserUtils.waitForVisibility(homePage.loginTitle, 3);
        BrowserUtils.waitFor(2);    //This wait is not necessary, I put this just for watching the steps, normally previous wait is enough!
        assertTrue(homePage.loginTitle.isDisplayed());
        logger.info("Logout is successful");
    }
}

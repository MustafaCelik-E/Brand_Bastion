package Step_Definitions;

import Pages.HomePage;
import Utilities.BrowserUtils;
import Utilities.ConfigurationReader;
import Utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.log4j.Logger;

import static org.junit.Assert.assertEquals;

public class LoginStepDefs {

    private static final Logger logger = Logger.getLogger(LoginStepDefs.class);

    HomePage homePage = new HomePage();

    @Given("I am on the {string} page")
    public void i_am_on_the_page(String expectedTitle) {
        assertEquals(expectedTitle.toLowerCase(), homePage.loginTitle.getText().toLowerCase());
        logger.info("I am on the login page");
    }

    @When("I type the {string} key and click start")
    public void i_type_the_key_and_click_start(String key) {
        if(key.equalsIgnoreCase("valid")){
            homePage.keyBox.sendKeys(ConfigurationReader.get("valid_login_key"));
            homePage.startButton.click();

        }else if(key.equalsIgnoreCase("invalid")){
            homePage.keyBox.sendKeys(ConfigurationReader.get("invalid_login_key"));
            homePage.startButton.click();

        }else{
            logger.info("Check the step in the feature file!");
        }
    }

    @Then("I should be able to login and see the {string}")
    public void i_should_be_able_to_login_and_see_the(String expectedTitle) {
        BrowserUtils.waitForVisibility(homePage.commentsTitle,3);
        BrowserUtils.waitFor(2);//This wait is not necessary, I put this just for watching the steps, normally previous wait is enough!
        assertEquals(expectedTitle.toLowerCase() , homePage.commentsTitle.getText().toLowerCase());
        logger.info("Login is successful");
    }

    @Then("I shouldn't be able to login and I should see {string} alert message")
    public void i_shouldn_t_be_able_to_login_and_I_should_see_alert_message(String alertMessage) {
        BrowserUtils.waitFor(3);
        assertEquals(alertMessage.toLowerCase() , Driver.get().switchTo().alert().getText().toLowerCase());
        logger.info("Login is not successful");
    }

}

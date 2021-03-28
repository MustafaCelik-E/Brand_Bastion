package Step_Definitions;

import Pages.HomePage;
import Utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.log4j.Logger;

import static org.junit.Assert.assertTrue;

public class CommentsStepDefs {

    private static final Logger logger = Logger.getLogger(CommentsStepDefs.class);

    HomePage homePage = new HomePage();

    @When("I process with {string} and {string}")
    public void i_process_with_and(String classification, String status) {
        homePage.commentType(classification).click();
        logger.info("Chose "+classification+" as a classification.");
        BrowserUtils.waitFor(1);//This wait is not necessary, I put this just for watching the steps!

        homePage.commentType(status).click();
        logger.info("Chose "+status+" as a status.");
        BrowserUtils.waitFor(1);//This wait is not necessary, I put this just for watching the steps!
    }

    @Then("I should be able to click the process button")
    public void i_should_be_able_to_click_the_process_button() {
        assertTrue(homePage.processButton.isEnabled());
        logger.info("Verified the process button is enabled after choosing a classification and a status.");

        logger.info("In the Manual Test, I realised that it is enabled to process without selecting a classification and a status," +
                "for my understanding; it shouldn't allow me to click process without choosing a classification and a status!" +
                "(Looks like a Bug to me, check the Requirements!!)");
    }
}

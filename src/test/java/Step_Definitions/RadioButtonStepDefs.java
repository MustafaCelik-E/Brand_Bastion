package Step_Definitions;

import Pages.HomePage;
import Utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.apache.log4j.Logger;

import static org.junit.Assert.assertTrue;

public class RadioButtonStepDefs {

    private static final Logger logger = Logger.getLogger(RadioButtonStepDefs.class);

    HomePage homePage = new HomePage();

    @Then("all the {string} should be enabled to click")
    public void all_the_should_be_enabled_to_click(String type) {
        assertTrue(BrowserUtils.radioButtonsEnabled(homePage.radioButtons(type)));
        logger.info(type+" radio buttons are enabled.");
    }
}

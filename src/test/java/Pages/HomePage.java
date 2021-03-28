package Pages;

import Utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage {

    public HomePage(){
        PageFactory.initElements(Driver.get(),this);
    }


    @FindBy(css = ".input")
    public WebElement keyBox;

    @FindBy(xpath = "//button[contains(text(),'Start')]")
    public WebElement startButton;

    @FindBy(xpath = "//label[contains(text(),'Login')]")
    public WebElement loginTitle;

    @FindBy(xpath = "//div[contains(text(),'Comments')]")
    public WebElement commentsTitle;

    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    public WebElement logoutButton;

    @FindBy(xpath = "(//button[contains(text(),'PROCESS')])[1]")
    public WebElement processButton;


    public WebElement commentType(String type) {
        return Driver.get().findElement(By.xpath("(//input[@value='"+type+"'])[1]"));
    }

    public List<WebElement> radioButtons(String type){
        return Driver.get().findElements(By.xpath("//input[@value='"+type+"']"));
    }
}

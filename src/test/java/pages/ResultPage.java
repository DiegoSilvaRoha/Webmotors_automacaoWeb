package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ResultPage {

    WebDriver driver;

    By btn_concessionaria = By.xpath("//div[@id='root']/main/div/div[2]/div/div[5]/div[2]/label");

    By btn_loja = By.xpath("//div[@id='root']/main/div/div[2]/div/div[5]/div[3]/label");


    By total_carros = By.cssSelector(".FoundCars");

    //Constructor
    public ResultPage(WebDriver driver) {

        this.driver = driver;

    }

    public void clicarConcessionaria() {

        driver.findElement(btn_concessionaria).click();

    }

    public void clicarLoja() {

        driver.findElement(btn_loja).click();

    }

    public void pegarTotal() {

        driver.findElement(total_carros).getText();

    }
}

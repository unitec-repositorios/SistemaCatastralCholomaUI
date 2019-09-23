package newpackage;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Main {
	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
    	
        String baseUrl = "https://sistemacatastralcholoma-12e5c.firebaseapp.com";
        String expectedTitle = "Para gestiones y/o tramites con las fichas catastrales, dirigete al menu que se encuentra arriba";
        String actualTitle;

        // launch Chrome and direct it to the Base URL
        driver.get(baseUrl);

        // get the actual value of the title
        actualTitle = driver.findElement(By.tagName("p")).getText();
      
        /*
         * compare the actual title of the page with the expected one and print
         * the result as "Passed" or "Failed"
         */
        if (actualTitle.contentEquals(expectedTitle)){
            System.out.println("Test Passed!");
        } else {
            System.out.println("Test Failed");
        }
        
        driver.findElement(By.cssSelector("button[routerLink=\'/propietario\'")).click();
        
        actualTitle = driver.findElement(By.tagName("h3")).getText();
        if (actualTitle.contentEquals("PROPIETARIOS EXISTENTES")){
            System.out.println("Test Passed!");
        } else {
            System.out.println("Test Failed");
        }
        
        driver.findElement(By.cssSelector("button[name=addPropietario]")).click();
        
        //fill form
        driver.findElement(By.cssSelector("input[name=nombres]")).sendKeys("Chupetin");
        driver.findElement(By.cssSelector("input[name=apellidos]")).sendKeys("Trujillo");
        driver.findElement(By.cssSelector("input[name=identidad]")).sendKeys("1234");
        driver.findElement(By.cssSelector("input[name=telefono]")).sendKeys("5678");
        driver.findElement(By.cssSelector("input[name=rtn]")).sendKeys("345");
        driver.findElement(By.cssSelector("mat-select[name=sexo]")).click();
        driver.findElement(By.cssSelector("mat-option[value=\"M\"]")).click();
        driver.findElement(By.cssSelector("mat-select[name=nacionalidad]")).click();
        driver.findElement(By.cssSelector("mat-option[value=\"PAN\"]")).click();
        
        try {
        	//send propietario
        	driver.findElement(By.cssSelector("button[name=sendPropietario]")).click();
        	//WebDriverWait wait = new WebDriverWait(driver, 20);
            //wait.until(ExpectedConditions.alertIsPresent());
        	Thread.sleep(5000);
            //check alert
        	Alert a = driver.switchTo().alert();
            String actualMessage = a.getText();
            String expectedMessage = "Propietario agregado con exito";
            a.accept();
            if (actualMessage.contentEquals(expectedMessage)){
                System.out.println("Test Passed!");
            } 
            else {
                System.out.println("Test Failed");
            }
            //close Chrome
            driver.close();
		} 
        catch (NoAlertPresentException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
        catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
       
    }
}

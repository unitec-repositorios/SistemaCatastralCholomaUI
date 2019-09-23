package newpackage;

import static org.junit.jupiter.api.Assertions.*;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

@TestMethodOrder(OrderAnnotation.class)
class SistemaCatastroTest {
	
	WebDriver driver = new ChromeDriver();
	String baseUrl = "https://sistemacatastralcholoma-12e5c.firebaseapp.com";
	
	@Test
	@Order(1)
	void testLoginSuccessfull() {
		//expected results
		String expectedTitle = "Para gestiones y/o tramites con las fichas catastrales, dirigete al menu que se encuentra arriba";
        String actualTitle;

        // launch Chrome and direct it to the Base URL
        driver.get(baseUrl);
        
        //log in 
        driver.findElement(By.name("username")).sendKeys("adminTest"); //write username
        driver.findElement(By.name("password")).sendKeys("1234"); //write password
        driver.findElement(By.tagName("button")).click(); //click log in button
        
        try {
        	//wait for main menu to appear
			Thread.sleep(5000);
			// get the actual value of the title
			actualTitle = driver.findElement(By.tagName("p")).getText();
	        driver.close();
	        assertEquals(expectedTitle, actualTitle);
		} catch (InterruptedException e) {
			fail(e.getMessage());
		} catch(Exception e) {
			fail(e.getMessage());
		}
	}
	
	@Test
	@Order(2)
	void testAddPropietario() {
		driver.get(baseUrl+"/modules"); //go directly to main page
		//click ficha urbana option
		driver.findElement(By.cssSelector("button[routerLink=\'/propietario\'")).click();
		
		//open add propietario dialog
		driver.findElement(By.cssSelector("button[name=addPropietario]")).click();
		try {
			Thread.sleep(1000); //wait until dialog is opened
        	//fill form
	        driver.findElement(By.cssSelector("input[name=nombres]")).sendKeys("Chupetin");
	        driver.findElement(By.cssSelector("input[name=apellidos]")).sendKeys("Trujillo");
	        driver.findElement(By.cssSelector("input[name=identidad]")).sendKeys("1234");
	        driver.findElement(By.cssSelector("input[name=telefono]")).sendKeys("5678");
	        driver.findElement(By.cssSelector("input[name=rtn]")).sendKeys("345");
	        driver.findElement(By.cssSelector("mat-select[name=sexo]")).click();
	        driver.findElement(By.xpath("//mat-option/span[contains(.,'masculino')]")).click();
	        driver.findElement(By.cssSelector("mat-select[name=nacionalidad]")).click();
	        driver.findElement(By.xpath("//mat-option/span[contains(.,'PER')]")).click();
	        //send data
	        driver.findElement(By.cssSelector("button[name=sendPropietario]")).click();
	    	//WebDriverWait wait = new WebDriverWait(driver, 20);
	        //wait.until(ExpectedConditions.alertIsPresent());
			Thread.sleep(5000);
			//check alert
	    	Alert a = driver.switchTo().alert();
	        String actualMessage = a.getText(); //get message from alert
	        String expectedMessage = "Propietario agregado con exito"; //expected message from alert
	        a.accept();
	        driver.close();
	        assertEquals(expectedMessage, actualMessage);
		} catch (InterruptedException e) {
			fail(e.getMessage());
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
	
	/*
	@Test
	@Order(3)
	void testUpdatePropietario() {
		driver.get(baseUrl+"/propietario"); //go directly to propietario component
		try {
			//Search for a name in the table
			driver.findElement(By.name("searchPropietario")).sendKeys("Chupetin");
			Thread.sleep(5000); //wait until name is found
			driver.findElement(By.name("editPropietario")).click(); //click the edit button 
			Thread.sleep(1000); //wait until the dialog is opened
			//fill form
	        driver.findElement(By.cssSelector("input[name=nombres]")).sendKeys("Edgar");
	        driver.findElement(By.cssSelector("input[name=apellidos]")).sendKeys("Mendoza");
	        //send data
	        driver.findElement(By.cssSelector("button[name=sendPropietario]")).click();
			Thread.sleep(5000);
			//check alert
	    	Alert a = driver.switchTo().alert();
	        String actualMessage = a.getText(); //get message from alert
	        String expectedMessage = "Propietario editado con exito"; //expected message from alert
	        a.accept();
	        driver.close();
	        assertEquals(expectedMessage, actualMessage);
		} catch (InterruptedException e) {
			fail(e.getMessage());
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
	*/
	
	@Test
	@Order(3)
	void deletePropietario() {
		driver.get(baseUrl+"/propietario"); //go directly to propietario component
		try {
			Thread.sleep(5000); //wait until all data is received in the table
			//Search for a name in the table
			driver.findElement(By.name("searchPropietario")).sendKeys("Chupetin");
			Thread.sleep(1000); //wait until name is found
			driver.findElement(By.name("deletePropietario")).click(); //click the delete button 
			Thread.sleep(1000); //wait for alert to appear
			//check alert
	    	Alert confirmAlert = driver.switchTo().alert();
	    	confirmAlert.accept();
	    	Thread.sleep(5000); //wait for alert to appear
	    	Alert a = driver.switchTo().alert();
	        String actualMessage = a.getText(); //get message from alert
	        String expectedMessage = "Propietario eliminado con exito"; //expected message from alert
	        a.accept();
	        driver.close();
	        assertEquals(expectedMessage, actualMessage);
		} catch (InterruptedException e) {
			fail(e.getMessage());
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}

}

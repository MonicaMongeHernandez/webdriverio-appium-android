//🦁 Created by Mónica Monge May 2024

const dataTestJson = require('../data/DataForTesting.json');
import DemoAppScreen from '../screenObjects/DemoApp.screen';
import AllureReporter from '@wdio/allure-reporter';
import Wrapper from '../utils/Wrapper';

describe('Android Native Feature - Dialog Boxes - Tests', () => {

  beforeEach(async () => {
    
    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');
    
    AllureReporter.addStep('Move to Alert Dialog section');
    await Wrapper.moveWithPackageToActivity('io.appium.android.apis', '.app.AlertDialogSamples'); 
    
    AllureReporter.addStep('Validate if App/Alert Dialogs title is displayed');
    expect(DemoAppScreen.alertDialogTitle).toBeDisabled;

    AllureReporter.addStep('Click on "Ok Cancel dialog with a message"');
    DemoAppScreen.okCancelOption.click();    
  });


  it('Accept Alert', async () => {
    
    AllureReporter.addStep('Validate acceptAlert() function');
    await driver.acceptAlert();
  })


  it('Dismiss Alert', async () => {
    
    AllureReporter.addStep('Validate dismissAlert() function');
    await driver.dismissAlert();
  }) 


  it('OK Button', async () => {
    
    AllureReporter.addStep('Click on "Ok" modal');
    DemoAppScreen.okModalBtn.click();
  })  


  it('Cancel Button', async () => {

    AllureReporter.addStep('Click on "Cancel" modal');
    DemoAppScreen.cancelModalBtn.click();
  })    


  it('Get the text within Alert Dialog', async () => {
    
    const textAlert = await driver.getAlertText();
    
    AllureReporter.addStep(`Validate if the modal text is ${dataTestJson.demo.alertText}`);
    await expect(textAlert).toContain(`${dataTestJson.demo.alertText}`);
    
    await driver.dismissAlert();
  })  


  afterEach(async () => {
    
    AllureReporter.addStep('Validate the alert is not displayed');
    await expect(DemoAppScreen.dialogBox).not.toBeDisplayed(); 
  });  

})
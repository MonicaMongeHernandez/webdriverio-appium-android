//🦁 Created by Mónica Monge May 2024

const dataTestJson = require('../data/DataForTesting.json');
import DemoAppScreen from '../screenObjects/DemoApp.screen';
import AllureReporter from '@wdio/allure-reporter';
import Wrapper from '../utils/Wrapper';

describe('Android Elements - Test', () => {

  beforeEach(async () => {
    
    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');
  });
  

  it('Find Elements by Accessibility id', async () => {
    
    AllureReporter.addStep('Click on App option');
    await DemoAppScreen.appOption.click();
   
    AllureReporter.addStep('Validate if Action Bar is displayed');
    await expect(DemoAppScreen.actionBarOption).toBeDisplayed();
  })


  it('Find Elements by Class name', async () => {

    AllureReporter.addStep(`Validate the first element of the collection has the class`);
    await expect(DemoAppScreen.classTextView).toHaveText(dataTestJson.demo.titleDemo);
  })
  

  it('Find Elements by XPath - E2E', async () => {
    
    AllureReporter.addStep(`Click on Alert Dialog option. Find element by xpath`);             
    await DemoAppScreen.alertDialogOption.click();

    AllureReporter.addStep(`Click on List Dialog option. Find element by resource-id`);             
    await DemoAppScreen.listDialogOption.click();    
  
    AllureReporter.addStep(`Click on List Dialog option. Find element by text`);             
    await DemoAppScreen.commandTwoOption.click();

    AllureReporter.addStep(`Find element by class`);  
    AllureReporter.addStep(`Validate if the option text is ${dataTestJson.demo.oneOptionText}`);             
    await expect(DemoAppScreen.selectedOneOption).toHaveText(dataTestJson.demo.oneOptionText);
  })


  it('Find Elements by UiAutomator', async () => {
   
    AllureReporter.addStep(`Find element by UiAutomator`);
    DemoAppScreen.alertDialogByUiAutomator.click();
  })
  
  
  it('Find Multiple Elements - Collection $$', async () => {

    AllureReporter.addStep('Move to Api Demo screen');
    await Wrapper.moveWithPackageToActivity('io.appium.android.apis', '.ApiDemos');     

    const actualList = await DemoAppScreen.getElementsFromMenu();
    
    AllureReporter.addStep('Validate if the menu elements are the correct');
    await expect(actualList).toEqual(DemoAppScreen.expectedMenuElemets);
  })


  it('Write on the text Field', async () => {
    
    AllureReporter.addStep('Move to Api Demo screen');
    await Wrapper.moveWithPackageToActivity('io.appium.android.apis', '.ApiDemos'); 
    
    AllureReporter.addStep('Click on View option');
    await DemoAppScreen.viewOption.click();  
    
    AllureReporter.addStep('Click on Auto Complete option');
    await DemoAppScreen.autoCompleteOption.click();        
        
    AllureReporter.addStep('Click on Screen Top option');
    await DemoAppScreen.screenTopOption.click();   
  
    AllureReporter.addStep('Fill down the country');
    await DemoAppScreen.editContryTextFild.setValue(dataTestJson.demo.country);
        
    await expect(DemoAppScreen.editContryTextFild).toHaveText(dataTestJson.demo.country);
  })    

})


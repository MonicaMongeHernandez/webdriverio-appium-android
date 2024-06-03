//🦁 Created by Mónica Monge May 2024

const dataTestJson = require('../data/DataForTesting.json');
import DemoAppScreen from '../screenObjects/DemoApp.screen';
import AllureReporter from '@wdio/allure-reporter';
import Wrapper from '../utils/Wrapper';

describe('Android Native Scrolling - Tests', () => {

  beforeEach(async () => {
    
    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');
  });  


  it('Vertical scrolling', async () => {
    
    AllureReporter.addStep('Click on App option');
    await DemoAppScreen.appOption.click();

    AllureReporter.addStep('Click on Activity option');
    await DemoAppScreen.activityOption.click();    

    AllureReporter.addStep('Performe Vertical Scroll using "UiScrollable" and scrollIntoView()');
    await Wrapper.scrollByTextTo(`"${dataTestJson.demo.securitySurfaceOption}"`);    

    AllureReporter.addStep('Validate the Secure Dialog is displayed');
    await expect(DemoAppScreen.secureDialog).toBeDisplayed();      
  })


  it('Horizontal scrolling', async () => {

    AllureReporter.addStep('Move to Gallery section');
    await Wrapper.moveWithPackageToActivity('io.appium.android.apis', '.view.Gallery1'); 

    AllureReporter.addStep('Performe horizontal forward scroll');
    Wrapper.doHorizontalScrollForward();

    AllureReporter.addStep('Performe horizontal backward scroll');
    Wrapper.doHorizontalScrollBackward();  

    Wrapper.addPause(2000); 
  })  


  it('Date Calendar Widget scrolling into next Month', async () => {

    AllureReporter.addStep('Move to Date Widget section');
    await Wrapper.moveWithPackageToActivity('io.appium.android.apis', '.view.DateWidgets1'); 

    AllureReporter.addStep('Validate the title of Date Widget exist');
    expect(DemoAppScreen.dateWidgetDialogTitle).toBeExisting;

    AllureReporter.addStep('Get the current date');
    const originalDate = await Wrapper.getTextSelector(DemoAppScreen.currentDate);

    AllureReporter.addStep('Click on change date button');
    await DemoAppScreen.changeDateBtn.click();
    
    AllureReporter.addStep('Performe horizontal forward scroll to the next month');
    Wrapper.doHorizontalScrollForward();
    
    AllureReporter.addStep('Click on a new day from next month');
    await DemoAppScreen.tenDate.click();

    AllureReporter.addStep('Click on Ok button');
    await DemoAppScreen.okDateBtn.click();  

    AllureReporter.addStep('Get the new date');
    const newDate = await Wrapper.getTextSelector(DemoAppScreen.currentDate);

    AllureReporter.addStep(`Validate if original date: ${originalDate} is different the new date ${newDate}`);    
    await expect(newDate).not.toEqual(originalDate);    
  })    
  
})  
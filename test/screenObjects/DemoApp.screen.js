
class DemoAppScreen {

  /**
   * Selectors using getter methods
  */
  
  //--androidFindElements.spec
  get appOption() {
    return $('~App');    
  }

  get actionBarOption() {
    return $('~Action Bar');    
  }

  get viewOption() {
    return $('~Views');    
  } 

  get autoCompleteOption() {
    return $('~Auto Complete');    
  }  

  get screenTopOption() {
    return $('//android.widget.TextView[@content-desc="1. Screen Top"]');    
  }  
  
  get editContryTextFild() {
    return $('android=new UiSelector().resourceId("io.appium.android.apis:id/edit")');    
  }   

  get classTextView() {
    return $('android.widget.TextView');    
  }  

  get alertDialogOption() {
    return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');    
  } 

  get listDialogOption() {
    return $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');    
  }   

  get commandTwoOption() {
    return $('//android.widget.TextView[@text="Command two"]');    
  }  

  get selectedOneOption() {
    return $('android.widget.TextView');    
  }   

  get alertDialogByUiAutomator() {
    return $('android=new UiSelector().textContains("Alert")');    
  }   

  get getElementsMenu() {
    return $$('android.widget.TextView');    
  }     

  get alertDialogTitle() {
    return $('//*[@text="App/Alert Dialogs"]');    
  }     

  get okCancelOption() {
    return $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]');    
  }     

  //---androidNativeDialogAlerts.spec
  get okModalBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');    
  }   
  
  get cancelModalBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button2"]');    
  }   

  get dialogBox() {
    return $('//*[@resource-id="android:id/alertTitle"]');    
  }

  //--androidNativeScrolling.spec
  get activityOption() {
    return $('~Activity');    
  }
  
  get secureSurfacesOption() {
    return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Secure Surfaces"))');    
  }  

  get secureDialog() {
      return $('~Secure Dialog');    
  }    

  get dateWidgetDialogTitle() {
    return $('//android.widget.TextView[@text="Views/Date Widgets/1. Dialog"]');    
  }    

  get currentDate() {
    return $('id=io.appium.android.apis:id/dateDisplay');    
  } 

  get changeDateBtn() {
    return $('~change the date');    
  }   

  get tenDate() {
    return $('~10 July 2024');    
  }    

  get okDateBtn() {
    return $('id=android:id/button1');    
  }

  get expectedMenuElemets() {

    return [
      'API Demos',
      "Access'ibility",
      'Accessibility',
      'Animation',
      'App',
      'Content',
      'Graphics',
      'Media',
      'NFC',
      'OS',
      'Preference',
      'Text',
      'Views'
    ];  
  }
  

  async getElementsFromMenu() {

    const actualList = [];
    
    const elementList = await this.getElementsMenu;
    for (const element of elementList) { 
      actualList.push(await element.getText());
  }
    
    return actualList;
  }
}
export default new DemoAppScreen();
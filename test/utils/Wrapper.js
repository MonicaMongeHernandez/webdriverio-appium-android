

class Wrapper {

  async goBack(numberTimes) {
      
    for (let index = 0; index < numberTimes; index++) 
        await driver.back();
  }  

  async addPause(miliseconds) {
      
    await driver.pause(miliseconds);
  }    

  async doHorizontalScrollForward() {
      
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    }    

  async doHorizontalScrollBackward() {
      
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()'); 
  }
  

  async getTextSelector(selector) {
    const textViewElement = await selector;
    const textValue = await textViewElement.getText();
    return textValue; 
    }

  async moveWithPackageToActivity(currentPackage, currentActivity) {
      await driver.startActivity(currentPackage, currentActivity); //PackageName + AppActivity   
  } 
  
   async scrollByTextTo(textDescription) {    
    return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView(${textDescription})`).click();
  }  

}
export default new Wrapper();
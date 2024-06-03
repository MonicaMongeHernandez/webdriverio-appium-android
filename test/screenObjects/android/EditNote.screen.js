import AddNoteScreen from './AddNote.screen';

class EditNote {
  /**
   * Selectors using getter methods
  */
  get dashNotes() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/title');    
  } 

  get verticalDotsMenu() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/menu_btn');    
  }   

  get deleteOption() {
    return $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]');    
  }

  get hamburguerMenu() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/icon_nav');    
  }  
  
  get trashOption() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]');    
  }    
  /**
   * Methods section
   */  
  async skipTutorial() {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteBtn).toBeDisplayed();
  }

  async addNote(titleNote, bodyNote) {
    
    await AddNoteScreen.addNoteBtn.click();
    await AddNoteScreen.textModalOpcion.click();     
    await expect(AddNoteScreen.editText).toBeDisplayed();

    await AddNoteScreen.titleNote.addValue(titleNote);
    await AddNoteScreen.editBodyNote.addValue(bodyNote);

    AddNoteScreen.saveNote();    

    await expect(AddNoteScreen.editPenIcon).toBeDisplayed();
    await expect(AddNoteScreen.bodyNote).toHaveText(bodyNote);   
  }  

  async goBack(numberTimes) {
     
    for (let index = 0; index < numberTimes; index++) 
          await driver.back();
  }  
}
export default new EditNote();
import Wrapper from '../../utils/Wrapper';

class AddNoteScreen {

  /**
   * Selectors using getter methods
  */
  get skipBtn() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip');    
  }

  get addNoteBtn() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/empty_text');    
  }   

  get textModalOpcion() {
    return $('//*[@text="Text"]');    
  }  

  get editText() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative');    
  }    
  
  get editPenIcon() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');    
  }  

  get titleNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');    
  }  
  
  get editBodyNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');    
  }  

  get bodyNote() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/view_note');    
  }    

  /**
   * Methods section
   */
   async saveNote() {
     await Wrapper.goBack(2); //it needs to go back twice to save the note
  }
}
export default new AddNoteScreen();
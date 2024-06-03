const dataTestJson = require('../../data/DataForTesting.json');

import EditNoteScreen from '../../screenObjects/android/EditNote.screen';
import Wrapper from '../../utils/Wrapper';
import AllureReporter from '@wdio/allure-reporter';

describe('Delete Note', () => {
  
  beforeEach(async () => {
    
    await EditNoteScreen.skipTutorial();
    await EditNoteScreen.addNote(dataTestJson.notes.titleTVNote, dataTestJson.notes.noteShows);
    await Wrapper.goBack(1);
  });
  
  it('Delete Note ', async () => {  
    
    AllureReporter.addFeature('======= Validate Delete Note ======');
    AllureReporter.addStep('Click on the note');
    const originalNote = (await EditNoteScreen.dashNotes).getText();
    await EditNoteScreen.dashNotes.click();
   
    AllureReporter.addStep('Click on dots menu');
    await EditNoteScreen.verticalDotsMenu.click();
    
    AllureReporter.addStep('Click on Delete option');
    await EditNoteScreen.deleteOption.click();
  
    AllureReporter.addStep('Click on Ok modal button');
    await driver.acceptAlert();

    AllureReporter.addStep('Validate the note is not displayed in the dashboard notes');
    await expect(EditNoteScreen.dashNotes).not.toBeDisplayed();   
    
    AllureReporter.addStep('Click on hamburguer menu');
    await EditNoteScreen.hamburguerMenu.click();    

    AllureReporter.addStep('Click on Trash Can option');
    await EditNoteScreen.trashOption.click();
    
    const trashNote = (await EditNoteScreen.dashNotes).getText();

    AllureReporter.addStep('Validate if the original note is the same in the Trash can and it is displayed');
    await expect(trashNote).toEqual(originalNote);
  
  });    

})


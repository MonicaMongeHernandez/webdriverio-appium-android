const dataTestJson = require('../../data/DataForTesting.json');

import AddNoteScreen from '../../screenObjects/android/AddNote.screen';
import AllureReporter from '@wdio/allure-reporter';

describe('Add Notes Tests', () => {

  it('Skip the tutorial', async () => {
    
    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');

    AllureReporter.addFeature('======= Skip tutorial ======');
    AllureReporter.addStep('Click on skip button');
    await AddNoteScreen.skipBtn.click();
    
    AllureReporter.addStep('Add note button should be displayed');
    await expect(AddNoteScreen.addNoteBtn).toBeDisplayed();
  });

  it('Add Note', async () => {
    
    AllureReporter.addFeature('======= Add Notes ======');
    AllureReporter.addStep('Click on Add note button');
    await AddNoteScreen.addNoteBtn.click();

    AllureReporter.addStep('Click on text option in the modal');
    await AddNoteScreen.textModalOpcion.click();     
    await expect(AddNoteScreen.editText).toBeDisplayed();

    AllureReporter.addStep('Enter title');
    await AddNoteScreen.titleNote.addValue(dataTestJson.notes.titleAddNote);

    AllureReporter.addStep('Enter note');
    await AddNoteScreen.editBodyNote.addValue(dataTestJson.notes.noteAddText);

    AllureReporter.addStep('Save the note perform 2 clicks back');
    AddNoteScreen.saveNote();    

    AllureReporter.addStep('Edit pen icon should be displayed');
    await expect(AddNoteScreen.editPenIcon).toBeDisplayed();

    AllureReporter.addStep('The entered text shoud be the same at the text in note area.');
    await expect(AddNoteScreen.bodyNote).toHaveText(dataTestJson.notes.noteAddText);       
  });
  

})


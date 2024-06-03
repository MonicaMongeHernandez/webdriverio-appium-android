<a href="https://webdriver.io/" target="_blank">
<img src="https://media.licdn.com/dms/image/C4D12AQHX3S8MZ_avJQ/article-cover_image-shrink_600_2000/0/1642934034625?e=2147483647&v=beta&t=NThRwy5h89B6Oshq3-GL4_NnvecvYgm5W2OxOD-KMQU" alt="webdriver.io">
</a>

# WebdriverIO Appium Android automation Mobile project

## Project created from scratch

- By: Mónica Monge Hernández (May 2024)
- [Linkedin profile](https://www.linkedin.com/in/mónica-monge-hernández)
- [GitHub profile](https://monicamongehernandez.github.io/profile/)
- [GitHub documentation](https://monicamongehernandez.github.io/webdriverio-appium-android)
- [GitHub code](https://github.com/MonicaMongeHernandez/webdriverio-appium-android)

## Description

This testing suite was implemented for the automation of Mobile Android applications, using WebdriverIO, Appium, Android Studio, Android Inspector, GitHub Actions with page object model (POM) design pattern and mocha as a test framework using javascript.

### Videos

In the following links, you can find the video related to the execution and results of each mobile application (apk):

- [ApiDemos application](https://drive.google.com/file/d/1B5ZltcbEJc9--poy_yfFlwk2me6rzFq5/view?usp=sharing)
- [Color Note application](https://drive.google.com/file/d/14_9ZHHPHHKoQhCA-9lVCxlz-gmsVRxe-/view?usp=sharing)

## Goal

Validate native mobile applications with UI validations like scrolling, finding elements using different ways to access the selectors, navigating in the menu, alert dialog modals, validating texts, type, and environment variables to run specific apps, using packages and activities to move between screens, JSON to get apk, use hooks and specs paths according to console parameters, and demonstrate a good understanding of the framework and technologies.

## Technologies Versions

- WebdriverIO 8
- Appium v2.5.4
- Appium Inspector: 2024.3.4
- Android Studio Jellyfish 2023.3.1
- JavaScript
- Node.js
- Mocha Framework
- Babel/core": "^7.24.6",
- eslint
- Page Object Model (POM)
- Allure report 8.36.1
- GitHub
- Git Actions

## Scenarios

To perform the testing, 2 applications were selected. Happy paths were implemented, and CI/CD with GitHub actions. If the test case fails Allure takes a screenshot.

All the test cases are automated by the scripts.

Note: The following test cases are as an overview. Consider that in a formal scenario a document is presented with all conditions, inputs, and outputs provided using a tool.

### 1) ApiDemos application (apk):

- <strong>General objective:</strong> Perform actions with selectors/locators in the DOM, type data, click buttons, display elements, scroll, validate texts, and dialog alerts.

- <strong>Dynamic parameters used</strong><br>
  In the file "wdio.config":<br>
  `apk: 'app/android/ApiDemos-debug.apk'`,<br>
  `specs: ./test/specs/*.spec.js`,<br>

- <strong>Test Cases</strong>

1. Find Elements by Accessibility id.
2. Find Elements by Class name.
3. Find Elements by XPath.
4. Find Elements by UiAutomator.
5. Find Multiple Elements - Collection $$.
6. Write on the text Field.
7. Accept Alert.
8. Dismiss Alert.
9. Clicks on modal buttons.
10. Get the text within Alert Dialog.
11. Vertical scrolling.
12. Horizontal scrolling.
13. Date Calendar Widget scrolling and getting specific data.

### 2) Color Note application

- <strong>General objective:</strong> use packages and activities to move between screens, skip screens, accept permission of the application to continue with the validations, perform actions with selectors/locators in the DOM, fill out data, like the title of notes, and the text notes, click buttons, do scroll, perform save action, validate if the note was created and deleted, display elements, scroll, validate texts, using POM.

- <strong>Dynamic parameters used</strong><br>
  In the file "wdio.config":<br>
  `apk: app/android/ColorNote+Notepad.apk`,<br>
  `specs: ./test/specs/android/*.spec.js`,<br>

- <strong>Test Cases</strong>

1. Skip the tutorial.
2. Add note(type title, notes, save note, edit ).
3. Delete Note (Skip tutorial, Add notes, navigate screens and menus).

## Installation

1. GitHub repository: [here](https://github.com/MonicaMongeHernandez/webdriverio-appium-android)
2. Clone the repository in the local machine.
3. Download Node use version 16.
4. Install Java JDK & JAVA_HOME variable.
5. Install Android Studio & ANDROID_HOME setup for Windows.
6. Download Appium Inspector.
7. Install Apium.
8. Appium Doctor.
9. Appium drivers.
10. Setup WebDriverIO 8.
11. Install the dependencies execution `npm install`.
12. Configure the files of WebdriverIO `wdio.conf.js` according to the executions.
13. Execute the following steps to give Allure access local files as a URL (based on [access](https://webmo.net/link/help/AccessingLocalFiles.html)):
    Chrome & Windows:
    - Run cmd to get a command window
    - Move to the Chrome directory, e.g.,
      cd C:\Users\your-user-name\AppData\Local\Google\Chrome\Application
    - Type:
      chrome.exe --allow-file-access-from-files

## Execution Testing

- Execute the command lines according to the page tested. It uses environment variables from CLI:<br>
  _For ApiDemos app_<br>
  `App=demo npm run wdio`<br>

  _For Color Note app_<br>
  `App=notes npm run wdio`<br>

  Results will be in `...\reports\allure`

# Magento 2 Boilerplate by Epartment
Magento 2 Boilerplate Theme with focus on ease-of-use and quick results

### Compatibility
* Magento 2.2
* Magento 2.1
* Magento 2.0

### Bug reports and contribution rules
- Before reporting an issue, check if you can reproduce it on the clean Magento instance without our boilerplate. If that's true, submit issue to the Magento 2 repository, not here
- Al other issues can be reported here

### Questions
If you want to know more about this project, join our slack channel and ask questions.

### Requirements
- Node.js (https://nodejs.org/)
- npm (https://npmjs.org)
- yarn (https://yarnpkg.com/)

### Installation
> <strong>Disclaimer</strong>:
> This installation guide expects you to have a Magento 2 instance running. If you need help to get Magento 2 up and running, we'd like to refer you to the install guide: https://devdocs.magento.com/guides/v2.2/install-gde/prereq/zip_install.html

##### Creating the right folder structure
1. Open the Magento 2 project where you want to install the boilerplate in your IDE/Code editor of choice.
2. Navigate to the `app/design/frontend` folder.
3. Create a new directory named `Epartment`.
4. Open your terminal/commandline.
5. `cd` into `app/design/frontend/Epartment`.
6. Clone the git repository in a new directory called `bootstrap` note the lowercase.<br/> 
`git clone https://github.com/epartment/magento2-theme-epartment-boilerplate.git bootstrap`.

##### Installing the required dependencies using npm and yarn
1. In your terminal/commandline: `cd` into the newly created `app/design/frontend/Epartment/bootstrap` folder.
2. Run the following command: `yarn install`. Alternatively it's also possible to do `npm install`. 

##### Setting the boilerplate as the active theme in the Magento 2 backend
1. Login to your Magento 2 backend.
2. Go to `Content > Design > Configuration`.
3. Select the `Website`, `Store` or `Storeview` where you want to have the boilerplate theme activated and click `edit`.
4. Now in the `Applied Theme` dropdown, please select `Epartment Bootstrap` option and click `Save Configuration`.
5. Go back to the Frontend en reload the page.
6. You have succesfully installed the Epartment Magento 2 Boilerplate.

### Extending and editing the boilerplate styling
> <strong>Note</strong>: The Epartment Magento 2 Boilerplate uses SASS for styling.

##### Editing existing variables
1. In your project navigate to the `app/design/frontend/Epartment/bootstrap/src/scss/boilerplate` folder.
2. You can take a look into `_variables.scss` to see what default variables you can overwrite.
3. Overwriting the default variables is done by creating a new `.scss` file e.g. `_websitename.scss` and redeclare the variables you want to overwrite.
4. Note: Don't forget to include the new `.scss` created in the previous step into the `_boilerplate.scss` .
5. Run a `gulp` command to compile the styling changes. More info about the `gulp` commands can be found in the next chapter. 

##### Extending with custom styling
> <strong>Note</strong>: The boilerplate variables cover a great range of elements. Try to modify the variables first before adding any custom `.scss` files!

1. In your project navigate to the `app/design/frontend/Epartment/bootstrap/src/scss` folder.
2. Create a new `.scss` file e.g. `_custom_hero_homepage.scss`.
3. Write some awesome `SASS`.
4. Note: Don't forget to include the new `.scss` created before as a `@import` in the `style.scss`.
5. Run a `gulp` command to compile the styling changes. More info about the `gulp` commands can be found in the next chapter. 

### Gulp
##### Available Gulp commands
- `gulp watch` : Watches all `.scss` files and compiles them when `gulp` detects a change. It also starts a browsersync session this way you can see your changes on the fly.
- `gulp scripts` : Compiles all `.js` files.
- `gulp script-depts` : Copies the script dependencies from the `node_modules` to a local folder for `production`
- `gulp build` : Builds all `.scss` and `.js` files for `production`
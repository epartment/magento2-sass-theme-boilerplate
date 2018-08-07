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

> <strong>Note</strong>: You only need one package manager, so either yarn or npm.

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

##### Variables
These are the default variables that can be overwritten by creating a custom `SASS` file. You can simply target the variable again and overrule the default value.
For example: `$font-default-font-size: 18px;`


###### Colors
| Variable                                   | Description 
|--------------------------------------------|------------------------
| `$color-boilerplate-primary`               | Primary theme color, accepted formats: HEX, RGB, RGBA. 
| `$color-boilerplate-secondary`             | Secondary theme color
| `$color-primary-gradient-color`            | Primary gradient
| `$color-secondary-gradient-color`          | Secondary gradient

###### Headings
| Variable                                   | Description
|--------------------------------------------|-------------------------
| `$font-family-heading`                     | Default heading font-family, eg. 'Open Sans'.                                    
| `$font-family-heading-color`               | Default heading color, accepted formats: Variable, HEX, RGB en RGBA.
| `$font-family-heading-font-weight`         | Default heading font-weight, accepted formats: Variable, PX, rem.
| `$font-family-heading-line-height`         | Default heading line-height.
| `$font-family-heading-h1-font-size`        | H1 font-size.
| `$font-family-heading-h1-font-weight`      | H1 font-weight.
| `$font-family-heading-h1-line-height`      | H1 line-height.
| `$font-family-heading-h1-margin`           | H1 margin.
| `$font-family-heading-h1-color`            | H1 color.
| `$font-family-heading-h2-font-size`        | H2 font-size.
| `$font-family-heading-h2-font-weight`      | H2 font-weight.
| `$font-family-heading-h2-line-height`      | H2 line-height.
| `$font-family-heading-h2-margin`           | H2 margin.
| `$font-family-heading-h2-color`            | H2 color.
| `$font-family-heading-h3-font-size`        | H3 font-size.
| `$font-family-heading-h3-font-weight`      | H3 font-weight.
| `$font-family-heading-h3-margin`           | H3 margin.
| `$font-family-heading-h3-color`            | H3 color.
| `$font-family-heading-h4-font-size`        | H4 font-size.
| `$font-family-heading-h4-font-weight`      | H4 font-weight.
| `$font-family-heading-h4-margin`           | H4 margin.
| `$font-family-heading-h4-color`            | H4 color.
| `$font-family-heading-h5-font-size`        | H5 font-size.
| `$font-family-heading-h5-font-weight`      | H5 font-weight.
| `$font-family-heading-h5-margin`           | H5 margin.
| `$font-family-heading-h5-color`            | H5 color.
| `$font-family-heading-h6-font-size`        | H6 font-size.

###### Links
| Variable                                   | Description
|--------------------------------------------|-------------------------
| `$font-default-link-color`                 | Default link color.
| `$font-default-link-text-decoration`       | Default link text-decoration.
| `$font-default-link-font-weight`           | Default link font-weight.
| `$font-default-link-hover-color`           | Default color in hover-state.
| `$font-default-link-hover-font-weight`     | Default font-weight in hover-state.
| `$font-default-link-hover-text-decoration` | Default text-decoration in hover-state.

###### Titles
| Variable                                   | Description
|--------------------------------------------|-------------------------
| `$font-filter-title-font-size`             | Filter title font-size.
| `$font-filter-title-font-weight`           | Filter title font-weight.
| `$font-filter-title-line-height`           | Filter title line-height.
| `$font-filter-title-margin`                | Filter title margin.
| `$font-filter-title-color`                 | Filter title color.
| `$font-filter-subtitle-font-size`          | Filter subtitle font-size.
| `$font-filter-subtitle-font-weight`        | Filter subtitle font-weight.
| `$font-filter-subtitle-line-height`        | Filter subtitle line-height.
| `$font-filter-subtitle-margin`             | Filter subtitle margin.
| `$font-filter-subtitle-color`              | Filter subtitle color.
| `$font-filter-options-title-font-size`     | Filter options title font-size.
| `$font-filter-options-title-font-weight`   | Filter options title font-weight.
| `$font-filter-options-title-line-height`   | Filter options title line-height.
| `$font-filter-options-title-margin`        | Filter options title margin.
| `$font-filter-options-title-color`         | Filter options title color.

###### Buttons
| Variable                                   | Description
|--------------------------------------------|-------------------------
| `$button-default-background-color`         | Default button background color.
| `$button-default-border`                   | Default button border.
| `$button-default-border-radius`            | Default button border-radius.
| `$button-default-color`                    | Default button text-color.
| `$button-default-font-size`                | Default button font-size.
| `$button-default-font-weight`              | Default button font-weight.
| `$button-default-transition`               | Default button transition effect (animation).
| `$button-default-padding`                  | Default button padding.
| `$button-default-text-transform`           | Default button text-transform.
| `$button-default-hover-background-color`   | Default button hover-state background color.
| `$button-default-hover-border`             | Default button hover-state border.
| `$button-default-hover-color`              | Default button hover-state text-color.
| `$button-primary-background-color`         | Primary button background color.
| `$button-primary-border`                   | Primary button border.
| `$button-primary-border-radius`            | Primary button border-radius.
| `$button-primary-color`                    | Primary button text-color.
| `$button-primary-font-size`                | Primary button font-size.
| `$button-primary-font-weight`              | Primary button font-weight.
| `$button-primary-transition`               | Primary button transition effect (animation).
| `$button-primary-padding`                  | Primary button padding.
| `$button-primary-text-transform`           | Primary button text-transform.
| `$button-primary-hover-background-color`   | Primary button hover-state background color.
| `$button-primary-hover-border`             | Primary button hover-state border.
| `$button-primary-hover-color`              | Primary button hover-state text-color.
| `$button-secondary-background-color`       | Secondary button background color.
| `$button-secondary-border`                 | Secondary button border.
| `$button-secondary-border-radius`          | Secondary button border-radius.
| `$button-secondary-color`                  | Secondary button text-color.
| `$button-secondary-font-size`              | Secondary button font-size.
| `$button-secondary-font-weight`            | Secondary button font-weight.
| `$button-secondary-transition`             | Secondary button transition effect (animation).
| `$button-secondary-padding`                | Secondary button padding.
| `$button-secondary-text-transform`         | Secondary button text-transform.
| `$button-secondary-hover-background-color` | Secondary button hover-state background color.
| `$button-secondary-hover-border`           | Secondary button hover-state border.
| `$button-secondary-hover-color`            | Secondary button hover-state text-color.

###### Inputs
| Variable                                   | Description
|--------------------------------------------|-------------------------
| `$input-default-background-color`          | Default input background color.
| `$input-default-border-color`              | Default input border-color.
| `$input-default-border`                    | Default input border.
| `$input-default-border-radius`             | Default input border-radius.
| `$input-default-height`                    | Default input height.
| `$input-default-width`                     | Default input width.
| `$input-default-margin`                    | Default input margin.
| `$input-default-padding`                   | Default input padding.
| `$input-default-vertical-align`            | Default input vertical-align.
| `$input-default-font-size`                 | Default input font-size.
| `$input-default-color`                     | Default input text-color.
| `$input-default-font-family`               | Default input font-family.
| `$input-default-font-weight`               | Default input font-weight.
| `$input-default-font-style`                | Default input font-style.
| `$input-default-line-height`               | Default input line-height.
| `$input-default-placeholder-color`         | Default input placeholder text-color.
| `$input-default-placeholder-font-style`    | Default input placeholder font-style.
| `$input-default-disabled-background-color` | Default input disabled-state background color.
| `$input-default-disabled-border`           | Default input disabled-state border.
| `$input-default-disabled-opactity`         | Default input disabled-state opacity.
| `$input-default-disabled-color`            | Default input disabled-state text-color.
| `$input-default-disabled-font-style`       | Default input disabled-state font-style.
| `$input-default-focus-background-color`    | Default input focus-state background-color.
| `$input-default-focus-border`              | Default input focus-state border.
| `$input-default-focus-color`               | Default input focus-state text-color.
| `$input-default-focus-font-style`          | Default input focus-state font-style.
| `$input-type-text-background-color`        | Text input background color.
| `$input-type-text-border-color`            | Text input border color.
| `$input-type-text-border`                  | Text input border.
| `$input-type-text-border-radius`           | Text input border radius.
| `$input-type-text-height`                  | Text input height.
| `$input-type-text-width`                   | Text input width.
| `$input-type-text-margin`                  | Text input margin.
| `$input-type-text-padding`                 | Text input padding.
| `$input-type-text-vertical-align`          | Text input vertical align.
| `$input-type-text-font-size`               | Text input font-size.
| `$input-type-text-color`                   | Text input text-color.
| `$input-type-text-font-family`             | Text input font-family.
| `$input-type-text-font-weight`             | Text input font-weight.

### Gulp
##### Available Gulp commands
- `gulp watch` : Watches all `.scss` files and compiles them when `gulp` detects a change. It also starts a browsersync session this way you can see your changes on the fly.
- `gulp scripts` : Compiles all `.js` files.
- `gulp script-depts` : Copies the script dependencies from the `node_modules` to a local folder for `production`
- `gulp build` : Builds all `.scss` and `.js` files for `production`
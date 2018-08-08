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
| Variable                                     | Description 
|----------------------------------------------|------------------------
| `$color-boilerplate-primary`                 | Primary theme color, accepted formats: HEX, RGB, RGBA. 
| `$color-boilerplate-secondary`               | Secondary theme color
| `$color-primary-gradient-color`              | Primary gradient
| `$color-secondary-gradient-color`            | Secondary gradient

###### Fonts
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$font-default-font-family-primary`          | Default primary font.
| `$font-default-font-family-secondary`        | Default secondary font.
| `$font-default-font-size`                    | Default font-size.
| `$font-default-font-weight`                  | Default font-weight.
| `$font-default-font-line-height`             | Default font line-height.
| `$font-default-color`                        | Default font color.
| `$font-default-heading-color`                | Default font-heading color.
| `$font-family`                               | Default font family.

###### Headings
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$font-family-heading`                       | Default heading font-family, eg. 'Open Sans'.                                    
| `$font-family-heading-color`                 | Default heading color, accepted formats: Variable, HEX, RGB en RGBA.
| `$font-family-heading-font-weight`           | Default heading font-weight, accepted formats: Variable, PX, rem.
| `$font-family-heading-line-height`           | Default heading line-height.
| `$font-family-heading-h1-font-size`          | H1 font-size.
| `$font-family-heading-h1-font-weight`        | H1 font-weight.
| `$font-family-heading-h1-line-height`        | H1 line-height.
| `$font-family-heading-h1-margin`             | H1 margin.
| `$font-family-heading-h1-color`              | H1 color.
| `$font-family-heading-h2-font-size`          | H2 font-size.
| `$font-family-heading-h2-font-weight`        | H2 font-weight.
| `$font-family-heading-h2-line-height`        | H2 line-height.
| `$font-family-heading-h2-margin`             | H2 margin.
| `$font-family-heading-h2-color`              | H2 color.
| `$font-family-heading-h3-font-size`          | H3 font-size.
| `$font-family-heading-h3-font-weight`        | H3 font-weight.
| `$font-family-heading-h3-margin`             | H3 margin.
| `$font-family-heading-h3-color`              | H3 color.
| `$font-family-heading-h4-font-size`          | H4 font-size.
| `$font-family-heading-h4-font-weight`        | H4 font-weight.
| `$font-family-heading-h4-margin`             | H4 margin.
| `$font-family-heading-h4-color`              | H4 color.
| `$font-family-heading-h5-font-size`          | H5 font-size.
| `$font-family-heading-h5-font-weight`        | H5 font-weight.
| `$font-family-heading-h5-margin`             | H5 margin.
| `$font-family-heading-h5-color`              | H5 color.
| `$font-family-heading-h6-font-size`          | H6 font-size.

###### Links
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$font-default-link-color`                   | Default link color.
| `$font-default-link-text-decoration`         | Default link text-decoration.
| `$font-default-link-font-weight`             | Default link font-weight.
| `$font-default-link-hover-color`             | Default color in hover-state.
| `$font-default-link-hover-text-decoration`   | Default text-decoration in hover-state.
| `$font-default-link-hover-font-weight`       | Default font-weight in hover-state.
| `$font-header-link-color`                    | Header link color.
| `$font-header-link-text-decoration`          | Header link text-decoration.
| `$font-header-link-font-weight`              | Header link font-weight.
| `$font-header-link-hover-color`              | Header link color in hover-state.
| `$font-header-link-hover-text-decoration`    | Header link text-decoration in hover-state.
| `$font-header-link-hover-font-weight`        | Header link font-weight in hover-state.
| `$font-footer-link-color`                    | Footer link color.
| `$font-footer-link-text-decoration`          | Footer link text-decoration.
| `$font-footer-link-font-weight`              | Footer link font-weight.
| `$font-footer-link-hover-color`              | Footer link color in hover-state.
| `$font-footer-link-hover-text-decoration`    | Footer link text-decoration in hover-state.
| `$font-footer-link-hover-font-weight`        | Footer link font-weight in hover-state.

###### Titles
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$font-filter-title-font-size`               | Filter title font-size.
| `$font-filter-title-font-weight`             | Filter title font-weight.
| `$font-filter-title-line-height`             | Filter title line-height.
| `$font-filter-title-margin`                  | Filter title margin.
| `$font-filter-title-color`                   | Filter title color.
| `$font-filter-subtitle-font-size`            | Filter subtitle font-size.
| `$font-filter-subtitle-font-weight`          | Filter subtitle font-weight.
| `$font-filter-subtitle-line-height`          | Filter subtitle line-height.
| `$font-filter-subtitle-margin`               | Filter subtitle margin.
| `$font-filter-subtitle-color`                | Filter subtitle color.
| `$font-filter-options-title-font-size`       | Filter options title font-size.
| `$font-filter-options-title-font-weight`     | Filter options title font-weight.
| `$font-filter-options-title-line-height`     | Filter options title line-height.
| `$font-filter-options-title-margin`          | Filter options title margin.
| `$font-filter-options-title-color`           | Filter options title color.
| `$font-product-item-name-font-size`          | Product item title (lister) font-size.
| `$font-product-item-name-font-weight`        | Product item title (lister) font-weight.
| `$font-product-item-name-line-height`        | Product item title (lister) line-height.
| `$font-product-item-name-margin`             | Product item title (lister) margin.
| `$font-product-item-name-color`              | Product item title (lister) color.

###### Buttons
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$button-default-background-color`           | Default button background color.
| `$button-default-border`                     | Default button border.
| `$button-default-border-radius`              | Default button border-radius.
| `$button-default-color`                      | Default button text-color.
| `$button-default-font-size`                  | Default button font-size.
| `$button-default-font-weight`                | Default button font-weight.
| `$button-default-transition`                 | Default button transition effect (animation).
| `$button-default-padding`                    | Default button padding.
| `$button-default-text-transform`             | Default button text-transform.
| `$button-default-hover-background-color`     | Default button hover-state background color.
| `$button-default-hover-border`               | Default button hover-state border.
| `$button-default-hover-color`                | Default button hover-state text-color.
| `$button-primary-background-color`           | Primary button background color.
| `$button-primary-border`                     | Primary button border.
| `$button-primary-border-radius`              | Primary button border-radius.
| `$button-primary-color`                      | Primary button text-color.
| `$button-primary-font-size`                  | Primary button font-size.
| `$button-primary-font-weight`                | Primary button font-weight.
| `$button-primary-transition`                 | Primary button transition effect (animation).
| `$button-primary-padding`                    | Primary button padding.
| `$button-primary-text-transform`             | Primary button text-transform.
| `$button-primary-hover-background-color`     | Primary button hover-state background color.
| `$button-primary-hover-border`               | Primary button hover-state border.
| `$button-primary-hover-color`                | Primary button hover-state text-color.
| `$button-secondary-background-color`         | Secondary button background color.
| `$button-secondary-border`                   | Secondary button border.
| `$button-secondary-border-radius`            | Secondary button border-radius.
| `$button-secondary-color`                    | Secondary button text-color.
| `$button-secondary-font-size`                | Secondary button font-size.
| `$button-secondary-font-weight`              | Secondary button font-weight.
| `$button-secondary-transition`               | Secondary button transition effect (animation).
| `$button-secondary-padding`                  | Secondary button padding.
| `$button-secondary-text-transform`           | Secondary button text-transform.
| `$button-secondary-hover-background-color`   | Secondary button hover-state background color.
| `$button-secondary-hover-border`             | Secondary button hover-state border.
| `$button-secondary-hover-color`              | Secondary button hover-state text-color.

###### Swatches 
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$swatch-default-background`                 | Swatch default background-color.
| `$swatch-default-border`                     | Swatch default border.
| `$swatch-default-border-radius`              | Swatch default border-radius.
| `$swatch-default-color`                      | Swatch default color.
| `$swatch-default-font-size`                  | Swatch default font-size.
| `$swatch-default-font-weight`                | Swatch default font-weight.
| `$swatch-default-line-height`                | Swatch default line-height.
| `$swatch-default-text-align`                 | Swatch default text-align.
| `$swatch-default-margin`                     | Swatch default margin.
| `$swatch-default-padding`                    | Swatch default padding.
| `$swatch-default-height`                     | Swatch default height.
| `$swatch-default-width`                      | Swatch default width.
| `$swatch-default-min-width`                  | Swatch default min-width.
| `$swatch-default-max-width`                  | Swatch default max-width.
| `$swatch-default-overflow`                   | Swatch default overflow.
| `$swatch-default-hover-border`               | Swatch default hover-state border.
| `$swatch-default-hover-outline`              | Swatch default hover-state outline.
| `$swatch-default-hover-color`                | Swatch default hover-state color.
| `$swatch-option-text-background`             | Swatch option text background-color.
| `$swatch-option-text-border`                 | Swatch option text border.
| `$swatch-option-text-color`                  | Swatch option text color.
| `$swatch-option-text-font-size`              | Swatch option text font-size.
| `$swatch-option-text-padding`                | Swatch option text padding.
| `$swatch-option-text-min-width`              | Swatch option text min-width.
| `$swatch-option-text-margin`                 | Swatch option text margin.
| `$swatch-option-text-outline`                | Swatch option text outline.
| `$swatch-option-text-hover-border`           | Swatch option text hover-state border.
| `$swatch-option-text-hover-outline`          | Swatch option text hover-state outline.
| `$swatch-option-text-hover-color`            | Swatch option text hover-state color.
| `$swatch-option-color-border`                | Swatch option color border.
| `$swatch-option-color-padding`               | Swatch option color padding.
| `$swatch-option-color-margin`                | Swatch option color margin.
| `$swatch-option-color-height`                | Swatch option color height.
| `$swatch-option-color-width`                 | Swatch option color width.
| `$swatch-option-color-min-width`             | Swatch option color min-width.
| `$swatch-option-color-hover-outline`         | Swatch option color hover-state outline.


###### Inputs
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$input-default-background-color`            | Default input background color.
| `$input-default-border-color`                | Default input border-color.
| `$input-default-border`                      | Default input border.
| `$input-default-border-radius`               | Default input border-radius.
| `$input-default-height`                      | Default input height.
| `$input-default-width`                       | Default input width.
| `$input-default-margin`                      | Default input margin.
| `$input-default-padding`                     | Default input padding.
| `$input-default-vertical-align`              | Default input vertical-align.
| `$input-default-font-size`                   | Default input font-size.
| `$input-default-color`                       | Default input text-color.
| `$input-default-font-family`                 | Default input font-family.
| `$input-default-font-weight`                 | Default input font-weight.
| `$input-default-font-style`                  | Default input font-style.
| `$input-default-line-height`                 | Default input line-height.
| `$input-default-placeholder-color`           | Default input placeholder text-color.
| `$input-default-placeholder-font-style`      | Default input placeholder font-style.
| `$input-default-disabled-background-color`   | Default input disabled-state background color.
| `$input-default-disabled-border`             | Default input disabled-state border.
| `$input-default-disabled-opacity`            | Default input disabled-state opacity.
| `$input-default-disabled-color`              | Default input disabled-state text-color.
| `$input-default-disabled-font-style`         | Default input disabled-state font-style.
| `$input-default-focus-background-color`      | Default input focus-state background-color.
| `$input-default-focus-border`                | Default input focus-state border.
| `$input-default-focus-color`                 | Default input focus-state text-color.
| `$input-default-focus-font-style`            | Default input focus-state font-style.
| `$input-type-text-background-color`          | Text input background color.
| `$input-type-text-border-color`              | Text input border color.
| `$input-type-text-border`                    | Text input border.
| `$input-type-text-border-radius`             | Text input border radius.
| `$input-type-text-height`                    | Text input height.
| `$input-type-text-width`                     | Text input width.
| `$input-type-text-margin`                    | Text input margin.
| `$input-type-text-padding`                   | Text input padding.
| `$input-type-text-vertical-align`            | Text input vertical align.
| `$input-type-text-font-size`                 | Text input font-size.
| `$input-type-text-color`                     | Text input text-color.
| `$input-type-text-font-family`               | Text input font-family.
| `$input-type-text-font-weight`               | Text input font-weight.
| `$input-type-text-font-style`                | Text input font-style.
| `$input-type-text-line-height`               | Text input line-height.
| `$input-type-text-placeholder-color`         | Text input placeholder text-color.
| `$input-type-text-placeholder-font-style`    | Text input placeholder font-style.
| `$input-type-text-disabled-background-color` | Text input disabled-state background-color.
| `$input-type-text-disabled-border`           | Text input disabled-state border.
| `$input-type-text-disabled-opacity`          | Text input disabled-state opacity.
| `$input-type-text-disabled-color`            | Text input disabled-state text-color.
| `$input-type-text-disabled-font-style`       | Text input disabled-state font-style.
| `$input-type-text-focus-background-color`    | Text input focus-state background-color.
| `$input-type-text-focus-border`              | Text input focus-state border.
| `$input-type-text-focus-color`               | Text input focus-state color.
| `$input-type-text-focus-font-style`          | Text input focus-state font-style.
| `$input-select-background-color`             | Select background-color.
| `$input-select-border-color`                 | Select border-color.
| `$input-select-border`                       | Select border.
| `$input-select-border-radius`                | Select border-radius.
| `$input-select-height`                       | Select height.
| `$input-select-width`                        | Select width.
| `$input-select-margin`                       | Select margin.
| `$input-select-padding`                      | Select padding.
| `$input-select-vertical-align`               | Select vertical-align.
| `$input-select-font-size`                    | Select font-size.
| `$input-select-color`                        | Select text-color.
| `$input-select-font-family`                  | Select font-family.
| `$input-select-font-weight`                  | Select font-weight.
| `$input-select-font-style`                   | Select font-style.
| `$input-select-line-height`                  | Select line-height.
| `$input-select-placeholder-color`            | Select placeholder text-color.
| `$input-select-placeholder-font-style`       | Select placeholder font-style.
| `$input-select-disabled-background-color`    | Select disabled-state background-color.
| `$input-select-disabled-border`              | Select disabled-state border.
| `$input-select-disabled-opacity`             | Select disabled-state opacity.
| `$input-select-disabled-color`               | Select disabled-state color.
| `$input-select-disabled-font-style`          | Select disabled-state font-style.
| `$input-select-focus-background-color`       | Select focus-state background-color.
| `$input-select-focus-border`                 | Select focus-state border.
| `$input-select-focus-color`                  | Select focus-state color. 
| `$input-select-focus-font-style`             | Select focus-state font-style.
| `$input-textarea-resize`                     | Textarea resize value (vertical, horizontal, both).
| `$input-textarea-background-color`           | Textarea background-color.
| `$input-textarea-border-color`               | Textarea border-color.
| `$input-textarea-border`                     | Textarea border.
| `$input-textarea-border-radius`              | Textarea border-radius.
| `$input-textarea-height`                     | Textarea height.
| `$input-textarea-min-height`                 | Textarea minimum height.
| `$input-textarea-width`                      | Textarea width.
| `$input-textarea-margin`                     | Textarea margin.
| `$input-textarea-padding`                    | Textarea padding.
| `$input-textarea-vertical-align`             | Textarea vertical-align.
| `$input-textarea-font-size`                  | Textarea font-size.
| `$input-textarea-color`                      | Textarea text-color.
| `$input-textarea-font-family`                | Textarea font-family.
| `$input-textarea-font-weight`                | Textarea font-weight.
| `$input-textarea-font-style`                 | Textarea font-style.
| `$input-textarea-line-height`                | Textarea line-height.
| `$input-textarea-placeholder-color`          | Textarea placeholder text-color.
| `$input-textarea-placeholder-font-style`     | Textarea placeholder font-style.
| `$input-textarea-disabled-background-color`  | Textarea disabled-state background-color.
| `$input-textarea-disabled-border`            | Textarea disabled-state border.
| `$input-textarea-disabled-opacity`           | Textarea disabled-state opacity.
| `$input-textarea-disabled-color`             | Textarea disabled-state color.
| `$input-textarea-disabled-font-style`        | Textarea disabled-state font-style.
| `$input-textarea-focus-background-color`     | Textarea focus-state background-color.
| `$input-textarea-focus-border`               | Textarea focus-state border.
| `$input-textarea-focus-color`                | Textarea focus-state color. 
| `$input-textarea-focus-font-style`           | Textarea focus-state font-style.
| `$input-limiter-background-color`            | Limiter input background-color.
| `$input-limiter-border-color`                | Limiter input border-color.
| `$input-limiter-border`                      | Limiter input border.
| `$input-limiter-border-radius`               | Limiter input border-radius.
| `$input-limiter-height`                      | Limiter input height.
| `$input-limiter-width`                       | Limiter input width.
| `$input-limiter-margin`                      | Limiter input margin.
| `$input-limiter-padding`                     | Limiter input padding.
| `$input-limiter-vertical-align`              | Limiter input vertical align.
| `$input-limiter-font-size`                   | Limiter input font-size.
| `$input-limiter-color`                       | Limiter input text-color.
| `$input-limiter-font-family`                 | Limiter input font-family.
| `$input-limiter-font-weight`                 | Limiter input font-weight.
| `$input-limiter-font-style`                  | Limiter input font-style.
| `$input-limiter-line-height`                 | Limiter input line-height.
| `$input-limiter-disabled-background-color`   | Limiter input disabled-state background-color.
| `$input-limiter-disabled-border`             | Limiter input disabled-state border.
| `$input-limiter-disabled-opacity`            | Limiter input disabled-state opacity.
| `$input-limiter-disabled-color`              | Limiter input disabled-state color.
| `$input-limiter-disabled-font-style`         | Limiter input disabled-state font-style.
| `$input-limiter-focus-background-color`      | Limiter input focus-state background-color.
| `$input-limiter-focus-border`                | Limiter input focus-state border.
| `$input-limiter-focus-color`                 | Limiter input focus-state text-color.
| `$input-limiter-focus-font-style`            | Limiter input focus-state font-style.
| `$input-sorter-background-color`             | Sorter input background-color.
| `$input-sorter-border-color`                 | Sorter input border-color.
| `$input-sorter-border`                       | Sorter input border.
| `$input-sorter-border-radius`                | Sorter input border-radius.
| `$input-sorter-height`                       | Sorter input height.
| `$input-sorter-width`                        | Sorter input width.
| `$input-sorter-margin`                       | Sorter input margin.
| `$input-sorter-padding`                      | Sorter input padding.
| `$input-sorter-vertical-align`               | Sorter input vertical-align
| `$input-sorter-font-size`                    | Sorter input font-size.
| `$input-sorter-color`                        | Sorter input color.
| `$input-sorter-font-family`                  | Sorter input font-family.
| `$input-sorter-font-weight`                  | Sorter input font-weight.
| `$input-sorter-font-style`                   | Sorter input font-style.                     
| `$input-sorter-line-height`                  | Sorter input line-height.
| `$input-sorter-disabled-background-color`    | Sorter input disabled-state background-color.
| `$input-sorter-disabled-border`              | Sorter input disabled-state border.
| `$input-sorter-disabled-opacity`             | Sorter input disabled-state opacity.
| `$input-sorter-disabled-color`               | Sorter input disabled-state color.
| `$input-sorter-disabled-font-style`          | Sorter input disabled-state font-style.

###### Header
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$header-background-color`                   | Header background color.
| `$header-text-color`                         | Header text-color.
| `$header-padding`                            | Header padding.
| `$header-panel-background-color`             | Header panel background color.
| `$header-panel-text-color`                   | Header panel text color.
| `$header-panel-padding`                      | Header panel padding.
| `$header-panel-bottom-border-color`          | Header panel border-bottom color.

###### Menubar
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$menu-bar-background`                       | Menu bar background-color.
| `$menu-bar-margin`                           | Menu bar margin.
| `$menu-bar-menu-item-font-family`            | Menu bar item font-family.
| `$menu-bar-menu-item-font-weight`            | Menu bar item font-weight.
| `$menu-bar-menu-item-font-size`              | Menu bar item font-size.
| `$menu-bar-menu-item-color`                  | Menu bar item text-color.
| `$menu-bar-menu-item-hover-color`            | Menu bar item hover-state text-color.
| `$menu-bar-menu-item-hover-default-border`   | Menu bar item hover-state default border.
| `$menu-bar-menu-item-hover-border-top`       | Menu bar item hover-state border-top.
| `$menu-bar-menu-item-hover-border-right`     | Menu bar item hover-state border-right.
| `$menu-bar-menu-item-hover-border-bottom`    | Menu bar item hover-state border-bottom.
| `$menu-bar-menu-item-hover-border-left`      | Menu bar item hover-state border-left.

###### Fieldset
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$form-fieldset-border`                      | Form fieldset border.
| `$form-fieldset-margin`                      | Form fieldset margin.
| `$form-fieldset-padding`                     | Form fieldset padding.
| `$form-fieldset-legend-color`                | Form fieldset legend text-color.
| `$form-fieldset-legend-font-size`            | Form fieldset legend font-size.
| `$form-fieldset-legend-font-family`          | Form fieldset legend font-family.
| `$form-fieldset-legend-font-weight`          | Form fieldset legend font-weight.
| `$form-fieldset-legend-font-style`           | Form fieldset legend font-style.
| `$form-fieldset-legend-line-height`          | Form fieldset legend line-height.
| `$form-fieldset-legend-margin`               | Form fieldset legend margin.
| `$form-fieldset-legend-padding`              | Form fieldset legend padding.
| `$form-fieldset-legend-width`                | Form fieldset legend width.

###### Fieldset Field
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$form-fieldset-field-type`                  | Form fieldset field type.
| `$form-fieldset-field-margin`                | Form fieldset field margin.
| `$form-fieldset-field-box-sizing`            | Form fieldset field box-sizing.
| `$form-fieldset-field-choice-before-width`   | Form fieldset field choice :before width.
| `$form-fieldset-field-choice-before-padding` | Form fieldset field choice :before padding.
| `$form-fieldset-field-choice-before-height`  | Form fieldset field choice :before height.
| `$form-fieldset-field-choice-before-float`   | Form fieldset field choice :before float.

###### Fieldset label
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$form-fieldset-field-label-padding`         | Form fieldset label padding.
| `$form-fieldset-field-label-text-align`      | Form fieldset label text-align.
| `$form-fieldset-field-label-width`           | Form fieldset label width.
| `$form-fieldset-field-label-float`           | Form fieldset label float.
| `$form-fieldset-field-label-font-weight`     | Form fieldset label font-weight.
| `$form-fieldset-field-choice-label-margin`   | Form fieldset choice label margin.

###### Detail tab
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$detail-tab-title-background`               | Detail tab title background-color.
| `$detail-tab-title-border-color`             | Detail tab title border-color.
| `$detail-tab-title-color`                    | Detail tab title text-color.
| `$detail-tab-title-font-weight`              | Detail tab title font-weight.
| `$detail-tab-title-text-decoration`          | Detail tab title text-decoration.
| `$detail-tab-title-padding`                  | Detail tab title padding.
| `$detail-tab-title-height`                   | Detail tab title height.
| `$detail-tab-title-font-size`                | Detail tab title font-size.
| `$detail-tab-title-hover-background`         | Detail tab title hover-state background-color.
| `$detail-tab-title-hover-color`              | Detail tab title hover-state text-color.
| `$detail-tab-title-hover-border`             | Detail tab title hover-state border.
| `$detail-tab-title-active-background`        | Detail tab title active-state background-color.
| `$detail-tab-title-active-color`             | Detail tab title active-state text-color.
| `$detail-tab-title-active-border`            | Detail tab title active-state border.
| `$detail-tab-content-background`             | Detail tab content background.
| `$detail-tab-content-border`                 | Detail tab content border.
| `$detail-tab-content-margin`                 | Detail tab content margin.
| `$detail-tab-content-font-size`              | Detail tab content font-size.

###### Footer
| Variable                                     | Description
|----------------------------------------------|-------------------------
| `$footer-background`                         | Footer background-color.
| `$footer-content-margin`                     | Footer content margin.
| `$footer-content-padding`                    | Footer content padding.
| `$footer-content-color`                      | Footer content text-color.
| `$footer-line-color`                         | Footer line color.

### Gulp
##### Available Gulp commands
- `gulp watch` : Watches all `.scss` files and compiles them when `gulp` detects a change. It also starts a browsersync session this way you can see your changes on the fly.
- `gulp scripts` : Compiles all `.js` files.
- `gulp script-depts` : Copies the script dependencies from the `node_modules` to a local folder for `production`
- `gulp build` : Builds all `.scss` and `.js` files for `production`
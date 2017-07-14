# ClubManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.


### Objectives
* As a user, I'd like to visit a page to see a list of all team or club members.
* As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As an administrator, I want to add new users to the club. (User authentication is not required).
* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a user, in case they leave the club or team.

## Setup/Installation Requirements

* Clone the repository (https://github.com/jaredeiseman/clubmanager.git)
* Run 'npm install' in your chosen terminal application
* Run 'bower install' in your chosen terminal application
* Run 'ng serve' in your chosen terminal application for a development server.
  * ng build --prod will create a minified, deployable version of the project in the dist folder at root level
* Login to Firebase and initialize a new project, choosing the option to integrate firebase into web app from the console
* Create 'api-keys.ts' in the src/app/ directory
* Add your firebase credentials to 'api-keys.ts' in the following format:
export var masterFirebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxxx.firebaseio.com",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxx"
};

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Lab 2

In this lab you are going to create the main structure of the application.

Start by analyzing the `.html` files in the `Artifacts` folder in order to understand the structure of the application.

Take `home.html` page and split it into four components:

- Header
- Footer
- Navigation
- Content

Do the same for the other pages. (Remeber: You already have some components).

When you are going to test the application you will notice that the pictures are broken. In order to fix that you  need to move the `content` folder from the `Artifacts` folder to the `src` folder and mark it as an asset folder.
 (*Hint! Look at `angular.json` to see how is done by  angular for your application.*).

## Solution

Run `ng g c`, which is the short version of `ng generate component`, with the following values: *header, footer, nav, home, recipe, weekly-menu*

Move the header content to the header component, etc.

Copy th skeleton of the app from `home.html` to `app.component.html`.

Move the `content` folder to the `src` folder

Update angular.json to use this new folder as an assets folder.

# Lab instructions

## Lab 1

In this lab you are going to add support for angular by using angular cli. Please keep in mind that the folder exists, and that you might already have a `.git` folder. So look at the angular cli help how you can fix this.

## Lab 2

In this lab you are going to create the main structure of the application.

Start by analyzing the `.html` files in the `Artifacts` folder in order to understand the structure of the application.

Take `home.html` page and split it into four components:

- Header
- Footer
- Navigation
- Content

Do the same for the other pages. (Remeber: You already have some components).

When you are going to test the application you will notice that the pictures are broken. In order to fix that you  need to move the `content` folder from the `Artifacts` folder to the `src` folder and mark it as an asset folder.
 (*Hint! Look at `.angular.cli.json` to see how is done by  angular for your application.*).

## Lab 3

 In this lab you are going to use interpolation binding, one way binding, `*ngIf`, and `*ngForOf` to create a data driven page for the weekly menu. (*Helpful hint: `*ngForOf` presents several exported variables, such as index, odd, even*)

## Lab 4

In this lab you are going to create a pipe in order to remove the hard-coded image path (*Hint look at `ng generate pipe`*)

## Lab 5

In this lab you are going to use ViewChild and view lifecycle hooks to pass data to the children components.

## Lab 6

In this lab you are going to create a simple service to return the data. You are going to use DI to inject it into the components that need this data.

## Lab 7

In this lab you are going to use the http lient to get the data from the backend. In order to do that you need to move the data folder to the assets folder and then you can `get` the data directly by from the `/assets/data/recipe.json`  url.

## Lab 8

In this lab you are going to implement routing into the application.
# React JS Test Task
ReactJS - Intermediate - Test task 1

## Description

The goal of this task is to implement a web application that gives the user the ability to see the available products, add new ones and edit the existing products. Only front end implementation is required so there is no need for any server side support. Five mockup products should be added on application init and data can be stored in either React state or web browser storage, up to developers preference. The JSX usage is required and JS Harmony (ES6) usage is preferred. Developer should assume that this is a small part of a big application and create several independent components that can be reused. For example, having product component separated from the product list is a good idea because it will give an ability to reuse the same component in wish list or purchased products list. Package Manager usage is also acceptable (like bower or npm) but not for adding JQuery like libraries or frameworks, it can be used to add routing ability https://github.com/reactjs/react-router, Bootstrap or any other useful package for this project.

> **Product in our application should have these properties**
>
> - ID			– 	Product unique number
> - Price			– 	The cost of product
> - Name			– 	The name of product
> - Description		– 	Product detailed explanation
> - Creation Date		– 	The date where product was created
>
> All these properties should be editable. It is a good practice to have separate react component (form based) for editing these properties.

**Web Application should have sections listed below**

List of Products		– 	Page shows all products from local storage. User can remove product from this page or navigate to product view or edit pages.

Edit Product		– 	Page to edit one of the stored products

View Product		– 	Page to view product details

## Installation 

```sh
npm install
npm start
```


# Contributing to AppwriteUi
Thank you for your interest in contributing to this project! This document outlines the guidelines for contributing to this project.

>Note: You must know React and Sass/CSS to contribute to this project. If you are not familiar with Sass, you can learn more about it [here](https://www.youtube.com/watch?v=akDIJa0AP5c).

## Getting started: 
1. Fork the repository
2. Clone the repository to your local machine
3. Open the repository in the code editor of your choice
4. Change directory to the `react` folder
```bash
cd react
```
5. There are directories called `dev` and `npm-package` in the `react` folder. The `dev` directory contains the source code for the development environment and the `npm-package` directory contains the source code for the npm package. Change directory to the `dev` directory and install the required packages to start working on the project.
```bash
cd dev
npm install
```
6. Run the development environment
```bash
npm run dev
```
> Note: A next js development environment will start on localhost . 
7. All the code related to the npm package is in the `lib` directory inside `dev`. The running server uses the exports from the index.js file  and the index.scss for styling the components from the `lib` directory itself. Add the changes u want in the `lib` directory and the changes will be reflected in the development environment. And when you are done with the changes, you can follow the next step.
8. To build the npm package, change directory to the `npm-package` directory and run the following command.
```bash
npm run build
```
9. The build will be created in the `dist` directory. You can test the npm package but first change the name of the package in `package.json` file  and running the following command.
```bash
npm link  
``` 
10. Now you can test the npm package by creating a new react app and running the following command.
```bash
npm link [package-name]
```




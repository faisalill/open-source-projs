## Getting started: 
1. Fork the repository
2. Clone the repository to your local machine
3. Open the repository in the code editor of your choice
4. Change directory to the `dev` folder
```bash
cd dev
```
5. There are directories called `dev` and `npm-package` in the  folder. The `dev` directory contains the source code for the development environment and the `npm-package` directory contains the source code for the npm package. Change directory to the `dev` directory and install the required packages to start working on the 
project. 
```bash
cd dev
npm install
```
> Make sure to create a .env.local file in the `dev` directory and add the following environment variables. Doing this won't expose your appwrite project id and host url to the browser (Checked it in source dev tools tab). 
```bash
DEV_KEY_URL=link which when called with the get method returns the appwrite projectId and host URl
PRODUCTION_KEY_URL=link which when called with the get method returns the appwrite projectId and host URL but for production
```
>THe json must be as following
```json
{
    url : "your project id",
    id : "your host url"
}
```
6. Run the development environment
```bash
npm run dev
```
> Note: A next js development environment will start on localhost . 
7. All the code related to the npm package is in the `lib` directory inside `dev`. The running server uses the exports from the index.js file  and the index.scss for styling the components from the `lib` directory itself. Add the changes u want in the `lib` directory and the changes will be reflected in the development environment. And when you are done with the changes, you can follow the next step.
8. Write unit tests for the changes you made in the `lib` directory. The unit tests are written in the `tests` directory inside `dev`. The unit tests are written using the [Jest](https://jestjs.io/) framework. You can run the unit tests by running the following command.
```bash
npm run test
```
9. To build the npm package, change directory to the `npm-package` directory and run the following command.
```bash
npm run build
```
10. The build will be created in the `dist` directory. You can test the npm package but first change the name of the package in `package.json` file  and running the following command.
```bash
npm link  
``` 
11. Now you can test the npm package by creating a new react app and running the following command.
```bash
npm link [package-name]
```




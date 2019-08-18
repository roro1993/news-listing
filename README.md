# Angular Demo Project

![Demo Pic](./demo.gif)

[click to see the demo](https://roro1993.github.io/news-listing/)

The Demo project is responsive using bootstrap 4 with some components built to fit together. 

### Installations

```
1- Install NodeJs from NodeJs Official Page.
2- Open Terminal
3- Run in terminal: npm install -g @angular/cli
4- Then: npm install
5- Install the package to help deploy to github pages:  npm install -g angular-cli-ghpages
```

### To Manage the App

```
1- Open Terminal
2- Go to your file project: cd /{to_project}
3- i) To run the project locally: ng serve
   ii) Navigate to: http://localhost:4200/
4- To deploy changes to github pages: npm run toGithub
```


### Files Structures

```
├── README.md
├── demo.gif
├── .gitignore
├── angular.json
├── karma.conf.js
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── tslint.json
├── src
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── content/
│   │   │      ├  content.component.html
│   │   │      ├  content.component.scss
│   │   │      ├  content.component.spec.ts
│   │   │      ├  content.component.ts
│   │   │      ├  content.interface.ts
│   │   │      ├  content.service.spec.ts
│   │   │      ├  content.service.ts
│   │   │      ├ cards/
│   │   │          ├ cards.component.html  
│   │   │          ├ cards.component.scss
│   │   │          ├ cards.component.spec.ts
│   │   │          ├ cards.component.ts
│   │   │
│   │   ├── filters/
│   │   │      ├  filters.component.html
│   │   │      ├  filters.component.scss
│   │   │      ├  filters.component.spec.ts
│   │   │      ├  filers.component.ts
│   │   │
│   │   ├── filters/
│   │    
│   │    
│   ├── assets/
│   │   ├── img
│   │   │    ├ fav.png
│   │   |
│   │   ├── scss
│   │        ├ variables.scss
│   │   
│   ├── environments/
│   │   ├── environments.prod.ts
│   │   ├── environments.ts

```
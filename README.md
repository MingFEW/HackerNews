# Hacker Top Stories and Comments 

**LIVE DEMO****: https://melodic-sable-85ff60.netlify.app/

**I. Top Stories View**

- Scroll down to view more stories

![Main view!]([https://hacker-top-stories-432.netlify.app/images/doc/m1.png](https://hacker-top-stories-432.netlify.app/images/doc/m1.png) "Main View")

**II. Click Comment to view Nested Comments**

- Click view more to see children comments


#### Install 
```
$ yarn install
```

#### Run dev 
```
$ yarn dev
```

#### Run Test
```
$ yarn test
```





### Requirements for UI

1. Display a list of hacker news top stories(100news).
2. Before data finishes fetching, please show a loader.
3. Each news post has a link to navigate to the actual page as a new tab.
4. Infinite scrolling or Pagination
5. Animations
6. Unit testing, snapshot testing

### Requirements about Tech

1. Use React. If you would like, you can use any meta framework of your choice
(eg. Next.js).
2. Use Typescript.
3. DO NOT use a UI library (eg. material design, bootstrap). You can use a CSS
framework if you would like(eg. styled-component, css-in-module, tailwindcss,
etc).

### API Spec

https://github.com/HackerNews/API

#### 01 - HackerNews List 2

**Example**

- Top stories api https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- fetch individual story https://hacker-news.firebaseio.com/v0/item/{itemId}.json?
- print=pretty https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

## TECH STACK : Starter for React JS 18+ with Vite, Twin.macro v3+ and TypeScript

### Features

- [ReactJs](https://reactjs.org/) + [Vitejs](https://vitejs.dev/)
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Twin.macro](https://github.com/ben-rogerson/twin.macro)
- Integrate with [React-I18next](https://react.i18next.com/)
- Integrate with [Redux Toolkit](https://redux-toolkit.js.org/)
- Strict Mode for TypeScript and React 18+
- Linter with [ESLint](https://eslint.org) (PancakeSwap eslint)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Absolute Imports using `@` prefix
- SEO metadata with React Helmet Async

### Requirements

- Node.js 16.14.0+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/MingFEW/HackerNews.git
cd HackerNews
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:5173 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # App folder
│       │── components              # Components folder
│       │── pages                   # All page here
│   ├── assets                      # Assets folder
│   ├── locales                     # Locales folder
│   ├── constants                   # Constants folder
│   ├── styles                      # Styles folder
│   ├── state                       # State folder
│   ├── store                       # Redux store
│   ├── types                       # Types folder
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure. Please change the following file:

- `public/logo.svg`: your website favicon
- `src/constants/AppConfig.ts`: configuration file
- `src/app/pages/Home/index.tsx`: home view

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run preview
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

Now, your blog is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.

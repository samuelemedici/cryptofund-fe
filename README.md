# nextjs-boilerplate

Boilerplate for front-end projects based on Next.js.

## Features


<table style="width:100%">
  
  <tr>
    <td><img src="https://user-images.githubusercontent.com/104760516/168919089-35a82590-29d6-45de-99be-e1b2ef0d8ea2.png" width="40"></td>
    <td>Next.js</td>
    <td><a href="https://nextjs.org/">https://nextjs.org/</a></td>
    <td><a href="#next">Next.js Setup</a></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/104760516/168977554-7fb792f1-dfce-4d57-bdf6-b413e261fc47.png" width="40"></td>
    <td>Project Structure</td>
    <td></td>
    <td><a href="#project">Project Setup</a></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/104760516/168911020-0789cdad-5a96-4f6f-8f6a-5255d0735c5f.png" width="40"></td>
    <td>Style</td>
    <td></td>
    <td><a href="#style">Style Setup</a></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/104760516/168919493-3535b671-387e-4c21-a247-70816c0cb688.png" width="40"></td>
    <td>TailwindCSS</td>
    <td><a href="https://tailwindcss.com/">https://tailwindcss.com/</a></td>
    <td><a href="#tailwind">Tailwind Setup</a></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/104760516/168920409-3ab60324-eaac-46cc-99e0-f13d45df3768.svg" width="40"></td>
    <td>Redux + Redux Toolkit</td>
    <td><a href="https://redux.js.org/">https://redux.js.org/</a></td>
    <td><a href="#redux">Redux Setup</a></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/104760516/168918558-121cf743-35c2-405f-9851-34e1b5a638c7.png" width="40"></td>
    <td>Openapi</td>
    <td><a href="https://www.openapis.org/">https://www.openapis.org/</a></td>
    <td><a href="#openapi">Openapi Setup</a></td>
  </tr>
</table>

## Contacts

Feel free to open an issue on Github!
Otherwise, you can contact me at my e-mail:

📪 <a href="mailto:lorenzo.galassi@quinck.io">lorenzo.galassi@quinck.io</a>

##

<h3 align="center" id="next">
  Next.js setup
</h3>

<p align="center">
   <img src="https://user-images.githubusercontent.com/104760516/168919089-35a82590-29d6-45de-99be-e1b2ef0d8ea2.png" width="100">
</p>

##

This projects is currently using Next.js version 12.1.6 

If you want to donwgrade Next.js to increase compatibility with deployment systems, you can follow the official guide, taking care to carry out the steps in reverse: [https://nextjs.org/docs/upgrading](https://nextjs.org/docs/upgrading)

##

<h3 align="center" id="project">
  Project Setup
</h3>

<p align="center">
   <img src="https://user-images.githubusercontent.com/104760516/168977554-7fb792f1-dfce-4d57-bdf6-b413e261fc47.png" width="100">
</p>

##

The noteworthy folders of the project are:

- ```/public/assets``` which contains two subfolders named ```images``` (for icons and images) and ```fonts``` (for truetype and opentype files)
- ```/src``` natively supported by Next.js as indicated in the documentation: [https://nextjs.org/docs/advanced-features/src-directory](https://nextjs.org/docs/advanced-features/src-directory)
- ```/src/components``` which contains the components used in the project
- ```/src/components/shared``` which contains components used in several sections of the project and/or reused by other components
- ```/src/state``` which contains the files related to Redux
- ```src/api``` which contains the openapi.yml specification file
- ```src/api/generated``` which contains the autogenerated code via the <a href="https://www.npmjs.com/package/openapi-typescript-codegen">openapi-typescript-codegen</a> dependency

##

<h3 align="center" id="style">
  Style setup
</h3>

<p align="center">
   <img src="https://user-images.githubusercontent.com/104760516/168911020-0789cdad-5a96-4f6f-8f6a-5255d0735c5f.png" width="100">
</p>

##

This project uses **CSS** and already has a **reset file** (currently using [mayerweb](http://meyerweb.com/eric/tools/css/reset/)'s one).
If you want to add/change the reset rules, paste them inside 
```
.
├──src                   
├──────styles
├────────────reset.css
```
There are **no fonts currently installed**. You can use [Next.js Font Optimization](https://nextjs.org/docs/basic-features/font-optimization) if you plan to work with Google fonts.
Otherwise you can download font files and save them inside 
```
.
├──public                   
├────────assets
├──────────────fonts
```
and then import each of them inside
```
.
├──src                   
├─────styles
├───────────globals.css
```
using the standard CSS syntax
<p align="center">
  <img src="https://user-images.githubusercontent.com/104760516/168912580-f5a35d39-c2d7-40cf-a7c6-31ba736206d4.png" width="800">
</p>

<details>
  <summary>Copy the code</summary>
  
  ```
  @font-face {
    font-family: "Test";
    src: url("/assets/fonts/Test-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  ```
  
</details>
 
##

<h3 align="center" id="tailwind">
  TailwindCSS setup
</h3>

<p align="center">
   <img src="https://user-images.githubusercontent.com/104760516/168911286-11ec6357-9bdf-437f-a2dd-1e96d6c6e007.png" width="100">
</p>

##

This project uses TailwindCSS together with PostCSS and autoprefixer ([here](https://tailwindcss.com/docs/installation/using-postcss) you can find more 
info regarding this installation type).

You can start using TailwindCSS classes in your pages and components without any further settings.

If you plan to remove the ```src``` folder in order to place everything inside the root folder, make sure to update your ```tailwind.config.js``` file.

<p align="center">
  <img src="https://user-images.githubusercontent.com/104760516/168912300-aa97ee97-a626-4290-860d-9a9c6edc28d6.png" width="800">
</p>

<details>
  <summary>Copy the code</summary>
  
  ```
  module.exports = {
  /*
  Remove /src from each of the strings inside of the content array
  */
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  ...
  ```
  
</details>

If you have to define custom layers, you can do it inside ```globals.css```

<p align="center">
  <img src="https://user-images.githubusercontent.com/104760516/168976705-71a79c98-4505-4218-925c-f6951acc8fb2.png" width="800">
</p>

<details>
  <summary>Copy the code</summary>
  
  ```
  @layer components {
  
    .test-primary {
      @apply w-52 h-12 rounded-lg appearance-none text-white;
    }
  
    .test-secondary {
      @apply w-12 h-12 rounded-md text-black;
    }
  
  }
  ```
  
</details>

##

<h3 align="center" id="redux">
  Redux setup
</h3>

<p align="center">
   <img src="https://user-images.githubusercontent.com/104760516/168913243-354f7c71-9237-4547-93aa-185e05da4f68.svg" width="100">
</p>

##

Together with the standard Redux dependencies, I also use <a href="https://redux-toolkit.js.org/">https://redux-toolkit.js.org/</a> for extra functions.

Get started by creating a new slice for every state property that you want to implement and place them inside 

```
.
├──src                   
├──────state
├───────────slices
```

Each slice have to follow this structure:

<p align="center">
  <img src="https://user-images.githubusercontent.com/104760516/168913819-1d0974e5-3356-494b-84f6-90b56306a12a.png" width="800">
</p>

<details>
  <summary>Copy the code</summary>
  
  ```
  import { createSlice, PayloadAction } from "@reduxjs/toolkit";

  interface TestState {
    testProp: string | null;
  }
  
  const initialState: TestState = {
    testProp: null,
  };

  export const TestSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
      setTestProp: (state, action: PayloadAction<string>) => {
        state.testProp = action.payload;
     },
      resetTestProp: (state) => {
        state.testProp = null;
     },
    },
  });

  export const { setTestProp, resetTestProp } = TestSlice.actions;

  export default TestSlice.reducer;
  ```
  
</details>

then import them inside 
```
.
├──src                   
├──────state
├───────────store
├────────────────store.ts
```

and add them inside the store configuration:

<p align="center">
  <img src="https://user-images.githubusercontent.com/104760516/168906103-d23d8981-6ca5-4a1b-9d8b-65abe4279ab0.png" width="800">
</p>
  
<details>
  <summary>Copy the code</summary>
  
  ```
  export const store = configureStore({
  
    preloadedState: {
      test: initialState,
    },
  
    reducer: {
      test: testReducers,
      validatedInput: validatedInputReducers,
      newValue: newReducers,
    },
  });
  ```
  
</details>

##

<h3 align="center" id="openapi">
  Openapi setup
</h3>

<p align="center">
   <img src="https://user-images.githubusercontent.com/104760516/168918558-121cf743-35c2-405f-9851-34e1b5a638c7.png" width="100">
</p>

##

Inside the ```package.json``` you can find the scripts that auto-generate code from the openapi file thanks to the <a href="https://www.npmjs.com/package/openapi-typescript-codegen">openapi-typescript-codegen</a> dependency

<p align="center">
  <img src="https://user-images.githubusercontent.com/104760516/168922159-993c3818-c2ba-4ddc-b236-56744613ef0a.png" width="800">
</p>

make sure to place your ```openapi.yml``` file inside

```
.
├──src                   
├──────api
```

all of the auto-generated code is placed inside

```
.
├──src                   
├──────api
├─────────generated
```
and it is ignored by the ```.gitignore``` file.


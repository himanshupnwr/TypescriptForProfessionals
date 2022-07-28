# TypescriptForProfessionals
Repository for Udemy Typescript course - Typescript for Professionals 2022

## Commands

git commands

```
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/c0ldlimit/vimcolors.git
git push -u origin master
```
 
## Push an existing repository from the command line

```
git remote add origin https://github.com/c0ldlimit/vimcolors.git
git push -u origin master
```

## for initializing an npm package in an empty folder with package.json 
```
npm init -y
```

```
npm i typescript
npx tsc --init --rootdir src --outdir lib
npx tsc --watch
This will create a lib folder with the javascript code in the folder

node index.js
```

## To solve the npm self signed certificate issue

```
export npm_config_strict-ssl=false
npm install npm -g --ca=null
npm --version
unset npm_config_strict-ssl

npm config set strict-ssl false
npm update npm –g
npm config set strict-ssl true
```

## Creating an npm package with declaration and source maps
```
npm init -y
npm i typescript -D
npx tsc --init --rootDir src --outDir lib --sourceMap --declaration --declarationMap
```

add a function inside the typescript project ts file

now we will do some changes to the package.json file

```
"main" : lib
"types" : lib
"scripts": {"build":"tsc"}

run npm run build
```

publish to npm
```
npm publish
```

To consume the package
```
npm i packagename

import {functionname} from 'packagename';
```

To run tsc files directly we can use tsnode 
install tsnode from npm
```
npm i ts-node
npx ts-node src/index.ts
```

we can also add our frequently used commands to the script section in package.json
```
"scripts"{"start" : "ts-node src/index.ts"}

npm start
```

## Use Project References 

Go to tsconfig of the project which we want to reference and make composite property as true under compiler options.

Then go to the project in which we want to use reference. Go to tsconfig.json and add the code

```
"include": [
    "src"
],
"references" : [
    {"path": ".../example-lib/"} // example-lib is the project we want to reference
]
```

also change the build script in package.json

```
"scripts"
{
    "build": "tsc --build",
    //--build will also build the referenced project
}
```
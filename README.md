# TypescriptForProfessionals
Repository for Udemy Typescript course - Typescript for Professionals 2022

# Commands

git commands

git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/c0ldlimit/vimcolors.git
git push -u origin master
 
# Push an existing repository from the command line
 
git remote add origin https://github.com/c0ldlimit/vimcolors.git
git push -u origin master

# for initializing an npm package in an empty folder with package.json 
npm init -y

npm i typescript
npx tsc --init --rootdir src --outdir lib
npx tsc --watch
This will create a lib folder with the javascript code in the folder

node index.js

# To solve the npm self signed certificate issue

export npm_config_strict-ssl=false
npm install npm -g --ca=null
npm --version
unset npm_config_strict-ssl

npm config set strict-ssl false
npm update npm –g
npm config set strict-ssl true
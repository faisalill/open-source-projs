import { execSync } from 'child_process';
import fs from 'fs'
function buildDistFolder() {

if(fs.existsSync('./dist')){
  const deleteDist = execSync('rm -rf ./dist');
  console.log(deleteDist.toString());
}

if(fs.existsSync('./src')){
  const deleteSrc = execSync('rm -rf ./src');
  console.log(deleteSrc.toString());
}

const createSrc = execSync('mkdir ./src');

console.log(createSrc.toString())

const copyCodeToSrc = execSync('cp -r ../dev/lib/* ./src');

console.log(copyCodeToSrc.toString());


const compileScss = (execSync('sass ./src/index.scss ./src/index.css --no-source-map'));

console.log(compileScss.toString());


const buildDistFolder = execSync('rollup -c');

console.log(buildDistFolder.toString());
}

try{
buildDistFolder()
}
catch(e){
console.log(e)
}

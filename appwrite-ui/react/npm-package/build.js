import { execSync } from 'child_process';
import ora from 'ora';
import fs from 'fs'
const spinner = ora()

function buildDistFolder() {
spinner.start('checking if dist folder exists')
if(fs.existsSync('./dist')){
  spinner.succeed('dist folder exists')
  spinner.start('deleting dist folder')
  const deleteDist = execSync('rm -rf ./dist');
  spinner.succeed('dist folder deleted')
}

spinner.start('checking if src folder exists')
if(fs.existsSync('./src')){
  spinner.succeed('src folder exists')
  spinner.start('deleting src folder')
  const deleteSrc = execSync('rm -rf ./src');
  spinner.succeed('src folder deleted')
}

spinner.start('creating src folder')
const createSrc = execSync('mkdir ./src');
spinner.succeed('src folder created')
spinner.start("copying code to src folder")
const copyCodeToSrc = execSync('cp -r ../dev/lib/* ./src');

spinner.succeed('code copied to src folder')
spinner.start('compiling scss to css')

const compileScss = (execSync('sass ./src/index.scss ./src/index.css --no-source-map'));

spinner.succeed('scss compiled to css')
spinner.start('creating dist folder')
const buildDistFolder = execSync('rollup -c');
console.log(buildDistFolder.toString());
spinner.succeed('dist folder created')
}

try{
buildDistFolder()
}
catch(e){
console.log(e)
}

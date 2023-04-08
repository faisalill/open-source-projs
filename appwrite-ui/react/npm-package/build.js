import { execSync } from 'child_process';

function buildDistFolder() {
 const copyCode = execSync('cp -R ../dev/lib/* ./src');
 console.log(copyCode.toString());
}

buildDistFolder()
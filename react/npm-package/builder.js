const directory = '../dev/lib';

import chokidar from 'chokidar';
import { spawn, exec } from 'child_process';

function buildDistFolder() {
    exec('cp -R ../dev/lib/* ./src/', (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
  
      console.log('Copy complete, running Rollup...');
      const npmBuild = spawn('npm', ['run', 'build']);
    npmBuild.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    npmBuild.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    npmBuild.on('close', (code) => {
      console.log(`npm run build exited with code ${code}`);
    });
  });
}

const watcher = chokidar.watch(directory);

watcher.on('change', (path)=>{
    console.log('File', path, 'has been changed');
    buildDistFolder();
})

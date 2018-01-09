'use strict';

let path = require('path');
let childProcess = require('child_process');
let chokidar = require('chokidar');

let binPath = childProcess.execSync('npm bin', {
    encoding: 'utf8',
    cwd: process.cwd()
});
let ngcCommand = 'ngc -p ./tsconfig.json';
let fullCommand = binPath.trim() + '/' + ngcCommand;

chokidar.watch(
    ['app/**/*.component.ts', 'app/**/*.template.html', 'app/**/*.style.css'],
    { ignoreInitial: true }
).on('all', () => {
    childProcess.execSync(fullCommand, {
        encoding: 'utf8',
        cwd: process.cwd()
    });
});
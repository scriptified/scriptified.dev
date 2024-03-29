const fs = require('fs');
const glob = require('glob');
const THEMES = ['blue', 'green', 'teal', 'indigo', 'orange', 'purple', 'gray'];

console.log('Extracting and replacing dynamic css classes for purging...');

let files = [];

const contentDirectories = ['pages', 'components', 'theme'];

let getAllFiles = src => {
  return glob.sync(src + '/**/*.{ts,tsx}');
};

contentDirectories.forEach(directory => {
  const directoryFiles = getAllFiles(directory);
  files = files.concat(directoryFiles);
});

let matches = [];

files.forEach(file => {
  let currentMatches = fs.readFileSync(file, 'utf-8').match(/(\w|:)*-\$\{\w*\}-\d00/g);
  if (currentMatches) {
    matches = matches.concat(currentMatches);
  }
});

const purgableClasses = THEMES.reduce((allClasses, theme) => {
  const currentClasses = matches.map(match => match.replace(/\$\{\w*\}/, theme));
  return [...allClasses, ...currentClasses];
}, []);

const purgableCSS = purgableClasses
  .map(css => {
    return `// ${css}\n`;
  })
  .join('');

fs.closeSync(fs.openSync('theme/purgeFile.ts', 'a'));

fs.writeFileSync(
  'theme/purgeFile.ts',
  `// This file is automatically generated during build time containing purgable 
// class names for purgeCSS for the dynamic classes in the code
// >> Start purgable CSS
${purgableCSS}
// >> End purgable CSS
export default undefined;
`
);

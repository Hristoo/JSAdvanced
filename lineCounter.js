const fs = require("fs");
const path = require("path");
const readline = require("readline");

const args = require("minimist")(process.argv.slice(2));
const { path: dir = process.cwd(), exclude = ["node_modules"] } = args;
let { fileTypes = ".js" } = args;
const removeExtDot = (fileTypes) =>
  fileTypes.split(",").map((x) => x.replace(".", ""));

function init() {
  fileTypes = removeExtDot(fileTypes);
  const files = addExtOfFile(fileTypes);

  count(files);
}

function addExtOfFile(fileTypes) {
  let files = [];
  for (const ext of fileTypes) {
    files = files.concat(findFileByExt(dir, ext));
  }

  return files;
}

function count(files) {
  let linesCount = 0;
  const filesArrayLen = files.length;

  for (let i = 0; i < filesArrayLen; i++) {
    const readlineInterface = readline.createInterface({
      input: fs.createReadStream(files[i]),
      output: process.stdout,
      terminal: false,
    });
    readlineInterface.on("line", function (line) {
      linesCount++;
    });
    if (i + 1 === filesArrayLen) {
      readlineInterface.on("close", function () {
        console.log(linesCount);
      });
    }
  }
}

function findFileByExt(folderPath, ext) {
  const filesAndDirs = fs.readdirSync(folderPath);
  const checked = [];
  let resultFromDirs = [];

  return filesAndDirs.reduce(function (filePaths, filePathCurr) {
    // console.log(filesAndDirs)
    const base = path.join(folderPath, filePathCurr);
    const isExcludedDirsAndFiles = base
      .split("\\")
      .some((excludedEl) => exclude.includes(excludedEl));
    const isDirectory = fs.statSync(base).isDirectory();
    const isDirChecked = checked.includes(base);
    const fileExtention = filePathCurr.split(".").pop();

    if (!isExcludedDirsAndFiles) {
      if (isDirectory && !isDirChecked) {
        checked.push(base);
        return [...filePaths, ...findFileByExt(base, fileExtention, fs.readdirSync(base))];
      } else {
        if (fileExtention === ext) {
          return [...filePaths, base];
        }
      }
    }
  }, []);
}

fs.stat(dir, function (err) {
  if (args.help) {
    console.log(`--path Default: ${dir}`);
    console.log(`--fileTypes Default: ${fileTypes}`);
    console.log(`--exclude Default: ${exclude}`);
  } else if (err && err.code === "ENOENT") {
    console.log(`Error! No such file or directory ${dir}`);
  } else if (!err) {
    init();
  }
});

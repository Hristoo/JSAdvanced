import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs');

fs.readFile("test.js",(err, data) => {
    if (err) {
        console.log(err);
    } else{
        console.log(data.toString())
    }
});

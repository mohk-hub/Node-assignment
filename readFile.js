import fs from "fs";


let testFn = function (err, data) {
    if(err){
        console.log("err->>>>>>>>>>>>", err);
    }

    console.log(data.toString());
}

fs.readFile('inpt.txt', testFn);

console.log("Program Ended");

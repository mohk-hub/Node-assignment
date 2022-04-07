let test1 = () => {
    console.log("test 1")
}

let test2 = (cb) => {
    console.log("in test2");
    setTimeout(() => {
        console.log("test 2") // timeout, apicall, db intercation (crud)
        cb();
    }, 1000);
    console.log("out test2");
}

let test3 = () => {
    console.log("test 3")
}

test1()
test2(test3)
let test1 = () => {
    console.log("test 1")
}

let test2 = (cb) => {
    console.log("in test2");
    setTimeout(() => {
        console.log("test 2")
        cb();
    }, 1000);
    console.log("out test2");
}

let test3 = () => {
    console.log("test 3")
}

let test4 = (cb) => {
    console.log("in test4");
    setTimeout(() => {
        console.log("test 4")
    }, 2000);
    console.log("out test4");
}

let test5 = () => {
    console.log("test 5")
}

test1()
test2(test5)
test4(test3);
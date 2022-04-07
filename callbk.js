let test1 = () => {
    console.log("in test1");
    setTimeout(() => {
        console.log("test1");
    }, 2000);
    setTimeout(() => {
        console.log("middle test1");
    }, 1000);
    console.log("out test1")
}

test1();
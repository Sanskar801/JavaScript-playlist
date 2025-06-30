// ASYNCHRONOUS PROGRAMMING

const myPromise = new Promise((resolve, reject) => {
    let name ='hr';
    if (name == 'Pedro') {
        resolve(name);
    }
    else {
        reject('Name is not Pedro, name is ' + name );
    }
});

myPromise
.then((name) => {
    console.log(name);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Promised finished');
});
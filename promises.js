const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DataBase Calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

// ------ Another way ------  

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})
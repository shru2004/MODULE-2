function greet(name) {console.log("Hello, " + name + "!");
}
function
//They are commonly used in asynchronous
//Here's an example of a callback function
sayHelloWithDelay(callback) {setTimeout(function() {callback("John");
}, 2000);
}
sayHelloWithDelay(greet); // 
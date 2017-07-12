console.log('Hello World!');

function hello(name) {
    if (name == undefined) {
        return "Hello, Mustache!"
    }
    return "Hello " + name +"!";
}

function madlib(name, subject) {
    return name + "'s favorite subject in school is " + subject;
}

function tipAmount(amount, service) {
    var percent = 0;
    if (service == "good"){
        percent = .2;
    } else if (service == "fair") {
        percent = .15;
    } else {
        percent = .1;
    }
    return amount * percent;
}

function totalAmount(amount, service) {
 var percent = 0;
    if (service == "good"){
        percent = 1.2;
    } else if (service == "fair") {
        percent = 1.15;
    } else {
        percent = 1.1;
    }
    return amount * percent;
}

function splitAmount(amount, service, ppl) {
    var bill = totalAmount(amount, service);
    return bill/ppl;
}
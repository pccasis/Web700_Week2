//passing function

var add= function (a,b) {
    return a+b
}

function arithmetic(fn, a, b){
    return fn(a,b)
}

var r = arithmetic(add, 10 , 20)
console.log(r)
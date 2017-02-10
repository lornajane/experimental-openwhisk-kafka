function main(params) {
    console.log(params);
    var message = "Hello " + params.name;
    return {payload: message}
}

function main(params) {

  return new Promise(function(resolve, reject) {
    var openwhisk = require('openwhisk');
    var list = ['Susie', 'Freya', 'Ruth'];
    console.log(list);
    var ow = openwhisk();
    console.log(ow);

    ow.actions.invoke({actionName: "invoker/hello", params: {name: "Hayley"}})
    .then(function (data) {
      console.log("done!");
    });
    return {payload: list};
  });
}

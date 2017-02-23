function main(params) {

  return new Promise(function(resolve, reject) {

    var openwhisk = require('openwhisk');
    var list = ['Susie', 'Freya', 'Ruth'];
    var ow = openwhisk();

    var actions = list.map(function (item) {
      return ow.actions.invoke({actionName: "invoker/hello", params: {name: item}});
    });

    return Promise.all(actions).then(function (results) {
        console.log(results);
        return resolve({payload: "All OK"});
    });
  });
}

/**
 * This finds the kafka package, fetches the config attached to it,
 * and puts the kafka_rest_url and kafka_api_key as parameters
 * on your named package
 */

const openwhisk = require('openwhisk');

function main(args) {
    const kafka_package_name = 'SOHub'; // it's a partial match, a fragment of the name is fine
    const package_name = 'mypackage'; // The package to attach config to

    return new Promise((resolve, reject) => {
        var ow = openwhisk();
        ow.packages.list().then(function (packages) {
            for(var i = 0; i < packages.length ; i++) {
                if(packages[i].name.indexOf(kafka_package_name) > -1) {
                    var packageName = packages[i].name;
                }
            }

            // now fetch that package
            console.log("Get package: " + packageName);
        
            return ow.packages.get({packageName: packageName})
        }).then(function (pkg) {
            var params = [];
            for(var i = 0; i < pkg.parameters.length; i++ ) {
                if(pkg.parameters[i].key == "kafka_rest_url") {
                    params.push({key: "kafka_rest_url", value: pkg.parameters[i].value});
                } else if (pkg.parameters[i].key == "api_key") {
                    params.push({key: "kafka_api_key", value: pkg.parameters[i].value});
                }
            }

            console.log("Params:");
            console.log(params);
            const options = {
                packageName: package_name,
                package: {
                    parameters: params
                }
            }

            return ow.packages.update(options);
        }).then(function (data) {
            return resolve({payload: data});

        }).catch(function (err) {
            console.log("ERROR: something went wrong");
            console.log(err);
            return reject(err);
        });    
    });
}

exports.main = main;


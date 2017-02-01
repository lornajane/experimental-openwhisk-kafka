var MessageHub = require('message-hub-rest');

function main(args) {
    return new Promise(function(resolve, reject) {
        console.log("HAI");

        // construct CF-style VCAP services JSON
        var vcap_services = {
            "messagehub": [{
                "credentials": {
                    "kafka_rest_url": args.kafka_rest_url,
                    "api_key": args.kafka_api_key
                }
            }]
        };
        var kafka = new MessageHub(vcap_services);
		console.log(kafka);

        kafka.produce('test', 'This is a message')
        .then(function () {
            resolve({paylod: "OOKK"});
        });
    });
}

exports.main = main;


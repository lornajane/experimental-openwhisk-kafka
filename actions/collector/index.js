var script = require('./collector.js').main()
script.then(function (data) {
    console.log(data);
});

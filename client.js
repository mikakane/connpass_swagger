var Swagger = require('swagger-client');
var fs = require('fs');
var yaml = require("js-yaml")

var fs = require('fs');
var text = fs.readFileSync(__dirname + '/swagger.yaml', 'utf-8');

var spec = yaml.safeLoad(text);

var promise = new Swagger({
    spec,
    usePromise: true,
});

promise.then((client)=>{
    client.events.getEvent({series_id:1100},{responseContentType: 'application/json'}).then((event)=>{
        console.log('event', event.obj);
    }).catch((e)=>{
        console.log(e)
    });
})

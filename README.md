# StackOverflow Ingestor Collector

This component reads data from the Stackoverflow API and writes it to kafka

## Setting Up

To get started, add a Message Hub service with "SOHub" in its name to your space and run `wsk package refresh`

Create a package called `mypackage` and run `build.sh` - this creates the actions we'll be using.

Before the first run, invoke the `init` action: this reads the config from Kafka and attaches it to the package.  You can inspect the parameters are correct by doing `wsk get package mypackage`


## Troubleshooting

Check the logs with `./log_me.sh` which gets the newest activation record and fetches the logs for that

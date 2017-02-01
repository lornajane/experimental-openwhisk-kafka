#!/bin/bash


# The Init Action

cd actions/init
rm init.zip
zip init.zip init.js package.json
cd -

wsk action update -i --kind nodejs:6 /Lorna.Mitchell_Working/mypackage/init actions/init/init.zip


# The Collector

cd actions/collector
rm collector.zip
zip -r collector.zip collector.js package.json node_modules
cd -

wsk action update -i --kind nodejs:6 /Lorna.Mitchell_Working/mypackage/collector actions/collector/collector.zip


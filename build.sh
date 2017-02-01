#!/bin/bash

cd actions/init
rm init.zip
zip init.zip init.js package.json
cd -

wsk action update -i --kind nodejs:6 /Lorna.Mitchell_Working/mypackage/init actions/init/init.zip

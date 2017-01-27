#!/bin/bash

rm -f action.zip
zip -r action.zip index.js package.json node_modules

wsk action update --kind nodejs:6 message action.zip

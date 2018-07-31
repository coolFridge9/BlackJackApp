#!/bin/bash

npm install
node index.js &
jest Tests/Integration
mv appspecDeploy.yml appspec.yml
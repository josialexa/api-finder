#!/usr/bin/env bash

nohup nodemon index/server.js > node.log &
nohup npm start > npm.log &
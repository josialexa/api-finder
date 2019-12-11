#!/usr/bin/env bash

nohup node index/server.js > node.log &
nohup npm start > npm.log &
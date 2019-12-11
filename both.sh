#!/usr/bin/env bash

nohup node index/index.js > node.log &
nohup npm start > npm.log &
#!/usr/bin/env bash

nohup node server/index.js > node.log &
nohup npm start > npm.log &
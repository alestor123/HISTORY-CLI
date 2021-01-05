#!/usr/bin/env node

var history = require('shell-history');
history().map(cmd => console.log(cmd))
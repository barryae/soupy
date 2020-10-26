"use strict";
var seed = require("../seed/seed.json");
var ocean = require("./ocean");
var newOcean = new ocean([2, 3], seed.data);
newOcean.print();
newOcean.seed;

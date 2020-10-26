"use strict";
var seed = require("../seed/seed.json");
var ocean = require("./ocean");
var sorter = require("./orgs/sorter");
var newOcean = new ocean([2, 3], seed.data);
var sorterA = new sorter("alphabetize");
newOcean.print();
sorterA.print();

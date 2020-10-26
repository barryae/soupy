const seed = require("../seed/seed.json")
const ocean = require("./ocean")
const sorter = require("./orgs/sorter")


const newOcean = new ocean([2,3],seed.data)
const sorterA = new sorter(newOcean,"alphabetize",5)
newOcean.print()
sorterA.print()
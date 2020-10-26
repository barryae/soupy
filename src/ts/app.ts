const seed = require("../seed/seed.json")
const ocean = require("./ocean")


const newOcean = new ocean([2,3],seed.data)
newOcean.print()
newOcean.seed
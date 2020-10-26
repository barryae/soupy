"use strict";
module.exports = /** @class */ (function () {
    function Ocean(size, seed) {
        this.storage = [];
        this.size = size;
        this.seed = seed;
        this.Ocean = this.create();
    }
    Ocean.prototype.create = function () {
        var width = this.size[0];
        var height = this.size[1];
        var fillingOcean = [];
        for (var i = 0; i < width; i++) {
            var newArr = [];
            for (var i_1 = 0; i_1 < height; i_1++) {
                newArr.push("");
            }
            fillingOcean.push(newArr);
        }
        var seededOcean = this.addSeed(this.seed, fillingOcean);
        return seededOcean;
    };
    Ocean.prototype.addSeed = function (seed, currOcean) {
        var _this = this;
        var totalArea = this.size[0] * this.size[1];
        if (totalArea < seed.length) {
            seed.splice(0, seed.length - totalArea).
                forEach(function (seed) { _this.storage.push(seed); });
            console.log("Too many seeds. They were added to storage.");
            console.log("Storage:" + this.storage);
        }
        var maxIterations = Math.ceil(seed.length / this.size[1]);
        for (var i = 0; i < maxIterations; i++) {
            var oceanIndex = currOcean.length - 1 - i;
            if (seed.length > this.size[1]) {
                currOcean[oceanIndex] = seed.splice(seed.length - this.size[1]);
            }
            else {
                currOcean[oceanIndex].splice(currOcean[oceanIndex].length - seed.length);
                currOcean[oceanIndex].push(seed);
                currOcean[oceanIndex] = currOcean[oceanIndex].flat();
            }
        }
        return currOcean;
    };
    Ocean.prototype.feed = function (data) {
        //adds strings to ocean from storage (first in, first out)
        //if storage is empty, adds directly to ocean
    };
    Ocean.prototype.print = function () {
        console.log(this.Ocean);
    };
    return Ocean;
}());

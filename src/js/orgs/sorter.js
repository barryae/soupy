"use strict";
module.exports = /** @class */ (function () {
    function Sorter(environment, directive, capacity) {
        this.directives = ["alphabetize"];
        this.record = {
            "born": "",
            "input": {},
            "output": {
                "alphabetize": [],
            },
            "died": "",
        };
        this.stomach = [];
        this.record.born = new Date;
        this.capacity = capacity;
        this.environment = environment;
        if (!this.directives.includes(directive)) {
            console.log("Not a valid directive, default to alphabetize");
            this.currDirective = "alphabetize";
        }
        else {
            this.currDirective = directive;
        }
    }
    Sorter.prototype.live = function () {
        while (!(this.stomach.length > this.capacity)) {
            var data = this.search();
            this.eat(data);
        }
        this.digest();
        this.output();
    };
    Sorter.prototype.search = function () {
        var data = this.environment.Ocean[0][0];
        return data;
    };
    Sorter.prototype.eat = function (data) {
        this.stomach.push(data);
    };
    Sorter.prototype.digest = function () {
        if (this.currDirective == "alphabetize") {
            var sorted = this.stomach.sort();
            this.record.output[this.currDirective] = sorted;
        }
    };
    Sorter.prototype.output = function () {
        console.log(this.record);
    };
    return Sorter;
}());

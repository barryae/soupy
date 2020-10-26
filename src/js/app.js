"use strict";
var seed = require("../seed/seed.json");
var inquirer = require("inquirer");
var ocean = require("./ocean");
var sorter = require("./orgs/sorter");
function splash() {
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'start',
            message: "Welcome to Soupy, a living data environment!",
            choices: [
                'New',
                'Load',
                'Exit',
                new inquirer.Separator(),
                'Instructions',
            ]
        }
    ])
        .then(function (answer) {
        if (answer.start == 'New') {
            console.log("First you must create the ocean.");
            inquirer
                .prompt([
                {
                    type: 'number',
                    name: 'width',
                    message: "How wide would you like it to be?"
                },
                {
                    type: 'number',
                    name: 'depth',
                    message: "How deep would you like it to be?"
                },
            ])
                .then(function (answers) {
                var answerString = JSON.stringify(answers, null, '  ');
                console.log(answerString);
            });
        }
        if (answer.start == 'Load') {
        }
        if (answer.start == 'Exit') {
            console.log("Soup says bye!");
            return;
        }
        if (answer.start == 'Instructions') {
        }
    });
}
var App = /** @class */ (function () {
    function App() {
        this.Ocean = {};
        this.Orgs = {};
        this.Ocean = new ocean();
    }
    return App;
}());
splash();

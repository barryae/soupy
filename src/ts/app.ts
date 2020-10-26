const seed = require("../seed/seed.json")
const inquirer = require("inquirer")
const ocean = require("./ocean")
const sorter = require("./orgs/sorter")

function splash(){
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
      .then((answer: any) => {
        if(answer.start == 'New'){
            console.log("First you must create the ocean.")
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
            .then((answers: any) => {
                let answerString = JSON.stringify(answers, null, '  ');
                console.log(answerString)
            })
        }
        if(answer.start == 'Load'){
            
        }
        if(answer.start == 'Exit'){
            console.log("Soup says bye!")
            return
        }
        if(answer.start == 'Instructions'){
            
        }
      });
}




class App{
    Ocean = {}
    Orgs = {}

    constructor(){
        this.Ocean = new ocean()
    }
}


splash()


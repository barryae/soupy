module.exports = class Sorter{
    environment: typeof ocean
    directives: string[] = ["alphabetize"]
    currDirective: string
    record: any = {
        "born": null,
        "age": 0,
        "input": {},
        "output": {
            "alphabetize": [],
        },
        "died": "",
    }
    stomach: string[] = []
    capacity: number;

    constructor(environment: typeof ocean, directive: string, capacity: number){
        this.record.born = ocean.age
        this.capacity =  capacity
        this.environment = environment

        if(!this.directives.includes(directive)){
            console.log("Not a valid directive, default to alphabetize")
            this.currDirective = "alphabetize"
        }else{
            this.currDirective = directive
        }

    }

    live(){
        this.record.age++
        while(!(this.stomach.length>this.capacity)){
            let data: string = this.search()
            this.eat(data)
        }

        this.digest()
        this.output()
    }

    search(){
        let data: string = this.environment.Ocean[0][0]
        return data
    }

    eat(data: string){
        this.stomach.push(data)
    }

    digest(){
        if(this.currDirective=="alphabetize"){
            let sorted = this.stomach.sort()
            this.record.output[this.currDirective] = sorted
        }
    }

    output(){
        console.log(this.record)
    }
}
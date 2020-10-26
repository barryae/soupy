
module.exports = class Ocean {
    private size: [number, number]
    private seed: string[]
    private Ocean: any []
    private storage: string[] = []

    constructor(size:[number, number], seed:string[]){
        this.size = size
        this.seed = seed
        this.Ocean = this.create()
    }

    private create(){
        const width = this.size[0]
        const height = this.size[1]
        const fillingOcean = [] as any

        for(let i=0;i<width;i++){
            const newArr: string[] = []
            for(let i=0; i<height;i++){
                newArr.push("")
            }
            fillingOcean.push(newArr)
        }

        const seededOcean: any[] = this.addSeed(this.seed, fillingOcean)

        return seededOcean;
    }

    private addSeed(seed: string[], currOcean: any[]){
        const totalArea = this.size[0] * this.size[1]

        if(totalArea<seed.length){
            seed.splice(0,seed.length-totalArea).
            forEach(seed=>{this.storage.push(seed)})

            console.log("Too many seeds. They were added to storage.")
            console.log("Storage:" + this.storage)
        }

        const maxIterations = Math.ceil(seed.length/this.size[1])

        for(let i =0; i<maxIterations;i++){
            const oceanIndex = currOcean.length - 1 - i

            if(seed.length>this.size[1]){
                currOcean[oceanIndex] = seed.splice(seed.length-this.size[1])
            }else{
                currOcean[oceanIndex].splice(currOcean[oceanIndex].length - seed.length)
                currOcean[oceanIndex].push(seed)
                currOcean[oceanIndex]=currOcean[oceanIndex].flat()
            }
        }
        
        return currOcean;
    }

    feed(data: string[]){
        //add strings to ocean
    }

    print(){
        console.log(this.Ocean)
    }
} 
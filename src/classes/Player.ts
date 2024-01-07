import {isPlayer} from '../../output/interfaces/isPlayer.js'

export class Playerr implements isPlayer{
    constructor(
        public name : string,
        public age : number,
        private surname : string,
        readonly country : string,
    ){}

    getProperty(){
        return this.surname;
    }
    play(){
        console.log(`${this.name} who has ${this.surname} is playing from ${this.country} at age of ${this.age}`);
    }
}


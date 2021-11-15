export class Coche{
    constructor(
        public marca : string, 
        public modelo : string,
        public velocidad  : number,
        public velMaxima : number,
        public aceleracion : number,
        public estado : boolean
    ){}
}
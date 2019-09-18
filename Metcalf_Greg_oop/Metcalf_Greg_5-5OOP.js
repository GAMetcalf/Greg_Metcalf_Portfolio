//Guitar() has a constructor that creates the guitar using the brand, make, and description arguments
class Guitar{
  constructor(brand, description, model, strings){
    //Encapsulating the variables inside this method by keeping them private
    this._brand = brand;
    this._description = description;
    this._model = model;
    this._strings = strings;
  }
  //Outputs the newly created guitar
  guitarStyle(){
    console.log(`The type of guitar is a ${this._description} ${this._brand} ${this._model} with ${this._strings} strings.`);
  }
}

//Instantiation = NEW GUITAR! (object)
var c1Classic = new Guitar("Schecter", "blue flametop", "C1 Classic", 6);

//Subclass of, and inherits, from Guitar()
class BassGuitar extends Guitar{
  constructor(){
    super("Ernie Ball", "cherry", "Music Man bass", 4)
  }
}

//Call to run guitarStyle() to see what kind of guitar it is
c1Classic.guitarStyle();

//Another new (instantiated) guitar!
var musicManBass = new BassGuitar();
musicManBass.guitarStyle();

//Each of the following 7 function's purposes are to set up and adjust
//the notes for each respective mode of play
function SetIonianMode(userBaseNote){
  let modeNotes = [
    [0+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ];
  return modeNotes;
};
function SetDorianMode(userBaseNote){
  let modeNotes = [
    [2+userBaseNote, 4+userBaseNote, 5+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [2+userBaseNote, 4+userBaseNote, 5+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [1+userBaseNote, 2+userBaseNote, 4+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [2+userBaseNote, 4+userBaseNote, 6+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [2+userBaseNote, 4+userBaseNote, 5+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ];
  return modeNotes;
}
function SetPhrygianMode(userBaseNote){
  let modeNotes = [
    [4+userBaseNote, 5+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 5+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 6+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 6+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 6+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 5+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ];
  return modeNotes;
}
function SetLydianMode(userBaseNote){
  let modeNotes = [
    [4+userBaseNote, 5+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 5+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 6+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 6+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 6+userBaseNote, 7+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [4+userBaseNote, 5+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ];
  return modeNotes;
}
function SetMixolydianMode(userBaseNote){
  let modeNotes = [
    [7+userBaseNote, 9+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [7+userBaseNote, 9+userBaseNote, 10+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [6+userBaseNote, 8+userBaseNote, 9+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [6+userBaseNote, 7+userBaseNote, 9+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [6+userBaseNote, 7+userBaseNote, 9+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [7+userBaseNote, 9+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ];
  return modeNotes;
}
function SetAeolianMode(userBaseNote){
  let modeNotes = [
    [9+userBaseNote, 11+userBaseNote, 12+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [9+userBaseNote, 10+userBaseNote, 11+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [8+userBaseNote, 9+userBaseNote, 11+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [9+userBaseNote, 11+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [9+userBaseNote, 11+userBaseNote, 12+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [9+userBaseNote, 11+userBaseNote, 12+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ];
  return modeNotes;
}
function SetLocrianMode(userBaseNote){
  let modeNotes = [
    [11+userBaseNote, 12+userBaseNote, 14+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [12+userBaseNote, 14+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [11+userBaseNote, 13+userBaseNote, 14+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [11+userBaseNote, 13+userBaseNote, 14+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [11+userBaseNote, 12+userBaseNote, 14+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [11+userBaseNote, 12+userBaseNote, 14+userBaseNote, -1, -1, -1, -1, -1, -1, -1, -1, -1]
  ];
  return modeNotes;
}

//Get random note from the appropriate string and format it to take 2 spaces
function GetNote(stringIndex){
  //Store random note
  var note = modeNotes[stringIndex][(Math.random() * modeNotes.length) | 0];

  //This conditional adds a dash if the note is a single character
  //Else, if the note pulles is -1, then it's changed to '--'
  if (note.toString().length < 2){
    note = `${note}-`;
  } else if (note == -1){
    note = "--";
  }
  return note;
}

//Create a measure by calling GetNote()
function CreateMeasure(){
                          //Each call to GetNote() sends an index for each respective guitar string
                          //This ensures that the correct notes and retrieved and formatted for 2 character spaces
  var measure = (`e ||----${GetNote(0)}----${GetNote(0)}----${GetNote(0)}----${GetNote(0)}----${GetNote(0)}----${GetNote(0)}----${GetNote(0)}----${GetNote(0)}----\n` +
                 `B ||----${GetNote(1)}----${GetNote(1)}----${GetNote(1)}----${GetNote(1)}----${GetNote(1)}----${GetNote(1)}----${GetNote(1)}----${GetNote(1)}----\n` +
                 `G ||----${GetNote(2)}----${GetNote(2)}----${GetNote(2)}----${GetNote(2)}----${GetNote(2)}----${GetNote(2)}----${GetNote(2)}----${GetNote(2)}----\n` +
                 `D ||----${GetNote(3)}----${GetNote(3)}----${GetNote(3)}----${GetNote(3)}----${GetNote(3)}----${GetNote(3)}----${GetNote(3)}----${GetNote(3)}----\n` +
                 `A ||----${GetNote(4)}----${GetNote(4)}----${GetNote(4)}----${GetNote(4)}----${GetNote(4)}----${GetNote(4)}----${GetNote(4)}----${GetNote(4)}----\n` +
                 `E ||----${GetNote(5)}----${GetNote(5)}----${GetNote(5)}----${GetNote(5)}----${GetNote(5)}----${GetNote(5)}----${GetNote(5)}----${GetNote(5)}----\n`);

  return measure;
}

//Map is essintially like a dictionary in C# and I will be using it as such for comfortability and consistency
//But this is used for validation and to set the base note for all modes and positions to be adjusted to
var notesAndPositions = new Map([["e", 0], ["f", 1], ["f#", 2], ["gb", 2], ["g", 3], ["g#", 4], ["ab", 4], ["a", 5], ["a#", 6], ["bb", 6], ["b", 7], ["c", 8], ["c#", 9], ["db", 9], ["d", 10], ["d#", 11], ["eb", 11]]);

//Class tracking the baseNote in order to adjust the mode of play correctly
class Note{
  constructor (note){
    this._note = note;
  }
  //Returns _baseNote for each mode to adjust playing position
  getBaseNote(){
    return this._note;
  }
}

//Greet the user and explain program capabilities
alert("Hello!  Thank you for using the random tablature generator.\n\n" +
      "This program is only capable of using major keys for the time being.\n" +
      "With that in mind, once the key is designated and the desired amount\n" +
      "of measures is set, then the program will output the random notes within\n" +
      "the selected mode of the key.");

//Get the key to play in
var keyString = prompt("What key would you like to play in? (Ex. C# or Ab)");

keyString = keyString.toLowerCase();
//Validate for correct input and no null or white space
while (!notesAndPositions.has(keyString)){
  keyString = prompt("Please don't leave this blank and enter a valid key (Ex. E or Gb)");
}

//Store value from notesAndPositions to set the baseNote for the modes
var userBaseNote = notesAndPositions.get(keyString);
//var baseNote = new Note(userBaseNote);

//Prompt for mode to play in
var modeOfPlay = prompt("1. Ionian\n2. Dorian\n3. Phrygian\n4. Lydian\n5. Mixolydian\n6. Aeolian\n7. Locrian\n\nPlease select the number of the mode to play in.");

//Based on the chosen mode, obj modeNotes will have the adjusted
//positions of play stored for use
switch(modeOfPlay){
  case "1":
    {var modeNotes = SetIonianMode(userBaseNote);} break;
  case "2":
    {var modeNotes = SetDorianMode(userBaseNote);} break;
  case "3":
    {var modeNotes = SetPhrygianMode(userBaseNote);} break;
  case "4":
    {var modeNotes = SetLydianMode(userBaseNote);} break;
  case "5":
    {var modeNotes = SetMixolydianMode(userBaseNote);} break;
  case "6":
    {var modeNotes = SetAeolianMode(userBaseNote);} break;
  case "7":
    {var modeNotes = SetLydianMode(userBaseNote);} break;
  default:
    {alert("Invalid selection.\n\nPlease type the number next to the mode you want to play in and press enter.");}
}

//Get amount of measures to display for user
var userDesiredMeasures = prompt("Please enter how many measures you would like to generate? (1 - 50)");

//Validate for correct number
while (userDesiredMeasures < 1 || userDesiredMeasures > 50){
 userDesiredMeasures = prompt("Please enter how many measures you would like to generate? (1 - 50)");
}

//Timestamp for local storage
var timeStamp = new Date().getTime();

//Loop until desired amount of measures are met and print to the page
for(var i = 0; i < userDesiredMeasures; i++){
    console.log(CreateMeasure());
    localStorage.setItem(`Measure ${i} from ${timeStamp}:`, CreateMeasure());
}

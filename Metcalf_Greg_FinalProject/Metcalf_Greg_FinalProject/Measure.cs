using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    //A measure has notes and lengths; needs to inherit
    class Measure : Note
    {
        static int[][] _noteArrays;
        
        //Instantiate a variable for random selections
        static Random rand = new Random();

        //Creates a new instance of each mode, and fills the array with correct notes from each mode
        public int[][] PutNotesInArray(int modeSelection)
        {
            if (modeSelection == 1)
            {
                Ionian mode = new Ionian();
                _noteArrays = mode.FormatMode();
            }
            else if (modeSelection == 2)
            {
                Dorian mode = new Dorian();
                _noteArrays = mode.FormatMode();
            }
            else if (modeSelection == 3)
            {
                Phrygian mode = new Phrygian();
                _noteArrays = mode.FormatMode();
            }
            else if(modeSelection == 4)
            {
                Lydian mode = new Lydian();
                _noteArrays = mode.FormatMode();
            }
            else if(modeSelection == 5)
            {
                Mixolydian mode = new Mixolydian();
                _noteArrays = mode.FormatMode();
            }
            else if (modeSelection == 6)
            {
                Aeolian mode = new Aeolian();
                _noteArrays = mode.FormatMode();
            }
            else
            {
                Locrian mode = new Locrian();
                _noteArrays = mode.FormatMode();
            }
            
            return _noteArrays;
        }
   
        //This keeps each 'string' the same length.  If a single digit note is chosen, it will add a dash to it to keep spacing correct
        //When there is a 2 digit number, no dashes are needed, but if it's a -1, it will turn into a blank note '--'
        public string FormatNote(int firstIndex)
        {
            string nextNote = "";
            
            //Stores a randomly selected notte for the indicated string
            nextNote = _noteArrays[firstIndex][rand.Next(0,8)].ToString();

            if (nextNote == "-1")
            {
                nextNote = "--";
            }
            else if (nextNote.Length == 1)
            {
                nextNote = $"{nextNote}-";
            }
            
            return nextNote;
        }

        //Format the measure for display
        public string MeasureFormat()
        {
                                                        //Each call to FormatNote(int guitarString) will randomly pull a note from the jagged array, 
                                                        //convert it to string, format it appropriately and place it in the measure
            string tabDisplay = string.Format($"e ||----{FormatNote(0)}----{FormatNote(0)}----{FormatNote(0)}----{FormatNote(0)}----{FormatNote(0)}----{FormatNote(0)}----{FormatNote(0)}----{FormatNote(0)}----\n" +
                                              $"B ||----{FormatNote(1)}----{FormatNote(1)}----{FormatNote(1)}----{FormatNote(1)}----{FormatNote(1)}----{FormatNote(1)}----{FormatNote(1)}----{FormatNote(1)}----\n" +
                                              $"G ||----{FormatNote(2)}----{FormatNote(2)}----{FormatNote(2)}----{FormatNote(2)}----{FormatNote(2)}----{FormatNote(2)}----{FormatNote(2)}----{FormatNote(2)}----\n" +
                                              $"D ||----{FormatNote(3)}----{FormatNote(3)}----{FormatNote(3)}----{FormatNote(3)}----{FormatNote(3)}----{FormatNote(3)}----{FormatNote(3)}----{FormatNote(3)}----\n" +
                                              $"A ||----{FormatNote(4)}----{FormatNote(4)}----{FormatNote(4)}----{FormatNote(4)}----{FormatNote(4)}----{FormatNote(4)}----{FormatNote(4)}----{FormatNote(4)}----\n" +
                                              $"E ||----{FormatNote(5)}----{FormatNote(5)}----{FormatNote(5)}----{FormatNote(5)}----{FormatNote(5)}----{FormatNote(5)}----{FormatNote(5)}----{FormatNote(5)}----\n");

            return tabDisplay;
        }
    }
}

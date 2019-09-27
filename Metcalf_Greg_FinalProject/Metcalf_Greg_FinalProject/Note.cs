using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    class Note
    {
        //Used to adjust the mode positions as needed
        static int _basePosition;

        //Sends the base position to the modes so that they will be adjusted correctly for _noteArrays[][] in Measure()
        public int GetPosition
        {
            get { return _basePosition; }
        }
        
        //Use for validation in Program()
        //Also makes it easy to grab the fretboard position (value) and use it to 
        //adjust the different positions of notes respectively
        private Dictionary<string, int> _listOfKeys = new Dictionary<string, int>();

        public Dictionary<string, int> Keys()
        {
            _listOfKeys.Add("e", 0);
            _listOfKeys.Add("f", 1);
            _listOfKeys.Add("f#", 2);
            _listOfKeys.Add("gb", 2);
            _listOfKeys.Add("g", 3);
            _listOfKeys.Add("g#", 4);
            _listOfKeys.Add("ab", 4);
            _listOfKeys.Add("a", 5);
            _listOfKeys.Add("a#", 6);
            _listOfKeys.Add("bb", 6);
            _listOfKeys.Add("b", 7);
            _listOfKeys.Add("c", 8);
            _listOfKeys.Add("c#", 9);
            _listOfKeys.Add("db", 9);
            _listOfKeys.Add("d", 10);
            _listOfKeys.Add("d#", 11);
            _listOfKeys.Add("eb", 11);

            return _listOfKeys;
        }
        
        //Set base position to that the modes can be updated accordingly
        public int SetBasePosition(int key)
        {
            _basePosition = key;
            return _basePosition;
        }
    }
}

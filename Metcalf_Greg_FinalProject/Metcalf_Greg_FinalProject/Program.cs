using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Metcalf_Greg_FinalProject
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create a directory
            Program instance = new Program();
            instance.CreateDirectory();

            //Instantiated Measure() because we need access to it
            Measure measure = new Measure();
           
            //Greet and explain what the program can do
            Console.WriteLine("Hello!  Thank you for using the random tablature generator.\n\n" +
                              "This program is only capable of using major keys for the time being.\n" +
                              "With that in mind, once the key is designated and the desired amount\n" +
                              "of measures is set, then the program will output random notes within\n" +
                              "the selected mode of the key.\n");

            Console.Write("What key would you like to play in? (Ex. C# or Ab) ");
            string keyString = Console.ReadLine().ToLower();

            //Instantiate object for the list of keys to bring the dictionary of keys and positions for validation
            Note listOfKeys = new Note();
            Dictionary<string, int> list = listOfKeys.Keys();

            //Validate an appropriate key was chosen
            while (!list.ContainsKey(keyString))
            {
                Console.WriteLine("Please only enter a major key and do not leave this blank. (ex. Fb or C#) ");
                keyString = Console.ReadLine();
            }

            //Set base position
            list.TryGetValue(keyString, out int keyInt);
            listOfKeys.SetBasePosition(keyInt);
            
            //Get desired mode to play in
            Console.Write("\n1. Ionian\n" +
                          "2. Dorian\n" +
                          "3. Phrygian\n" +
                          "4. Lydian\n" +
                          "5. Mixolydian\n" +
                          "6. Aeolian\n" +
                          "7. Locrian\n\n");
            int modeSelection = Validations.GetIntRange(1, 7, "Please select the number of the mode to play in: ");

            //Get the notes set in the chosen mode
            measure.PutNotesInArray(modeSelection);

            //Get amount of measures
            int desiredMeasures = Validations.GetIntRange(1, 50, "How many measures do you want to play? (1 - 50): ");

            //Get desired output
            int selectWriter = Validations.GetIntRange(1, 2, "Would you like the tabs saved to a file, or read it in the console?\n\n" +
                          "1. File\n" +
                          "2. Console\n\n" +
                          "Enter a number: ");
            
            //Saves to external file
            if (selectWriter == 1)
            {
                TextFileTabWriter writer = new TextFileTabWriter();
                writer.Write(desiredMeasures);
            }
            //Displays in the console
            else
            {
                Console.Clear();
                ConsoleTabWriter writer = new ConsoleTabWriter();
                writer.Write(desiredMeasures);
            }

            //Yay music!
            Console.WriteLine("\nYAY!");
            Utility.PauseBeforeContinue();
        }

        //Create folder for tablature files
        private void CreateDirectory()
        {
            var dirName = "Output";

            //If directory does not exist, it will be created
            if (!Directory.Exists(dirName))
            {
                Directory.CreateDirectory(dirName);
            }
        }
    }
}

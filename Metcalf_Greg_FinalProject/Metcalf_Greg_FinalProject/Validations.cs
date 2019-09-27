using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    class Validations
    {
        //Int with range Validation
        public static int GetIntRange(int min, int max, string message = "")
        {
            int validatedInt;
            Console.Write(message);
            string input = Console.ReadLine();

            while (!Int32.TryParse(input, out validatedInt) || (validatedInt < min || validatedInt > max))
            {
                Console.Write($"\nPlease only enter a whole number within the required range: ({min} - {max}) ");
                input = Console.ReadLine();
            }
            return validatedInt;
        }
        
        //String Validation
        public static string StringValidation(string message = "")
        {
            Console.Write(message);
            string userInput = Console.ReadLine().ToLower();

            while (string.IsNullOrWhiteSpace(userInput))
            {
                Console.Write($"\nPlease do not leave this space blank.\n{message}");
                userInput = Console.ReadLine();
            }
            return userInput;           
        }
    }
}

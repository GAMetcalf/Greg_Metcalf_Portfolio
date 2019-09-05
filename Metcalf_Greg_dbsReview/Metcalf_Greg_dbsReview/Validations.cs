using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_dbsReview
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

        public static int IntValidation (string message = "")
        {
            int validatedInt;
            Console.Write(message);
            string input = Console.ReadLine();

            while (!Int32.TryParse(input, out validatedInt))
            {
                Console.Write($"\nPlease only enter whole numbers.{message}");
                input = Console.ReadLine();
            }
            return validatedInt;
        }

        public static float FloatValidation(string message = "")
        {
            float validatedFloat;
            Console.Write(message);
            string input = Console.ReadLine();

            while (!float.TryParse(input, out validatedFloat))
            {
                Console.Write($"\nPlease only enter numbers.{message}");
                input = Console.ReadLine();
            }
            return validatedFloat;
        }

        public static decimal DecValidation(string message = "")
        {
            decimal validatedDec;
            Console.Write(message);
            string input = Console.ReadLine();

            while (!decimal.TryParse(input, out validatedDec))
            {
                Console.Write($"\nPlease only enter numbers.{message}");
                input = Console.ReadLine();
            }
            return validatedDec;
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Metcalf_Greg_FinalProject
{
    class TextFileTabWriter : IWriteable
    {
        //Prints the desired amount of measures and saves them to a file
        public void Write(int measures)
        {
            //Need access to measure to grab the formatted display
            Measure measure = new Measure();
            
            //Creating a loop that will run until file is saved successfully
            bool success = false;
            while (!success)
            {
                //Get the file name and try to print / save the file
                try
                {
                    //Get file name for ID when saved
                    string fileName = Validations.StringValidation("Please name the file: ");

                    //Creates a stream that allows info to be written to the file
                    using (StreamWriter output = new StreamWriter(@"Output\" + fileName + "_" + DateTime.Now.ToString("yyyyMMddHHmmss") + ".txt"))
                    {
                        output.WriteLine($"File Name:  {fileName}\n\nDate:  {DateTime.Now}\n\n");

                        for (int i = 0; i < measures; i++)
                        {
                            output.WriteLine(measure.MeasureFormat());
                        }

                        output.WriteLine("\n\nI hope inspiration finds you within these notes!");
                    }
                    success = true;
                }
                //If file name is too long, then this
                catch(System.IO.PathTooLongException e)
                {
                    Console.WriteLine("File name is too long.  Please be more concise.");
                }
                //Else if there are illegal characters in the file name, then this 
                catch (System.ArgumentException e)
                {
                    Console.WriteLine("Something went wrong.  Please only use numbers and letters.");
                }
            }
            //Yay!!!
            Console.WriteLine("Tabs saved!");
        }
    }
}

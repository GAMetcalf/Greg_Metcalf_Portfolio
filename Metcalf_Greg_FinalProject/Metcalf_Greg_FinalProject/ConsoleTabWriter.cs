using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    class ConsoleTabWriter : IWriteable
    {
        //Displays the tablature inside the console
        public void Write(int measures)
        {
            Measure measure = new Measure();

            //Display all the measures
            for (int i = 0; i < measures; i++)
            {
                Console.WriteLine(measure.MeasureFormat());
            }

            //This program is fun to play with and I hope others find inspiration with it
            Console.WriteLine("I hope inspiration finds you within these notes!");
        }
    }
}

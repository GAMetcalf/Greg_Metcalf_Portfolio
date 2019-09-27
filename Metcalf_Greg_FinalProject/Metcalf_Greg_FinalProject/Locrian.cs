using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    class Locrian : Note
    {
        public int[][] FormatMode()
        {
            //Jagged Array setup
            int[][] ionianNotes =
            {
                //Adjust position of play and send the correct notes back to the array
                new int[] {11 + base.GetPosition, 12 + base.GetPosition, 14 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {12 + base.GetPosition, 14 + base.GetPosition, -1, -1, -1, -1, -1, -1, -1},
                new int[] {11 + base.GetPosition, 13 + base.GetPosition, 14 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {11 + base.GetPosition, 13 + base.GetPosition, 14 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {11 + base.GetPosition, 12 + base.GetPosition, 14 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {11 + base.GetPosition, 12 + base.GetPosition, 14 + base.GetPosition, -1, -1, -1, -1, -1, -1 }
            };
            return ionianNotes;
        }
    }
}

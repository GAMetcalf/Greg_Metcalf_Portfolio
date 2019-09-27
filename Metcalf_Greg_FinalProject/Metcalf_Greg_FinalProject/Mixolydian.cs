using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    class Mixolydian : Note
    {
        public int[][] FormatMode()
        {
            //Jagged Array setup
            int[][] ionianNotes =
            {
                //Adjust position of play and send the correct notes back to the array
                new int[] {7 + base.GetPosition, 9 + base.GetPosition, -1, -1, -1, -1, -1, -1, -1},
                new int[] {7 + base.GetPosition, 9 + base.GetPosition, 10 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {6 + base.GetPosition, 8 + base.GetPosition, 9 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {6 + base.GetPosition, 7 + base.GetPosition, 9 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {6 + base.GetPosition, 7 + base.GetPosition, 9 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {7 + base.GetPosition, 9 + base.GetPosition, -1, -1, -1, -1, -1, -1, -1}
            };
            return ionianNotes;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    class Lydian : Note
    {
        public int[][] FormatMode()
        {
            //Jagged Array setup
            int[][] ionianNotes =
            {
                //Adjust position of play and send the correct notes back to the array
                new int[] {4 + base.GetPosition, 5 + base.GetPosition, 7 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {4 + base.GetPosition, 5 + base.GetPosition, 7 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {4 + base.GetPosition, 6 + base.GetPosition, -1, -1, -1, -1, -1, -1, -1},
                new int[] {4 + base.GetPosition, 6 + base.GetPosition, 7 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {4 + base.GetPosition, 6 + base.GetPosition, 7 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {4 + base.GetPosition, 5 + base.GetPosition, -1, -1, -1, -1, -1, -1, -1 }
            };
            return ionianNotes;
        }
    }
}

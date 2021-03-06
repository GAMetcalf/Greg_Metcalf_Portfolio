﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    class Ionian : Note
    {
        public int[][] FormatMode()
        {
            //Jagged Array setup
            int[][] ionianNotes =
            {
                //Adjust position of play and send the correct notes back to the array
                new int[] {0 + base.GetPosition, 2 + base.GetPosition, 4 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {0 + base.GetPosition, 2 + base.GetPosition, 4 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {1 + base.GetPosition, 2 + base.GetPosition, 4 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {1 + base.GetPosition, 2 + base.GetPosition, 4 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {0 + base.GetPosition, 2 + base.GetPosition, 4 + base.GetPosition, -1, -1, -1, -1, -1, -1},
                new int[] {0 + base.GetPosition, 2 + base.GetPosition, 4 + base.GetPosition, -1, -1, -1, -1, -1, -1}
            };
            return ionianNotes;
        }
    }
}

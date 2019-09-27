using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metcalf_Greg_FinalProject
{
    interface IWriteable
    {
        //Guarantees that both writer classes will have a Write() function that takes in the amount of measures to create
        void Write(int measures);
    }
}

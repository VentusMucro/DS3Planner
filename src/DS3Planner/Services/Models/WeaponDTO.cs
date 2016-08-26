using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Services.Models
{
    public class WeaponDTO
    {
        public string Name { get; set; }
        public int Phys { get; set; }
        public int Magic { get; set; }
        public int Fire { get; set; }
        public int Lightning { get; set; }
        public int Dark { get; set; }
        public double Weight { get; set; }
    }
}

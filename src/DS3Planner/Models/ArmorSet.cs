using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Models
{
    public class ArmorSet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ArmorPiece Helm { get; set; }
        public ArmorPiece Chest { get; set; }
        public ArmorPiece Arms { get; set; }
        public ArmorPiece Legs { get; set; }
    }
}

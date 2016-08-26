using DS3Planner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Services.Models
{
    public class FullBuildDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Class { get; set; }

        public int Vigor { get; set; }
        public int Attunement { get; set; }
        public int Endurance { get; set; }
        public int Vitality { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Intelligence { get; set; }
        public int Faith { get; set; }
        public int Luck { get; set; }

        public string Helm { get; set; }
        public string Chest { get; set; }
        public string Arms { get; set; }
        public string Legs { get; set; }

        public string Ring1 { get; set; }
        public string Ring2 { get; set; }
        public string Ring3 { get; set; }
        public string Ring4 { get; set; }

        public string WeaponsL1 { get; set; }
        public string WeaponsL2 { get; set; }
        public string WeaponsL3 { get; set; }

        public string WeaponsR1 { get; set; }
        public string WeaponsR2 { get; set; }
        public string WeaponsR3 { get; set; }
    }
}

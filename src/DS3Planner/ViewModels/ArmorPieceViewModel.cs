using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.ViewModels
{
    public class ArmorPieceViewModel
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public decimal PhysDef { get; set; }
        public decimal PhysAbsorb { get; set; }
        public decimal SlashDef { get; set; }
        public decimal SlashAbsorb { get; set; }
        public decimal StrikeDef { get; set; }
        public decimal StrikeAbsorb { get; set; }
        public decimal ThrustDef { get; set; }
        public decimal ThrustAbsrob { get; set; }
        public decimal MagicDef { get; set; }
        public decimal MagicAbsorb { get; set; }
        public decimal FireDef { get; set; }
        public decimal FireAbsorb { get; set; }
        public decimal LightningDef { get; set; }
        public decimal LightningAbsorb { get; set; }
        public decimal DarkDef { get; set; }
        public decimal DarkAbsorb { get; set; }
        public decimal BleedRes { get; set; }
        public decimal PoisonRes { get; set; }
        public decimal FrostRes { get; set; }
        public decimal CurseRes { get; set; }

        public decimal Weight { get; set; }
        public decimal Poise { get; set; }
    }
}

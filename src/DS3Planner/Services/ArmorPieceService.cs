using DS3Planner.Infrastructure;
using DS3Planner.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Services
{
    public class ArmorPieceService
    {
        private ArmorPieceRepository _apRepo;

        public ArmorPieceService(ArmorPieceRepository apr)
        {
            _apRepo = apr;
        }

        public IList<ArmorPieceDTO> GetHelms()
        {
            return (from ap in _apRepo.GetHelms()
                    select new ArmorPieceDTO()
                    {
                        Name = ap.Name,
                        PhysDef = ap.PhysDef,
                        PhysAbsorb = ap.PhysAbsorb,
                        SlashDef = ap.SlashDef,
                        SlashAbsorb = ap.SlashAbsorb,
                        StrikeDef = ap.StrikeDef,
                        StrikeAbsorb = ap.StrikeAbsorb,
                        ThrustDef = ap.ThrustDef,
                        ThrustAbsorb = ap.ThrustAbsorb,
                        MagicDef = ap.MagicDef,
                        MagicAbsorb = ap.MagicAbsorb,
                        FireDef = ap.FireDef,
                        FireAbsorb = ap.FireAbsorb,
                        LightningDef = ap.LightningDef,
                        LightningAbsorb = ap.LightningAbsorb,
                        DarkDef = ap.DarkDef,
                        DarkAbsorb = ap.DarkAbsorb,
                        BleedRes = ap.BleedRes,
                        PoisonRes = ap.PoisonRes,
                        FrostRes = ap.FrostRes,
                        CurseRes = ap.CurseRes,
                        Weight = ap.Weight,
                        Poise = ap.Poise
                    }).ToList();
        }

        public IList<ArmorPieceDTO> GetChests()
        {
            return (from ap in _apRepo.GetChests()
                    select new ArmorPieceDTO()
                    {
                        Name = ap.Name,
                        PhysDef = ap.PhysDef,
                        PhysAbsorb = ap.PhysAbsorb,
                        SlashDef = ap.SlashDef,
                        SlashAbsorb = ap.SlashAbsorb,
                        StrikeDef = ap.StrikeDef,
                        StrikeAbsorb = ap.StrikeAbsorb,
                        ThrustDef = ap.ThrustDef,
                        ThrustAbsorb = ap.ThrustAbsorb,
                        MagicDef = ap.MagicDef,
                        MagicAbsorb = ap.MagicAbsorb,
                        FireDef = ap.FireDef,
                        FireAbsorb = ap.FireAbsorb,
                        LightningDef = ap.LightningDef,
                        LightningAbsorb = ap.LightningAbsorb,
                        DarkDef = ap.DarkDef,
                        DarkAbsorb = ap.DarkAbsorb,
                        BleedRes = ap.BleedRes,
                        PoisonRes = ap.PoisonRes,
                        FrostRes = ap.FrostRes,
                        CurseRes = ap.CurseRes,
                        Weight = ap.Weight,
                        Poise = ap.Poise
                    }).ToList();
        }

        public IList<ArmorPieceDTO> GetArms()
        {
            return (from ap in _apRepo.GetArms()
                    select new ArmorPieceDTO()
                    {
                        Name = ap.Name,
                        PhysDef = ap.PhysDef,
                        PhysAbsorb = ap.PhysAbsorb,
                        SlashDef = ap.SlashDef,
                        SlashAbsorb = ap.SlashAbsorb,
                        StrikeDef = ap.StrikeDef,
                        StrikeAbsorb = ap.StrikeAbsorb,
                        ThrustDef = ap.ThrustDef,
                        ThrustAbsorb = ap.ThrustAbsorb,
                        MagicDef = ap.MagicDef,
                        MagicAbsorb = ap.MagicAbsorb,
                        FireDef = ap.FireDef,
                        FireAbsorb = ap.FireAbsorb,
                        LightningDef = ap.LightningDef,
                        LightningAbsorb = ap.LightningAbsorb,
                        DarkDef = ap.DarkDef,
                        DarkAbsorb = ap.DarkAbsorb,
                        BleedRes = ap.BleedRes,
                        PoisonRes = ap.PoisonRes,
                        FrostRes = ap.FrostRes,
                        CurseRes = ap.CurseRes,
                        Weight = ap.Weight,
                        Poise = ap.Poise
                    }).ToList();
        }

        public IList<ArmorPieceDTO> GetLegs()
        {
            return (from ap in _apRepo.GetLegs()
                    select new ArmorPieceDTO()
                    {
                        Name = ap.Name,
                        PhysDef = ap.PhysDef,
                        PhysAbsorb = ap.PhysAbsorb,
                        SlashDef = ap.SlashDef,
                        SlashAbsorb = ap.SlashAbsorb,
                        StrikeDef = ap.StrikeDef,
                        StrikeAbsorb = ap.StrikeAbsorb,
                        ThrustDef = ap.ThrustDef,
                        ThrustAbsorb = ap.ThrustAbsorb,
                        MagicDef = ap.MagicDef,
                        MagicAbsorb = ap.MagicAbsorb,
                        FireDef = ap.FireDef,
                        FireAbsorb = ap.FireAbsorb,
                        LightningDef = ap.LightningDef,
                        LightningAbsorb = ap.LightningAbsorb,
                        DarkDef = ap.DarkDef,
                        DarkAbsorb = ap.DarkAbsorb,
                        BleedRes = ap.BleedRes,
                        PoisonRes = ap.PoisonRes,
                        FrostRes = ap.FrostRes,
                        CurseRes = ap.CurseRes,
                        Weight = ap.Weight,
                        Poise = ap.Poise
                    }).ToList();
        }
    }
}

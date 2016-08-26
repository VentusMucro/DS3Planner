using DS3Planner.Infrastructure;
using DS3Planner.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Services
{
    public class FullBuildService
    {
        private FullBuildRepository _fbRepo;

        public FullBuildService(FullBuildRepository fbr)
        {
            _fbRepo = fbr;
        }

        public IList<FullBuildDTO> GetBuilds()
        {
            return (from fb in _fbRepo.GetBuilds()
                    select new FullBuildDTO()
                    {
                        Name = fb.Name,
                        Vigor = fb.Vigor,
                        Attunement = fb.Attunement,
                        Endurance = fb.Endurance,
                        Vitality = fb.Vitality,
                        Strength = fb.Strength,
                        Dexterity = fb.Dexterity,
                        Intelligence = fb.Intelligence,
                        Faith = fb.Faith,
                        Luck = fb.Luck,
                        Ring1 = fb.Ring1,
                        Ring2 = fb.Ring2,
                        Ring3 = fb.Ring3,
                        Ring4 = fb.Ring4,
                        Helm = fb.Helm,
                        Chest = fb.Chest,
                        Arms = fb.Arms,
                        Legs = fb.Legs,
                        WeaponsL1 = fb.WeaponsL1,
                        WeaponsL2 = fb.WeaponsL2,
                        WeaponsL3 = fb.WeaponsL3,
                        WeaponsR1 = fb.WeaponsR1,
                        WeaponsR2 = fb.WeaponsR2,
                        WeaponsR3 = fb.WeaponsR3
                    }).ToList();
        }

        public IList<FullBuildDTO> GetBuildsByUser(string uId)
        {
            return (from fb in _fbRepo.GetBuildsByUser(uId)
                    select new FullBuildDTO()
                    {
                        Id = fb.Id,
                        Name = fb.Name,
                        Class = fb.Class,
                        Vigor = fb.Vigor,
                        Attunement = fb.Attunement,
                        Endurance = fb.Endurance,
                        Vitality = fb.Vitality,
                        Strength = fb.Strength,
                        Dexterity = fb.Dexterity,
                        Intelligence = fb.Intelligence,
                        Faith = fb.Faith,
                        Luck = fb.Luck,
                        Ring1 = fb.Ring1,
                        Ring2 = fb.Ring2,
                        Ring3 = fb.Ring3,
                        Ring4 = fb.Ring4,
                        Helm = fb.Helm,
                        Chest = fb.Chest,
                        Arms = fb.Arms,
                        Legs = fb.Legs,
                        WeaponsL1 = fb.WeaponsL1,
                        WeaponsL2 = fb.WeaponsL2,
                        WeaponsL3 = fb.WeaponsL3,
                        WeaponsR1 = fb.WeaponsR1,
                        WeaponsR2 = fb.WeaponsR2,
                        WeaponsR3 = fb.WeaponsR3
                    }).ToList();
        }

        public FullBuildDTO GetBuildById(int id)
        {
            return (from fb in _fbRepo.GetBuildById(id)
                    select new FullBuildDTO()
                    {
                        Name = fb.Name,
                        Class = fb.Class,
                        Vigor = fb.Vigor,
                        Attunement = fb.Attunement,
                        Endurance = fb.Endurance,
                        Vitality = fb.Vitality,
                        Strength = fb.Strength,
                        Dexterity = fb.Dexterity,
                        Intelligence = fb.Intelligence,
                        Faith = fb.Faith,
                        Luck = fb.Luck,
                        Ring1 = fb.Ring1,
                        Ring2 = fb.Ring2,
                        Ring3 = fb.Ring3,
                        Ring4 = fb.Ring4,
                        Helm = fb.Helm,
                        Chest = fb.Chest,
                        Arms = fb.Arms,
                        Legs = fb.Legs,
                        WeaponsL1 = fb.WeaponsL1,
                        WeaponsL2 = fb.WeaponsL2,
                        WeaponsL3 = fb.WeaponsL3,
                        WeaponsR1 = fb.WeaponsR1,
                        WeaponsR2 = fb.WeaponsR2,
                        WeaponsR3 = fb.WeaponsR3
                    }).FirstOrDefault();
        }

        public int GetBuildId(string buildName)
        {
            return (from i in _fbRepo.GetBuildId(buildName)
                    select i).FirstOrDefault();
        }
    }
}

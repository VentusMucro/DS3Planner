using DS3Planner.Infrastructure;
using DS3Planner.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Services
{
    public class WeaponService
    {
        private WeaponRepository _wepRepo;

        public WeaponService(WeaponRepository wr)
        {
            _wepRepo = wr;
        }

        public IList<WeaponDTO> GetWeapons()
        {
            return (from w in _wepRepo.GetWeapons()
                    select new WeaponDTO()
                    {
                        Name = w.Name,
                        Phys = w.Phys,
                        Magic = w.Magic,
                        Fire = w.Fire,
                        Lightning = w.Lightning,
                        Dark = w.Dark,
                        Weight = w.Weight
                    }).ToList();
        }
    }
}

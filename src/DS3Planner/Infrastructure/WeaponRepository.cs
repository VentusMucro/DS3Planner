using DS3Planner.Data;
using DS3Planner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Infrastructure
{
    public class WeaponRepository
    {
        private ApplicationDbContext _db;

        public WeaponRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IQueryable<Weapon> GetWeapons()
        {
            return from w in _db.Weapons
                   select w;
        }
    }
}

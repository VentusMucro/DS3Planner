using DS3Planner.Data;
using DS3Planner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Infrastructure
{
    public class RingRepository
    {
        private ApplicationDbContext _db;

        public RingRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IQueryable<Ring> GetRings()
        {
            return from r in _db.Rings
                   select r;
        }
    }
}

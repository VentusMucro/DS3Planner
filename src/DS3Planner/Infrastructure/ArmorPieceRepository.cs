using DS3Planner.Data;
using DS3Planner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Infrastructure
{
    public class ArmorPieceRepository
    {
        private ApplicationDbContext _db;

        public ArmorPieceRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IQueryable<ArmorPiece> GetHelms()
        {
            return from ap in _db.Armors
                   where ap.Type == "Helm"
                   select ap;
        }

        public IQueryable<ArmorPiece> GetChests()
        {
            return from ap in _db.Armors
                   where ap.Type == "Chest"
                   select ap;
        }

        public IQueryable<ArmorPiece> GetArms()
        {
            return from ap in _db.Armors
                   where ap.Type == "Arms"
                   select ap;
        }

        public IQueryable<ArmorPiece> GetLegs()
        {
            return from ap in _db.Armors
                   where ap.Type == "Legs"
                   select ap;
        }
    }
}

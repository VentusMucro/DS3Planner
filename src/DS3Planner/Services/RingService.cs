using DS3Planner.Infrastructure;
using DS3Planner.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Services
{
    public class RingService
    {
        private RingRepository _ringRepo;

        public RingService(RingRepository rr)
        {
            _ringRepo = rr;
        }

        public IList<RingDTO> GetRings()
        {
            return (from r in _ringRepo.GetRings()
                    select new RingDTO()
                    {
                        Name = r.Name,
                        Effect = r.Effect,
                        Weight = r.Weight
                    }).ToList();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DS3Planner.Services;
using DS3Planner.Services.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DS3Planner.Controllers
{
    [Route("api/[controller]")]
    public class RingController : Controller
    {
        private RingService _ringServ;

        public RingController(RingService rs)
        {
            _ringServ = rs;
        }

        // api/ring
        [HttpGet]
        public IList<RingDTO> GetRings()
        {
            return _ringServ.GetRings();
        }
    }
}

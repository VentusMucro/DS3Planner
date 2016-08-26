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
    // api/armor
    [Route("api/[controller]")]
    public class ArmorController : Controller
    {
        private ArmorPieceService _apServ;

        public ArmorController(ArmorPieceService aps)
        {
            _apServ = aps;
        }

        // api/armor/helms
        [HttpGet("helms")]
        public IList<ArmorPieceDTO> GetHelms()
        {
            return _apServ.GetHelms();
        }

        // api/armor/chests
        [HttpGet("chests")]
        public IList<ArmorPieceDTO> GetChests()
        {
            return _apServ.GetChests();
        }

        // api/armor/arms
        [HttpGet("arms")]
        public IList<ArmorPieceDTO> GetArms()
        {
            return _apServ.GetArms();
        }

        // api/armor/legs
        [HttpGet("legs")]
        public IList<ArmorPieceDTO> GetLegs()
        {
            return _apServ.GetLegs();
        }
    }
}

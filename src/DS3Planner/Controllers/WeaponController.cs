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
    public class WeaponController : Controller
    {
        private WeaponService _wepServ;

        public WeaponController(WeaponService ws)
        {
            _wepServ = ws;
        }

        // api/weapon
        [HttpGet]
        public IList<WeaponDTO> GetWeapons()
        {
            return _wepServ.GetWeapons();
        }
    }
}

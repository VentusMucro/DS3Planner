using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DS3Planner.Services;
using DS3Planner.Services.Models;
using DS3Planner.Models;
using DS3Planner.Infrastructure;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DS3Planner.Controllers
{
    [Route("api/[controller]")]
    public class FullBuildController : Controller
    {
        private FullBuildService _fbServ;
        private FullBuildRepository _fbRepo;
        private UserRepository _uRepo;

        public FullBuildController(FullBuildService fbs, FullBuildRepository fbr, UserRepository ur)
        {
            _fbServ = fbs;
            _fbRepo = fbr;
            _uRepo = ur;
        }

        // api/fullbuild
        [HttpGet]
        public IList<FullBuildDTO> GetBuilds()
        {
            return _fbServ.GetBuilds();
        }

        // api/fullbuild/user
        [HttpGet("user")]
        public IList<FullBuildDTO> GetBuildsByUser()
        {
            return _fbServ.GetBuildsByUser(_uRepo.GetUserId(User.Identity.Name));
        }

        // api/fullbuild/{id}
        [HttpGet("{id}")]
        public FullBuildDTO GetBuildById(int id)
        {
            return _fbServ.GetBuildById(id);
        }

        // api/fullbuild/{buildName}
        //[HttpGet("{buildName}")]
        //public int GetBuildId(string buildName)
        //{
        //    return _fbServ.GetBuildId(buildName);
        //}

        // api/fullbuild
        [HttpPost]
        public IActionResult PostBuild([FromBody]FullBuildDTO build)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            FullBuild dbBuild = new FullBuild()
            {
                UserId = _uRepo.GetUserId(User.Identity.Name),
                Name = build.Name,
                Class = build.Class,
                Vigor = build.Vigor,
                Attunement = build.Attunement,
                Endurance = build.Endurance,
                Vitality = build.Vitality,
                Strength = build.Strength,
                Dexterity = build.Dexterity,
                Intelligence = build.Intelligence,
                Faith = build.Faith,
                Luck = build.Luck,
                Ring1 = build.Ring1,
                Ring2 = build.Ring2,
                Ring3 = build.Ring3,
                Ring4 = build.Ring4,
                Helm = build.Helm,
                Chest = build.Chest,
                Arms = build.Arms,
                Legs = build.Legs,
                WeaponsL1 = build.WeaponsL1,
                WeaponsL2 = build.WeaponsL2,
                WeaponsL3 = build.WeaponsL3,
                WeaponsR1 = build.WeaponsR1,
                WeaponsR2 = build.WeaponsR2,
                WeaponsR3 = build.WeaponsR3
            };

            _fbRepo.Add(dbBuild);

            return Ok();
        }
    }
}

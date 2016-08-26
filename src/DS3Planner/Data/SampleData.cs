using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Threading.Tasks;
using DS3Planner.Models;
using CsvHelper;
using System.IO;
using DS3Planner.Services.Models;

namespace DS3Planner.Data
{
    public class SampleData
    {
        public async static Task Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<ApplicationDbContext>();
            var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();

            // Ensure db
            context.Database.EnsureCreated();

            // Ensure Stephen (IsAdmin)
            var stephen = await userManager.FindByNameAsync("Stephen.Walther@CoderCamps.com");
            if (stephen == null)
            {
                // create user
                stephen = new ApplicationUser
                {
                    UserName = "Stephen.Walther@CoderCamps.com",
                    Email = "Stephen.Walther@CoderCamps.com"
                };
                await userManager.CreateAsync(stephen, "Secret123!");

                // add claims
                //await userManager.AddClaimAsync(stephen, new Claim("IsAdmin", "true"));
            }

            // Ensure Mike (not IsAdmin)
            var mike = await userManager.FindByNameAsync("Mike@CoderCamps.com");
            if (mike == null)
            {
                // create user
                mike = new ApplicationUser
                {
                    UserName = "Mike@CoderCamps.com",
                    Email = "Mike@CoderCamps.com"
                };
                await userManager.CreateAsync(mike, "Secret123!");
            }

            var admin = await userManager.FindByNameAsync("wolfking19@aol.com");
            if (admin == null)
            {
                // create user
                admin = new ApplicationUser
                {
                    UserName = "wolfking19@aol.com",
                    Email = "wolfking19@aol.com"
                };
                await userManager.CreateAsync(admin, "Lolu!va2329");

                // add claims
                await userManager.AddClaimAsync(admin, new Claim("IsAdmin", "true"));
            }

            TextReader reader = File.OpenText("DarkSouls3Weapons.csv");
            var csv = new CsvReader(reader);
            csv.Configuration.WillThrowOnMissingField = false;
            var records = csv.GetRecords<Weapon>().ToList();

            if (!context.Weapons.Any())
            {
                context.Weapons.AddRange(records);
                context.SaveChanges();
            }

            TextReader aReader = File.OpenText("DarkSouls3Armors.csv");
            var aCsv = new CsvReader(aReader);
            aCsv.Configuration.WillThrowOnMissingField = false;
            var aRecords = aCsv.GetRecords<ArmorPiece>().ToList();

            if (!context.Armors.Any())
            {
                context.Armors.AddRange(aRecords);
                context.SaveChanges();
            }

            TextReader rReader = File.OpenText("DarkSouls3Rings.csv");
            var rCsv = new CsvReader(rReader);
            rCsv.Configuration.WillThrowOnMissingField = false;
            var rRecords = rCsv.GetRecords<Ring>().ToList();

            if (!context.Rings.Any())
            {
                context.Rings.AddRange(rRecords);
                context.SaveChanges();
            }

            //if (!context.Weapons.Any())
            //{
            //    context.Weapons.AddRange(
            //        new Weapon()
            //        {
            //            Name = "Longsword",
            //            Phys = 220,
            //            Magic = 0,
            //            Fire = 0,
            //            Lightning = 0,
            //            Dark = 0,
            //            Weight = 3m
            //        });
            //    context.SaveChanges();
            //}

        }

    }
}

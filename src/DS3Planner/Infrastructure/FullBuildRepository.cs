using DS3Planner.Data;
using DS3Planner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Infrastructure
{
    public class FullBuildRepository
    {
        private ApplicationDbContext _db;

        public FullBuildRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IQueryable<FullBuild> GetBuilds()
        {
            return from fb in _db.Builds
                   select fb;
        }

        public IQueryable<FullBuild> GetBuildsByUser(string uId)
        {
            return from fb in _db.Builds
                   where fb.UserId == uId
                   select fb;
        }

        public IQueryable<FullBuild> GetBuildById(int id)
        {
            return from fb in _db.Builds
                   where fb.Id == id
                   select fb;
        }

        public IQueryable<int> GetBuildId(string buildName)
        {
            return from fb in _db.Builds
                   where fb.Name == buildName
                   select fb.Id;
        }

        public void Add(FullBuild build)
        {
            _db.Builds.Add(build);
            _db.SaveChanges();
        }
    }
}

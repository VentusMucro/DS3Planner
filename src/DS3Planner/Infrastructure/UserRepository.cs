﻿using DS3Planner.Data;
using DS3Planner.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DS3Planner.Infrastructure
{
    public class UserRepository
    {
        private ApplicationDbContext _db;

        public UserRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public string GetUserId(string username)
        {
            string uId = (from u in _db.Users
                          where u.UserName == username
                          select u.Id).First();

            return uId;
        }
    }
}

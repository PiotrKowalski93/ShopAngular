using ShopService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ShopService.Controllers
{
    public class UsersController : ApiController
    {
        [HttpGet]
        public List<Users> GetUsers()
        {
            List<Users> users;

            using (ShopEntities context = new ShopEntities())
            {
                users = context.Users.ToList();
            }

            return users;
        }

        [HttpPost]
        public IHttpActionResult RegisterUser(Users user)
        {
            if (user != null)
            {
                using (ShopEntities context = new ShopEntities())
                {
                    context.Users.Add(user);
                    context.SaveChanges();
                }

                return Ok(); 
            }
            else
            {
                return BadRequest();
            }
        }
    }
}

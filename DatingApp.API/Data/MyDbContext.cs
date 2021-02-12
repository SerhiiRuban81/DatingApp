using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options){

        }

        public DbSet<CartItem> Items { get; set; }
        public DbSet<User> Users { get; set; }
        
        
         
    }
}
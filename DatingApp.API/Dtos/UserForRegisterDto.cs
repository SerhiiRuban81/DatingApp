using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(12, MinimumLength =4, ErrorMessage= "Длина пароля должна быть от 4 до 12 символов!")]
        public string Password { get; set; }  
        
    }
}
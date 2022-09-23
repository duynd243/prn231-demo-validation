using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public partial class Account
    {
        public int AccountId { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;
        [MaxLength(4)]
        public string Fullname { get; set; } = null!;
        public string Country { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}

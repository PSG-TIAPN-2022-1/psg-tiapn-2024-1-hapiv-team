﻿using Asp.Versioning;
using HapivAPI.Domain;
using HapivAPI.Domain.Context;
using HapivAPI.Interfaces.Repositorys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v.{version:apiVersion}/[controller]")]
    [ApiController]
    public class GastosFixosController : Controller
    {
        private readonly AppDbContext _context;
        private readonly ICategoriaRepository _catRepo;

        public GastosFixosController(AppDbContext context, ICategoriaRepository catRepo)
        {
            _context = context;
            _catRepo = catRepo;
        }
    }
}

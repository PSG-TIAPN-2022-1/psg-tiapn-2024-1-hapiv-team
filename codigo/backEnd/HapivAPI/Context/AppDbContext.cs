using HapivAPI.Domain;
using HapivAPI.Domain.Relacionamentos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HapivAPI.Context
{
    public class AppDbContext : DbContext
    {
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Gerente> Gerentes { get; set; }
        public DbSet<Venda> Vendas { get; set; }
        public DbSet<Fornecedor> Fornecedores { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                foreach (var property in entityType.GetProperties())
                {
                    if (property.ClrType == typeof(Guid))
                    {
                        property.SetValueConverter(new ValueConverter<Guid, string>(
                            v => v.ToString(),
                            v => Guid.Parse(v)));
                    }
                }
                modelBuilder.Entity<VendaProduto>()
                .HasKey(vp => new { vp.VendaId, vp.ProdutoId });

                modelBuilder.Entity<VendaProduto>()
                    .HasOne(vp => vp.Venda)
                    .WithMany(v => v.VendaProdutos)
                    .HasForeignKey(vp => vp.VendaId);

                modelBuilder.Entity<VendaProduto>()
                    .HasOne(vp => vp.Produto)
                    .WithMany(p => p.VendaProdutos)
                    .HasForeignKey(vp => vp.ProdutoId);
            }
        }
        
    }
}

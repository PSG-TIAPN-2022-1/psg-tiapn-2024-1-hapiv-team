
using HapivAPI.Context;
using HapivAPI.Domain.Repositorys;
using HapivAPI.Interfaces;

namespace HapivAPI.Services
{
    public class UnitOfWork : IUnitOfWork
    {
        private AppDbContext _context;
        private IProdutoRepository _prodRepo;
        private ICategoriaRepository _catRepo;
        private IGerenteRepository _gerenteRepo;
        private IFornecedorRepository _fornRepo;
        private IGastoFixoRepository _gastoFixoRepo;
        private IVendaRepository _vendaRepo;

        public UnitOfWork(
            AppDbContext context,
            IProdutoRepository produto,
            ICategoriaRepository categoria,
            IGerenteRepository gerente,
            IFornecedorRepository fornecedor,
            IGastoFixoRepository gastoFixoRepo,
            IVendaRepository venda)
        {
            _context = context;
            _prodRepo = produto;
            _catRepo = categoria;
            _gerenteRepo = gerente;
            _fornRepo = fornecedor;
            _gastoFixoRepo = gastoFixoRepo;
            _vendaRepo = venda;
        }

        public ICategoriaRepository CategoriaRepository
        {
            get 
            { 
                return _catRepo ?? new CategoriaRepository(_context); 
            }
        }

        public IProdutoRepository ProdutoRepository
        {
            get
            {
                return _prodRepo ?? new ProdutoRepository(_context);
            }
        }

        public IGerenteRepository GerenteRepository
        {
            get
            {
                return _gerenteRepo ?? new GerenteRepository(_context);
            }
        }

        public IFornecedorRepository FornecedorRepository
        {
            get
            {
                return _fornRepo ?? new FornecedorRepository(_context);
            }
        }

        public IGastoFixoRepository GastoFixoRepository
        {
            get
            {
                return _gastoFixoRepo ?? new GastoFixoRepository(_context);
            }
        }

        public IVendaRepository VendaRepository
        {
            get
            {
                return _vendaRepo ?? new VendaRepository(_context);
            }
        }

        public void Commit()
        {
            _context.SaveChanges();
        }
    }
}

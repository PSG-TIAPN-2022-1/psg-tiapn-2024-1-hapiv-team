using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HapivAPI.Domain.Relacionamentos
{
    [Table("VendaProduto")]
    public class VendaProduto
    {
        [Key, Column(Order = 0)]
        public Guid VendaId { get; set; }

        [ForeignKey("VendaId")]
        public virtual Venda? Venda { get; set; }

        [Key, Column(Order = 1)]
        public Guid ProdutoId { get; set; }

        [ForeignKey("ProdutoId")]
        public Produto? Produto { get; set; }

        [Required]
        public int Quantidade { get; set; }

        public VendaProduto(Guid vendaId, Venda? venda, Guid produtoId, Produto? produto, int quantidade)
        {
            VendaId = vendaId;
            Venda = venda;
            ProdutoId = produtoId;
            Produto = produto;
            Quantidade = quantidade;
        }

        public VendaProduto()
        {

        }
    }
}

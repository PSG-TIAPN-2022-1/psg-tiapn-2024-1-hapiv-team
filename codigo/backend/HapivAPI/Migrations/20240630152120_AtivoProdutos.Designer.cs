﻿// <auto-generated />
using System;
using HapivAPI.Domain.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace HapivAPI.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240630152120_AtivoProdutos")]
    partial class AtivoProdutos
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("HapivAPI.Domain.Categoria", b =>
                {
                    b.Property<string>("CategoriaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("TipoCategoria")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("varchar(45)");

                    b.HasKey("CategoriaId");

                    b.ToTable("Categorias");
                });

            modelBuilder.Entity("HapivAPI.Domain.Fornecedor", b =>
                {
                    b.Property<string>("FornecedorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(45)
                        .HasColumnType("varchar(45)");

                    b.HasKey("FornecedorId");

                    b.ToTable("Fornecedores");
                });

            modelBuilder.Entity("HapivAPI.Domain.GastoFixo", b =>
                {
                    b.Property<string>("GastoFixoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("varchar(255)");

                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<decimal>("Gasto")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("GerenteId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.HasKey("GastoFixoId");

                    b.HasIndex("GerenteId");

                    b.ToTable("GastoFixo");
                });

            modelBuilder.Entity("HapivAPI.Domain.Gerente", b =>
                {
                    b.Property<string>("GerenteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.HasKey("GerenteId");

                    b.ToTable("Gerentes");
                });

            modelBuilder.Entity("HapivAPI.Domain.Produto", b =>
                {
                    b.Property<string>("ProdutoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("varchar(255)");

                    b.Property<bool>("Ativo")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("CategoriaId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<DateTime>("DataEntrada")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("FornecedorId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("GerenteId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.Property<decimal>("PrecoDeCompra")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("PrecoDeVenda")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("Quantidade")
                        .HasColumnType("int");

                    b.HasKey("ProdutoId");

                    b.HasIndex("CategoriaId");

                    b.HasIndex("FornecedorId");

                    b.HasIndex("GerenteId");

                    b.ToTable("Produtos");
                });

            modelBuilder.Entity("HapivAPI.Domain.Relacionamentos.VendaProduto", b =>
                {
                    b.Property<string>("VendaId")
                        .HasColumnType("varchar(255)")
                        .HasColumnOrder(0);

                    b.Property<string>("ProdutoId")
                        .HasColumnType("varchar(255)")
                        .HasColumnOrder(1);

                    b.Property<int>("Quantidade")
                        .HasColumnType("int");

                    b.HasKey("VendaId", "ProdutoId");

                    b.HasIndex("ProdutoId");

                    b.ToTable("VendaProduto");
                });

            modelBuilder.Entity("HapivAPI.Domain.Venda", b =>
                {
                    b.Property<string>("VendaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("varchar(255)");

                    b.Property<DateTime>("DataDeVenda")
                        .HasColumnType("datetime(6)");

                    b.Property<decimal>("Faturamento")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("GerenteId")
                        .IsRequired()
                        .HasColumnType("varchar(255)");

                    b.Property<decimal>("Lucro")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("TaxaDoCartao")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("VendaId");

                    b.HasIndex("GerenteId");

                    b.ToTable("Vendas");
                });

            modelBuilder.Entity("HapivAPI.Domain.GastoFixo", b =>
                {
                    b.HasOne("HapivAPI.Domain.Gerente", "Gerente")
                        .WithMany("GastosFixos")
                        .HasForeignKey("GerenteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Gerente");
                });

            modelBuilder.Entity("HapivAPI.Domain.Produto", b =>
                {
                    b.HasOne("HapivAPI.Domain.Categoria", "Categoria")
                        .WithMany("Produtos")
                        .HasForeignKey("CategoriaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HapivAPI.Domain.Fornecedor", "Fornecedor")
                        .WithMany("Produto")
                        .HasForeignKey("FornecedorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HapivAPI.Domain.Gerente", "Gerente")
                        .WithMany("Produtos")
                        .HasForeignKey("GerenteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categoria");

                    b.Navigation("Fornecedor");

                    b.Navigation("Gerente");
                });

            modelBuilder.Entity("HapivAPI.Domain.Relacionamentos.VendaProduto", b =>
                {
                    b.HasOne("HapivAPI.Domain.Produto", "Produto")
                        .WithMany("VendaProdutos")
                        .HasForeignKey("ProdutoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("HapivAPI.Domain.Venda", "Venda")
                        .WithMany("VendaProdutos")
                        .HasForeignKey("VendaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Produto");

                    b.Navigation("Venda");
                });

            modelBuilder.Entity("HapivAPI.Domain.Venda", b =>
                {
                    b.HasOne("HapivAPI.Domain.Gerente", "Gerente")
                        .WithMany("Vendas")
                        .HasForeignKey("GerenteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Gerente");
                });

            modelBuilder.Entity("HapivAPI.Domain.Categoria", b =>
                {
                    b.Navigation("Produtos");
                });

            modelBuilder.Entity("HapivAPI.Domain.Fornecedor", b =>
                {
                    b.Navigation("Produto");
                });

            modelBuilder.Entity("HapivAPI.Domain.Gerente", b =>
                {
                    b.Navigation("GastosFixos");

                    b.Navigation("Produtos");

                    b.Navigation("Vendas");
                });

            modelBuilder.Entity("HapivAPI.Domain.Produto", b =>
                {
                    b.Navigation("VendaProdutos");
                });

            modelBuilder.Entity("HapivAPI.Domain.Venda", b =>
                {
                    b.Navigation("VendaProdutos");
                });
#pragma warning restore 612, 618
        }
    }
}

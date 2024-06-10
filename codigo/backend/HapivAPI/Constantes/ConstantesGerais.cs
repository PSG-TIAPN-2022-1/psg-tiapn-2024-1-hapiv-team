namespace HapivAPI.Constantes
{
    public static class ConstantesGerais
    {
        public static class Controllers
        {
            public static readonly string SemCategorias = "Ainda não houve nenhuma categoria cadastrada!";
        }

        public static class Agents
        {
            public static class EmailSender
            {
                public static readonly string ErroEnviarEmail = "Erro ao enviar o email";
                public static readonly string ErroCriarClienteSendGrid = "Erro ao criar o cliente SendGrid";

                public static readonly string EmailRemetente = "igorlucas1217@gmail.com";
                public static readonly string HtmlContent = @"
                                                '<html>
                                                    <head>
                                                        <style>
                                                            p {{
                                                                font-size: 16px;
                                                            }}
                                                            body {{
                                                                font-family: Arial, sans-serif;
                                                                border: 1px solid #f8f9fa;
                                                            }}
                                                            .container {{
                                                                width: 80%;
                                                                margin: auto;
                                                                border: 5px solid #f8f9fa;
                                                            }}
                                                            .header {{
                                                                background-color: #f8f9fa;
                                                                padding: 20px;
                                                                text-align: center;
                                                            }}
                                                            .content {{
                                                                margin: 20px;
                                                            }}
                                                        </style>
                                                    </head>
                                                    <body>
                                                        <div class='container'>
                                                            <div class='header'>
                                                                <h1>Olá Gestor(a)!</h1>
                                                            </div>
                                                            <div class='content'>
                                                                <p>Tudo bem?</p>
                                                                <p>Esqueceu sua senha? Sua senha é: <strong>{0}</strong></p>
                                                                <p>Atenciosamente,TI.</p>
                                                            </div>
                                                        </div>
                                                    </body>
                                                </html>";
            }
        }
    }
}

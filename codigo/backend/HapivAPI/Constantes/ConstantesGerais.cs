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
                                                            body {{
                                                                font-family: Arial, sans-serif;
                                                            }}
                                                            .container {{
                                                                width: 80%;
                                                                margin: auto;
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
                                                                <h1>Welcome to Our Website</h1>
                                                            </div>
                                                            <div class='content'>
                                                                <p>Hello,</p>
                                                                <p>We're glad you've joined our website. Your password is: <strong>{0}</strong></p>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem id magna consequat convallis. Suspendisse potenti. In non metus auctor, feugiat purus vitae, ultrices mauris. Sed ac diam nec neque egestas congue. Curabitur euismod lacinia risus, sed tempus odio placerat a.</p>
                                                                <p>Best regards,</p>
                                                                <p>The Team</p>
                                                            </div>
                                                        </div>
                                                    </body>
                                                </html>";
            }
        }
    }
}

// Importa o Express e tipos auxiliares (`Request`, `Response`, `NextFunction`) para tipar requisições, respostas e middlewares.
import express, { Request, Response, NextFunction } from "express";

// Importa as rotas definidas no arquivo `routes`, que agrupa e organiza as rotas da aplicação.
import { routes } from "./routes";

// Importa a classe `AppError` usada para lidar com erros personalizados.
import { AppError } from "./utils/AppError";

// Importa o `ZodError`, que será usado para lidar com erros de validação gerados pela biblioteca Zod.
import { ZodError } from "zod";

// Define a porta onde o servidor será iniciado.
const PORT = 3333;

// Cria uma instância do aplicativo Express.
const app = express();

// Configura o middleware para interpretar o corpo das requisições como JSON.
// Isso permite que a aplicação processe requisições com dados no formato JSON.
app.use(express.json());

// Registra as rotas da aplicação. Todas as rotas definidas no arquivo `routes` são associadas ao aplicativo Express.
app.use(routes);

// Define um middleware global para tratamento de erros.
// Esse middleware é executado quando uma exceção é lançada ou quando o próximo middleware chama `next(error)`.
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  // Verifica se o erro é uma instância de `AppError`.
  // Se for, retorna a mensagem e o status code definidos na classe `AppError`.
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  // Verifica se o erro é uma instância de `ZodError`.
  // Se for, retorna um status 400 (Bad Request) com uma mensagem de validação e os detalhes dos problemas formatados.
  if (error instanceof ZodError) {
    response
      .status(400)
      .json({ message: "Validation error!", issues: error.format() });
  }

  // Se o erro não for tratado pelos casos anteriores, retorna um status 500 (Internal Server Error).
  // Isso indica um problema inesperado no servidor.
  response.status(500).json({ message: "Erro no servidor!" });
});

// Inicia o servidor na porta especificada (`PORT`) e exibe uma mensagem no console indicando que o servidor está rodando.
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

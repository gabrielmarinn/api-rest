// Importa os tipos 'Request', 'Response' e 'NextFunction' do Express.
// Esses tipos são usados para tipar os parâmetros da função middleware, ajudando na segurança e clareza do código.
import { Request, Response, NextFunction } from "express";

// Exporta a função 'myMiddleware', que será usada como middleware em rotas do Express.
// Middlewares são funções intermediárias que podem modificar a requisição ou resposta, executar lógica personalizada e passar o controle para o próximo middleware ou controlador.
export function myMiddleware(
  request: Request, // Tipagem do objeto de requisição (request), que contém informações sobre a requisição HTTP.
  next: NextFunction // Tipagem do método 'next', que é uma função usada para passar o controle para o próximo middleware ou controlador.
) {
  // Adiciona uma propriedade 'user_id' ao objeto da requisição (request).
  // Neste caso, 'user_id' é definido com um valor fixo "123456".
  // Isso pode ser usado para simular a autenticação de um usuário ou associar a requisição a um identificador de usuário.
  request.user_id = "123456";

  // Exibe uma mensagem no console toda vez que o middleware for executado.
  // Isso é útil para depuração, permitindo verificar se o middleware foi chamado.
  console.log("Passou pelo Middleware!");

  // Chama a função 'next' para passar o controle para o próximo middleware ou controlador na pilha de execução.
  // Se 'next()' não for chamado, o fluxo da requisição será interrompido e a resposta não será enviada.
  return next();
}

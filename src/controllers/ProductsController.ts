// Importa os tipos 'Request' e 'Response' do framework Express.
// Esses tipos são usados para tipar os objetos de requisição e resposta nos métodos da classe.
import { Request, Response } from "express";

// Importa o módulo 'z' do pacote Zod, uma biblioteca de validação de esquemas.
// Zod é usado para definir e validar os dados do corpo da requisição.
import { z } from "zod";

// Declara a classe 'ProductsController', que agrupa os métodos relacionados ao gerenciamento de produtos.
export class ProductsController {
  // Método 'index' que lida com a listagem de produtos.
  index(request: Request, response: Response) {
    // Desestrutura os parâmetros de query string 'page' e 'limit' da requisição.
    const { page, limit } = request.query;

    // Envia uma resposta de texto simples com a página e o limite especificados.
    // Exemplo de saída: "Pagina 1 de 10".
    response.send(`Pagina ${page} de ${limit}`);
  }

  // Método 'create' que lida com a criação de um novo produto.
  create(request: Request, response: Response) {
    // Define um esquema de validação para o corpo da requisição usando Zod.
    // O esquema exige os campos 'name' e 'price', com validações específicas:
    const bodySchema = z.object({
      // Campo 'name': deve ser uma string, é obrigatório e deve ter pelo menos 6 caracteres após o trim.
      name: z
        .string({ required_error: "Name is required!" }) // Mensagem de erro personalizada para campo ausente.
        .trim() // Remove espaços em branco do início e fim da string.
        .min(6, { message: "Name must be 6 or more characters" }), // Valida que o nome tenha no mínimo 6 caracteres.

      // Campo 'price': deve ser um número, é obrigatório e deve ser positivo.
      price: z
        .number({ required_error: "Price is required!" }) // Mensagem de erro personalizada para campo ausente.
        .positive({ message: "Price must be positive" }), // Valida que o preço seja um número positivo.
    });

    // Valida e analisa o corpo da requisição usando o esquema definido.
    // Se a validação falhar, Zod lança um erro automaticamente.
    const { name, price } = bodySchema.parse(request.body);

    // Envia uma resposta HTTP com status 201 (Created) e retorna os dados do produto criado.
    // Inclui 'name', 'price' e 'user_id' (adicionado da requisição, supondo que foi previamente definido em middleware).
    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

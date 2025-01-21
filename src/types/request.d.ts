// Declaração de um namespace chamado `Express`.
// Isso é usado para estender os tipos padrão fornecidos pelo Express, permitindo adicionar novas propriedades ou personalizar as existentes.
declare namespace Express {
  // Dentro do namespace `Express`, estamos exportando uma interface chamada `Request`.
  // Essa interface representa o objeto de requisição padrão do Express, que é usado em middlewares, controladores e outras partes da aplicação.
  export interface Request {
    // Adiciona uma nova propriedade chamada `user_id` ao tipo `Request`.
    // A propriedade `user_id` é do tipo `string` e estará disponível em qualquer objeto de requisição dentro da aplicação.
    user_id: string;
  }
}

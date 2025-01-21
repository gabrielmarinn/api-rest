// Declara uma classe chamada `AppError`.
// Essa classe é usada para padronizar erros personalizados em uma aplicação, permitindo que mensagens e códigos de status sejam facilmente gerenciados.
export class AppError {
  // Define uma propriedade pública `message` do tipo `string`.
  // Essa propriedade armazena a mensagem descritiva do erro.
  message: string;

  // Define uma propriedade pública `statusCode` do tipo `number`.
  // Essa propriedade armazena o código de status HTTP associado ao erro.
  statusCode: number;

  // Declara o construtor da classe, que é chamado automaticamente ao criar uma instância de `AppError`.
  // O construtor recebe dois parâmetros:
  // - `message` (obrigatório): Mensagem descritiva do erro.
  // - `statusCode` (opcional, padrão é 400): Código de status HTTP para o erro.
  constructor(message: string, statusCode: number = 400) {
    // Inicializa a propriedade `message` com o valor passado ao construtor.
    this.message = message;

    // Inicializa a propriedade `statusCode` com o valor passado ao construtor ou com o valor padrão (400).
    this.statusCode = statusCode;
  }
}

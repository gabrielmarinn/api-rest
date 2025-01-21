// Importa o módulo 'Router' do Express, usado para criar subconjuntos de rotas organizadas.
// O objeto 'Router' permite agrupar rotas relacionadas a um recurso específico, como produtos.
import { Router } from "express";

// Importa um middleware personalizado chamado 'myMiddleware'.
// Esse middleware será aplicado a uma das rotas, provavelmente para executar alguma validação, autenticação ou outra lógica.
import { myMiddleware } from "../middlewares/my-middlewares";

// Importa a classe 'ProductsController', que contém os métodos que implementam as operações relacionadas aos produtos.
// Cada método da classe (ex.: index, create) é responsável por lidar com uma rota específica.
import { ProductsController } from "../controllers/ProductsController";

// Cria uma instância de roteador para gerenciar as rotas de produtos.
const productsRoutes = Router();

// Cria uma instância do controlador de produtos.
// Essa instância permite acessar os métodos definidos na classe 'ProductsController'.
const productsController = new ProductsController();

// Define uma rota HTTP GET para o caminho "/".
// Essa rota chama o método 'index' do controlador 'productsController'.
// - Caminho: "/products/" (com base no arquivo principal que inclui este roteador).
// - Lógica: 'index' provavelmente lista os produtos.
productsRoutes.get("/", productsController.index);

// Define uma rota HTTP POST para o caminho "/".
// Essa rota usa o middleware 'myMiddleware' antes de chamar o método 'create' do controlador.
// - Middleware: 'myMiddleware' executa antes de 'create', para validação, autenticação ou lógica adicional.
// - Caminho: "/products/".
// - Lógica: 'create' é responsável por criar um novo produto, com os dados recebidos no corpo da requisição.
productsRoutes.post("/", myMiddleware, productsController.create);

// Exporta o roteador configurado para ser usado no servidor principal.
// Este roteador será incluído no arquivo principal do servidor para tornar as rotas de produtos acessíveis.
export { productsRoutes };

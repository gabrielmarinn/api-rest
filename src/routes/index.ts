// Importa o módulo 'Router' do Express, usado para criar rotas modulares e organizadas.
// O objeto 'Router' permite definir subconjuntos de rotas que podem ser usadas no aplicativo principal.
import { Router } from "express";

// Importa as rotas relacionadas a produtos de um arquivo externo chamado 'products-routes'.
// O arquivo 'products-routes' provavelmente contém definições de rotas específicas para operações relacionadas a produtos.
import { productsRoutes } from "./products-routes";

// Cria uma instância do roteador, que será usada para agrupar e configurar rotas.
const routes = Router();

// Usa o middleware 'productsRoutes' para lidar com todas as requisições que começam com o caminho '/products'.
// Isso significa que qualquer rota definida em 'productsRoutes' será acessível sob o prefixo '/products'.
routes.use("/products", productsRoutes);

// Exporta o objeto 'routes', que agora contém todas as rotas configuradas.
// Este objeto será usado no arquivo principal do servidor (geralmente 'app.js' ou 'server.js') para integrar essas rotas ao servidor Express.
export { routes };

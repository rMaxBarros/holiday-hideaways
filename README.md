
# Holiday Hideaways

Este projeto consistiu na criação de um sistema completo para locação de temporada, abrangendo desde o desenvolvimento da API REST em Python até a construção do front-end interativo em React.

### Protópipo do Figma:

![image](https://github.com/user-attachments/assets/5d26fb6c-3939-4b81-9df3-e5d1ea445e56)


## Back-end (API REST com Python)

- Linguagem: Python
- Framework: Flask
- Biblioteca para CORS: Flask-CORS (para permitir requisições de diferentes origens)
- Formato de dados: JSON (para troca de informações entre o back-end e o front-end).

A API foi responsável por fornecer os dados das acomodações, incluindo nome, imagem, preço, endereço e cidade. Os dados foram armazenados em um arquivo JSON, facilitando a manipulação e o acesso. A API também implementou endpoints para listar todas as acomodações, buscar acomodações por ID e filtrar acomodações por cidade.

## Front-end (Interface Interativa com React)
- Biblioteca: React
- Gerenciador de pacotes: npm
- Biblioteca para requisições HTTP: Axios
### Design:
- Layout responsivo, adaptando-se a diferentes tamanhos de tela
- Componentes reutilizáveis para os cards das acomodações
- Estilos CSS personalizados para garantir uma aparência atraente e profissional.

O front-end consumiu os dados da API para exibir as acomodações em cards, permitindo que os usuários visualizassem as informações de forma clara e organizada. Foi implementada a funcionalidade de favoritar acomodações, com os favoritos sendo armazenados no LocalStorage do navegador. Além disso, foi criada uma página de favoritos para listar as acomodações favoritadas, com a opção de removê-las da lista.

## Conexão Front-end e Back-end

A conexão entre o front-end e o back-end foi estabelecida através de requisições HTTP. O front-end (React) enviava requisições para a API (Flask) para obter os dados das acomodações. O proxy foi configurado no front-end para redirecionar as requisições para o servidor da API durante o desenvolvimento.

# Funcionalidades personalizadas
- Listagem de acomodações: Exibição de todas as acomodações disponíveis em cards.
- Busca por cidade: Filtro de acomodações com base na cidade.
- Detalhes da acomodação: (Não implementado neste projeto, mas pode ser adicionado)
- Favoritar acomodações: Adicionar e remover acomodações da lista de favoritos.
- Página de favoritos: Exibição das acomodações favoritas.

## Considerações finais
Este projeto demonstra a criação de um sistema web completo, desde a API até a interface do usuário, utilizando tecnologias modernas e eficientes. O design responsivo garante que a aplicação funcione corretamente em diferentes dispositivos, proporcionando uma boa experiência para o usuário. A implementação da funcionalidade de favoritar acomodações e a página de favoritos adicionam valor ao sistema, tornando-o mais útil e personalizado.

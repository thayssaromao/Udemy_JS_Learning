# Projeto Landing Page

Este projeto consiste na criação de uma landing page moderna e responsiva, desenvolvida utilizando apenas HTML5 e CSS3. A página é composta por múltiplas seções, navegação fixa, layouts em grid e é adaptável a diferentes tamanhos de tela, como desktops e dispositivos móveis.

## 🚀 Tecnologias e Conceitos Aplicados

### **HTML5 Semântico**

A estrutura do `index.html` foi construída utilizando tags semânticas como:

-   **`<section>`**: Para agrupar os principais conteúdos da página (Intro, Galeria, Contato, etc.).
-   **`<nav>`**: Para a lista de links de navegação.
-   **`<aside>`**: Utilizado para o menu de navegação lateral (que se torna o menu principal em telas menores).
-   **`<footer>`**: Para o rodapé da página.

### **CSS3 Moderno**

O arquivo `style.css` utiliza diversas técnicas e recursos avançados do CSS3 para estilização, layout e interatividade.

#### **Layout e Responsividade**

-   **CSS Flexbox**: Utilizado para alinhar e distribuir elementos de forma eficiente, como no cabeçalho de navegação (`.menu-content`) e no alinhamento de texto e imagens nas seções.
-   **CSS Grid Layout**: A principal ferramenta para criar os layouts em grade, como visto nas seções "TOP 3 jobs" e "Recent Jobs" (`.grid-text`), permitindo uma fácil organização do conteúdo em colunas.
-   **Design Responsivo com Media Queries**:
    -   Foram implementados breakpoints (em `800px` e `380px`) para adaptar o layout a diferentes dispositivos.
    -   Em telas menores, o layout de grade se ajusta de 3 colunas para 2 ou 1, e o menu principal é transformado em um menu "hambúrguer".
-   **Unidades Relativas (`rem`)**: O uso da unidade `rem` para fontes e espaçamentos garante que a página seja escalável e acessível, ajustando-se às preferências de tamanho de fonte do usuário.

#### **Recursos e Técnicas Avançadas**

-   **Variáveis CSS (`:root`)**: Cores primárias e outras foram definidas como variáveis (`--primary-color`, `--white`), o que facilita a manutenção e a alteração do tema da página de forma centralizada.
-   **Menu Hambúrguer "CSS-Only" (Sem JavaScript)**:
    -   Um dos principais aprendizados do projeto. A funcionalidade do menu móvel foi implementada usando um `<input type="checkbox">` oculto e um `<label>` que serve como o ícone do menu.
    -   O seletor de irmão adjacente (`~`) e a pseudo-classe `:checked` são usados para exibir ou ocultar o menu quando o checkbox é marcado, eliminando a necessidade de JavaScript para essa funcionalidade.
-   **Pseudo-elementos (`::before`, `::after`)**:
    -   `::after` é usado para criar um efeito de sublinhado animado nos links de navegação ao passar o mouse (`hover`).
    -   `::before` é combinado com Contadores CSS para numerar automaticamente os títulos na seção "TOP 3 jobs".
-   **Contadores CSS (`counter-reset`, `counter-increment`)**: Utilizados para criar uma contagem automática nos elementos da grade, tornando o conteúdo mais dinâmico e fácil de manter sem precisar numerar manualmente no HTML.
-   **Efeitos de Transição e Transformação**:
    -   Transições suaves (`transition`) são aplicadas a vários elementos.
    -   Na galeria de imagens, um efeito de `transform` (`scale`, `rotate`, `translate`) é aplicado no evento `:hover`, criando uma animação interativa para o usuário.
-   **Seções de Altura Total (`min-height: 100vh`)**: Cada `<section>` principal ocupa pelo menos 100% da altura da viewport (tela visível), criando uma experiência de rolagem imersiva de página inteira.
-   **Fontes Customizadas**: O projeto importa e utiliza fontes do Google Fonts (`@import url(...)`) para uma aparência visual única e estilizada.

### Imagens do Site
<img width="2048" height="946" alt="image" src="https://github.com/user-attachments/assets/c4709f7f-3e22-4468-8003-12666b93c1b0" />
<img width="2048" height="949" alt="image" src="https://github.com/user-attachments/assets/49824da2-c59d-40e5-9759-40cba3349aca" />

### Autor
- Feito por Thayssa Romão com ajuda das aulas do professor Luiz Otávio Miranda.
- GitHub: @thayssaromao

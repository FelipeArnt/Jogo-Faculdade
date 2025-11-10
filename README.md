# Server Attack

Um jogo de aventura textual em JavaScript onde você investiga um ataque cibernético a um servidor.

Seu objetivo é restaurar o servidor comprometido coletando ferramentas, resolvendo enigmas e usando itens nas salas corretas.

## Objetivo do Jogo

- Comece no Hall de Entrada.
- Colete ferramentas (ex.: notebook) e use-as em objetos (ex.: servidor) para progredir.
- Restaure o servidor usando o arquivo restaurador no laboratório com o notebook.
- O jogo termina quando você vence ou digita "fim".

## Como Jogar

Execute o jogo com Node.js (veja "Execução" abaixo). Use comandos no prompt:

- **pega [ferramenta]**: Coleta uma ferramenta da sala atual para a mochila
  - (ex.: "pega notebook").
- **inventario**: Lista ferramentas na mochila.
- **usa [ferramenta] [objeto]**: Usa uma ferramenta em um objeto da sala
  - (ex.: "usa chave servidor").
- **sai [porta]**: Move para outra sala
  - (ex.: "sai sala_servidor").
- **fim**: Encerra o jogo.

## Estrutura dos Arquivos

- **Basicas.js**: Framework base do jogo.
  - **Engine**: Controla o loop do jogo, mochila e salas.
  - **Sala**: Representa uma sala com objetos, ferramentas e portas.
  - **Mochila**: Armazena ferramentas coletadas.
  - **Ferramenta**: Classe base para itens usáveis (ex.: chave, notebook).
  - **Objeto**: Classe base para itens interativos (ex.: servidor, arquivos).
- **FerramentasDemo.js**: Ferramentas específicas (Chave, Pendrive, Notebook).
- **ObjetosDemo.js**: Objetos específicos (Servidor, Bilhete, ArquivoRestaurador, ArquivoCriptografado).
- **SalasDemo.js**: Salas do jogo (HallEntrada, SalaServidor, Deposito, Laboratorio).
- **JogoDemo.js**: Classe derivada de Engine que configura o cenário.
- **index.js**: Ponto de entrada para iniciar o jogo.

## Execução

1. Instale dependências: `npm install bycontract prompt-sync`.
2. Execute: `node index.js`.

Divirta-se restaurando o servidor!

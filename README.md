

### 📖 Server Attack

"São 3 da manhã de uma terça-feira. O alarme silencioso da sua estação de trabalho dispara, exibindo a única notificação que você temia: **'VIOLAÇÃO DE REDE DETECTADA - NÍVEL CRÍTICO'**.

Você é o estagiário de Cibersegurança da corporação e acaba de chegar ao data center escuro e silencioso. O ataque foi devastador: um malware desconhecido varreu os sistemas, e o servidor principal está comprometido.

As luzes de emergência piscam suavemente no **`Hall_de_Entrada`**. Você está sozinho.

O invasor deixou rastros criptografados pelos servidores. Um **`Bilhete`** enigmático foi encontrado no **`Deposito`** e um **`ArquivoCriptografado`** suspeito está no **`Laboratorio`**.

Seu único objetivo é lutar contra o tempo, investigar as salas em busca de pistas e encontrar o **`Descriptografador`**. Apenas com ele e seu **`notebook`** Kali-Linux, você poderá acessar o servidor no **`Laboratorio`** e executar a restauração.

## Objetivo do Jogo

- Comece no Hall de Entrada.
- Colete ferramentas (notebook-kali e Descriptografador) e use-as em objetos (servidor_afetado, servidor, ) para ganhar o jogo.
- Restaure o servidor usando o notebook com Kali-Linux no servidor afetado.
- O jogo termina quando você vence ou digita "fim".

## Como Jogar

Execute o jogo com `nodejs index.js`. Use comandos no prompt:

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
  - **Ferramenta**: Classe base para itens usáveis (notebook-kali,Descriptografador etc...).
  - **Objeto**: Classe base para itens interativos .
- **FerramentasDemo.js**: Ferramentas específicas (Descriptografador, CaboEthernet, Notebook-kali).
- **ObjetosDemo.js**: Objetos específicos (Servidor, Bilhete, ServidorAfetado, ArquivoCriptografado).
- **SalasDemo.js**: Salas do jogo (HallEntrada, SalaServidor, Deposito, Laboratorio).
- **JogoDemo.js**: Classe derivada de Engine que configura o cenário.
- **index.js**: Ponto de entrada para iniciar o jogo.

## Execução

1. Instale dependências: `npm install bycontract prompt-sync`.
2. Execute: `node index.js`.


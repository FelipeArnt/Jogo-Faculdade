import { validate } from "bycontract";
import { Objeto, Ferramenta } from "./Basicas.js";
import { Chave, Notebook, Pendrive } from "./FerramentasDemo.js";

export class Servidor extends Objeto {
  constructor() {
    super("servidor", "O servidor foi comprometido após um ataque cibernético.",
      "O servidor está criptografado. Não foi possível ler os dados, a restauração do servidor é necessária...");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Chave) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class Bilhete extends Objeto {
  constructor() {
    super("bilhete", "Há um bilhete, nele está escrito \"Senha para reparo do servidor: KLdjc3avy_bEjn9nBGMTaw\"", "Senha descriptografada: admin123");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    return false;
  }
}

// ---------------------------------------------
export class ArquivoRestaurador extends Objeto {
  constructor() {
    super("arquivo_restaurador", "O arquivo é protegido por senha",
      "O arquivo está pronto para ser usado no servidor. A solução para restaurar o servidor foi encontrada!!!");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Notebook) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class ArquivoCriptografado extends Objeto {
  constructor() {
    super("arquivo_criptografado", "O arquivo foi criptografado após o ataque.",
      "O arquivo foi descriptografado. Mas ele está vazio!");
  }

  usa(ferramenta, objeto) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Notebook) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------

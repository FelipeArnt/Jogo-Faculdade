import { validate } from "bycontract";
import { Sala, Engine, Ferramenta, Objeto } from "./Basicas.js";
import { Notebook, Chave } from "./FerramentasDemo.js";
import { Servidor, Bilhete, ArquivoCriptografado, ArquivoRestaurador } from "./ObjetosDemo.js";

export class HallEntrada extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Hall_de_Entrada", engine);
    let notebook = new Notebook();
    this.ferramentas.set(notebook.nome, notebook);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    return false;
  }
}
// ---------------------------------------------
export class SalaServidor extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("sala_servidor", engine);
    let servidor = new Servidor();
    this.objetos.set(servidor.nome, servidor);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }
    if (!this.objetos.has(objeto)) {
      return false;
    }
    let servidor = this.objetos.get(objeto);
    return servidor.usar(this.engine.mochila.pega(ferramenta));
  }
}
// ---------------------------------------------
export class Deposito extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Deposito", engine);
    let chave = new Chave();
    this.ferramentas.set(chave.nome, chave);
    let bilhete = new Bilhete();
    this.objetos.set(bilhete.nome, bilhete);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    return false;
  }
}
// ---------------------------------------------
export class Laboratorio extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Laboratorio", engine);
    let arquivoRestaurador = new ArquivoRestaurador();
    this.objetos.set(arquivo.nome, arquivoRestaurador);
    let arquivoCriptografado = new ArquivoCriptografado;
    this.objetos.set(arquivo.nome, arquivoCriptografado);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }
    if (!this.objetos.has(objeto)) {
      return false;
    }
    let arquivo = this.objetos.get(objeto);
    let usou = arquivo.usar(this.engine.mochila.pega(ferramenta));
    if (arquivo instanceof ArquivoRestaurador && usou == true) {
      this.engine.indicaFimDeJogo();
    }
    return usou;
  }
}
// ---------------------------------------------

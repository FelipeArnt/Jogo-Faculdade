import { Engine } from "./Basicas.js"
import { Laboratorio, HallEntrada, Deposito, SalaServidor } from "./SalasDemo.js";

export class JogoDemo extends Engine {
  constructor() {
    super();
  }

  criaCenario() {
    // Define as salas que compõem o mapa
    let hall = new HallEntrada(this);
    let salaservidor = new SalaServidor(this);
    let laboratorio = new Laboratorio(this);
    let deposito = new Deposito(this);

    // Encadeia as salas através das portas
    hall.portas.set(sala.nome, sala);
    sala.portas.set(hall.nome, hall);
    sala.portas.set(laboratorio.nome, laboratorio);
    sala.portas.set(deposito.nome, deposito);
    salaservidor.portas.set(sala.nome, sala);
    deposito.portas.set(sala.nome, sala);

    // Define a sala inicial
    this.salaCorrente = hall;
  }
}

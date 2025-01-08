"use strict";
/* import { sendLaunchRocketCommand } from './commands/launchRocket';
import client from './configuration/connection';

// Função principal
async function main() {
  // Espera pela ação do usuário para lançar o foguete
  console.log("Pronto para lançar o foguete. Pressione 'L' para iniciar.");
  process.stdin.on('data', async (input) => {
    if (input.toString().trim().toLowerCase() === 'l') {
      await sendLaunchRocketCommand();
    } else {
      console.log('Comando não reconhecido.');
    }
  });
}

// Executa o programa
main();
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const krpc_js_1 = __importDefault(require("krpc.js"));
const options = {
    name: 'krpc.js', // (default)
    host: '192.168.56.1', // (default)
    rpcPort: 50000, // (default)
    streamPort: 50001, // (default)
    streamRate: 20 //hz (default: 0 = unlimited)
};
let krpc = new krpc_js_1.default(options);
krpc.load().then(() => __awaiter(void 0, void 0, void 0, function* () {
    let sc = krpc.services.spaceCenter;
    let vessel = yield sc.activeVessel; // awaiting rpc call
    for (let i = 0; i < 10; i++) {
        console.log(yield vessel.situtation); // slow, one rpc is executed every time
    }
    vessel.stream('situation');
    for (let i = 0; i < 10; i++) {
        console.log(yield vessel.situtation); // fast, streamed properties can be resolved immediately
    }
    //yet another way:
    let stream = vessel.stream('situation', (situation) => console.log(situation));
    setTimeout(() => stream.remove(), 60 * 1000);
})).catch(console.error);

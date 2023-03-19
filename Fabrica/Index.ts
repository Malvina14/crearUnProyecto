import { Equipo } from "./Equipo";
import { Bomba } from "./Bomba";
import { KitMangueras, Roscas } from "./KitMangueras";
import {Eficiencia} from "./Motor";
import { MotorElectrico } from "./MotorElectrico";
import { MotorCombustible, Combustible } from "./MotorCombustible";




const bomba1 = new Bomba('B1',4, 5, 'Jgh');
bomba1.getleerBomba;
bomba1.modificarBomba('B1_2',4.1, 5.1, 'Kartan');
bomba1.getleerBomba;


const manguera1 = new KitMangueras('id Rosca', 5, 1/8, Roscas.material1);
manguera1.getleerKitMangueras;
manguera1.modificarKitMangueras('id Rosca', 5, 1/8, Roscas.material3)
manguera1.getleerKitMangueras;


const MCombustion = new MotorCombustible('id MC', 1000, Eficiencia.B, 'Acme', '3CV', Combustible.Diesel);
MCombustion.motorCombustible;
MCombustion.modificarMotorCombustible('id MC', 1000, Eficiencia.B, 'Acme', '3CV', Combustible.Gasolina)
MCombustion.motorCombustible;


const MEleictrico1 = new MotorElectrico('id ME', 1000, Eficiencia.A, 'Acme', 'Amp', 15, true);
MEleictrico1.leerMotorElectrico;
MEleictrico1.modificarMotorElectrico('id ME', 1000, Eficiencia.A, 'Acme', 'Amp', 15, false);
MEleictrico1.leerMotorElectrico;


const equipo1 = new Equipo('id motor E', 'desc motor', new Date() , new Date(), bomba1, manguera1, MEleictrico1);
equipo1.getleerEquipo;




const equipo2 = new Equipo('id motor', 'desc motor', new Date() , new Date(), bomba1, manguera1, MCombustion);
equipo2.getleerEquipo;
let equipos: Equipo[] = []
equipos.push(equipo1);
equipos.push(equipo2);
console.log(equipos);








equipo1.eliminaEquipo(equipos);
console.log(equipos);

import { Motor, Eficiencia } from "./Motor";


export class MotorElectrico extends Motor{
private voltaje: string = "";
private consumo: number = 0;
private isBajoConsumo: boolean = true;


constructor(id: string, potencia: number, eficiencia: Eficiencia, fabricante: string, voltaje: string, consumo: number, isBajoConsumo: boolean){
super(id, potencia, eficiencia, fabricante);
this.voltaje = voltaje;
this.consumo = consumo;
this.isBajoConsumo = isBajoConsumo;
}


fullEquipment(array: MotorElectrico[]){
console.log(array); 
}


public agregar_motorElectrico(array: MotorElectrico[]){
array.push(this);
console.table(`Motor Electrico agregado: ${array}`);
return;
}




get leerMotorElectrico(){
const electricEngine = [ this.id, this.potencia, this.eficiencia, this.fabricante, this.voltaje, this.consumo, this.isBajoConsumo]
console.table([electricEngine]);
return electricEngine;
}


public modificarMotorElectrico(newId: string, newPotencia: number, newEficiencia: Eficiencia, newFabricante: string, newVoltaje: string, newConsumo: number, newIsBajoConsumo: boolean ){
this.id = newId;
this.potencia = newPotencia;
this.eficiencia = newEficiencia;
this.fabricante = newFabricante;
this.voltaje = newVoltaje;
this.consumo = newConsumo;
this.isBajoConsumo = newIsBajoConsumo;
return
}


public eliminarMotorElectrico(array: MotorElectrico[]):void{
const motorAEliminar = array.findIndex((motorelectrico: MotorElectrico) => motorelectrico.id === this.id);
array.splice(motorAEliminar, 1);
console.log(`El motor ${this.id} ha sido elimnido`); 
}
}

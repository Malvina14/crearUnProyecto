import { Motor, Eficiencia } from "./Motor";


export enum Combustible{
Gasolina = "Gasolina",
Diesel = "Diesel",


}


export class MotorCombustible extends Motor{


private cilindros: string = "";
private tipoCombustible: Combustible = Combustible.Diesel;


constructor(id: string, potencia: number, eficiencia: Eficiencia, fabricante: string, cilindros: string, tipoCombustible: Combustible){
super(id, potencia, eficiencia, fabricante)
this.cilindros = cilindros;
this.tipoCombustible = tipoCombustible;
}


fullEquipment(array: MotorCombustible[]){
console.log(array); 
}


public agregar_motorCombustible(array: MotorCombustible[]){
array.push(this);
console.table(`Motor de Combustion agregado; ${array}`);
return; 
}


get motorCombustible(){
const combustionEngine = [ this.id, this.potencia, this.eficiencia, this.fabricante, this.cilindros, this.tipoCombustible]
console.table([combustionEngine]);
return combustionEngine;


}


public modificarMotorCombustible(newId: string, newPotecia: number, newEficiencia: Eficiencia, newFabricante: string, newCilindros: string, newTipoCombustible: Combustible){
this.id = newId;
this.potencia = newPotecia;
this.eficiencia = newEficiencia;
this.fabricante = newFabricante;
this.cilindros = newCilindros;
this.tipoCombustible = newTipoCombustible;
return;
}


public eliminarMotorCombustible(array: MotorCombustible[]):void{
const motorAEliminar = array.findIndex((motorCombustible: MotorCombustible) => motorCombustible.id === this.id);
array.splice(motorAEliminar, 1);
console.log(`El motor ${this.id} ha sido elimnido`); 
}
}

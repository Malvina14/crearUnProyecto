import { Bomba } from "./Bomba";
import { Motor } from "./Motor";
import { KitMangueras } from "./KitMangueras";




export class Equipo{

private id: string ;
private description: string ;
private fechaFabricacion: Date ;
private fechaInstalacion: Date;
public bomba: Bomba;
public kitMangueras: KitMangueras;
public motor: Motor;


constructor(id: string, description: string, fechaFabricacion: Date = new Date(), fechaInstalacion: Date = new Date(), bomba: Bomba, kitMangueras: KitMangueras, motor: Motor ){
this.id = id;
this.description = description;
this.fechaFabricacion = fechaFabricacion;
this.fechaInstalacion = fechaInstalacion;
this.bomba = bomba;
this.kitMangueras = kitMangueras;
this.motor = motor;
}


fullEquipment(array: Equipo[]){
console.log(array);


}


public agregarEquipo(array: Equipo[]){
array.push(this);
console.table(`equipo agregado ${array}`);
return; 
}


public getleerEquipo(){
const equipment = [this.id, this.description, this.fechaFabricacion, this.fechaInstalacion, this.bomba, this.kitMangueras, this.motor];
console.log([equipment]);


return equipment;
}




public modificarEquipo(newId: string, newDescription: string, newFechaFabricacion: Date, newFechaInstalacion: Date,){
this.id = newId;
this.description = newDescription;
this.fechaFabricacion = newFechaFabricacion;
this.fechaInstalacion = newFechaInstalacion;
}


public eliminaEquipo(array: Equipo[]): void{
const equipoAEliminar = array.findIndex((equipo: Equipo) => equipo.id === this.id);
array.splice(equipoAEliminar, 1);
console.log(`El equipo ha sido eliminado`);




}


public fechaFabricacionLocal(): string{
return this.fechaFabricacion.toLocaleDateString();
} 
public fechaInstalacionLocal(): string{
return this.fechaInstalacion.toLocaleDateString();
}
}












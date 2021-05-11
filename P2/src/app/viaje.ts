
export class Iviaje {
    id: number;
    nombre: string;
    precio: string;
    icon: string;
};



export class viaje implements Iviaje
{
    id: number;
    nombre: string;
    precio: string;
    icon: string;
     
    constructor(o?:Iviaje)
    {
        if(o !== undefined) Object.assign(this,o);
    }   
}

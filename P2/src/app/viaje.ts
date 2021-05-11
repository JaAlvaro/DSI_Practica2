
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

export class Viewviaje{

    public static getNombre(viaje:viaje)
    {
        return viaje.nombre;
    }
    
    public static getPrecio(viaje:viaje)
    {
        return viaje.precio;
    }  
    
    public static getIcono(viaje:viaje)
    {
        return viaje.icon;
    } 
}


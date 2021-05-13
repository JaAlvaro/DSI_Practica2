
export class Itarjeta {
    id: number;
    nombre: string;
    serial_number?: string;
    caducidad?: Date;
    tipo?:number;
    habitual?:boolean;
};

export class tarjeta implements Itarjeta
{
    id: number;
    nombre: string;
    serial_number?: string;
    caducidad?: Date;
    tipo?:number;
    habitual?:boolean;
     
    constructor(o?:Itarjeta)
    {
        if(o !== undefined) Object.assign(this,o);
    }   
}

export class Viewtarjeta{
       
    private static TIPOS:string[]=['Todos','TTP','Multi','Renfe&Tú', 'Infantil', 'Azul'];
    private static TARJETAS:string[]=['','../../assets/tarjeta_ttp.jpg','../../assets/tarjeta_multi.jpg','../../assets/tarjeta_renfe.png','../../assets/tarjeta_infantil.jpg','../../assets/tarjeta_azul.jpg'];

    public static getTipo(tarjeta:tarjeta)
    {
        return Viewtarjeta.TIPOS[tarjeta.tipo];
    }

    public static getTarjeta(tarjeta:tarjeta)
    {
        return Viewtarjeta.TARJETAS[tarjeta.tipo];
    }


    public static getTipos()
    {
        return Viewtarjeta.TIPOS;
    }

    public static getTiposCreacion()
    {
        let arr = Viewtarjeta.TIPOS.slice()
        return arr.splice(1, 5);
    }
    
    public static getHabitual(tarjeta:tarjeta)
    {
        return (tarjeta.habitual)?"Sí":"No";
    }    
}


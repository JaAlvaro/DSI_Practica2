
export class Icontacto {
    id: number;
    nombre: string;
    serial_number?: string;
    caducidad?: Date;
    tipo?:number;
    habitual?:boolean;
};



export class contacto implements Icontacto
{
    id: number;
    nombre: string;
    serial_number?: string;
    caducidad?: Date;
    tipo?:number;
    habitual?:boolean;
     
    constructor(o?:Icontacto)
    {
        if(o !== undefined) Object.assign(this,o);
    }   
}

export class Viewcontacto{
       
    private static TIPOS:string[]=['','TTP','Multi','Renfe&Tú', 'Infantil', 'Azul'];
    private static TARJETAS:string[]=['','../../assets/tarjeta_ttp.jpg','../../assets/tarjeta_multi.jpg','../../assets/tarjeta_renfe.png','../../assets/tarjeta_infantil.jpg','../../assets/tarjeta_azul.jpg'];

    public static getTipo(contacto:contacto)
    {
        return Viewcontacto.TIPOS[contacto.tipo];
    }

    public static getTarjeta(contacto:contacto)
    {
        return Viewcontacto.TARJETAS[contacto.tipo];
    }


    public static getTipos()
    {
        return Viewcontacto.TIPOS;
    }
    
    public static getHabitual(contacto:contacto)
    {
        return (contacto.habitual)?"Sí":"No";
    }    
}


export type entity<TIidentifier extends number | string> ={ 
    id?:TIidentifier
}

export type ResponseApi<T> ={
    status:number;
    result:boolean;
    message?:string;
    entities?:T[];
    entity?:T;
    
}
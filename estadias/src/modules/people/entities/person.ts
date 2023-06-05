import { entity } from "@/kernel/types";

export type Person = entity<number> & {
    name: string;
    last_name:string;
    job: string;
    cretedAt? : Date 

}
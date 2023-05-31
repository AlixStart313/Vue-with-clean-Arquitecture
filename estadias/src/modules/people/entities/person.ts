import { entity } from "@/kernel/types";

export type Person = entity<number> & {
    name: string;
    job: string;
    cretedAt? : Date 

}
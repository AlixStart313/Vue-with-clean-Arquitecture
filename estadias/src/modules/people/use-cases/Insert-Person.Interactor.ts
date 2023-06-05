import { UseCase } from "@/kernel/contracts";
import { Person } from "../entities/person";
import { ResponseApi } from "@/kernel/types";
import PeopleRepository from './ports/people.repository';


export class InsertPersonInteractor implements UseCase<Person,ResponseApi<Person>>{
    constructor(private peopleRepository:PeopleRepository){}

    execute(payload: Person): Promise<ResponseApi<Person>> {
        if(payload.name.length ===0){
            console.log('Insert intreactor -> 12', payload.name.length); 
            return {
                result:false,
                message:'El campo del nombre es obligatorio'
            } as any
        }
        if(payload.job.length ===0){
            return {
                result:false,
                message:'El campo del trabajo es obligatorio'
            } as any
        }

        return this.peopleRepository.insertPerson(payload)
    }

}
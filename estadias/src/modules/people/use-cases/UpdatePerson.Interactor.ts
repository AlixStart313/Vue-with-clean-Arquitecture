import { UseCase } from "@/kernel/contracts";
import { ResponseApi } from "@/kernel/types";
import { PeopleDto } from "../entities/dto/PeopleDto";
import PeopleRepository from './ports/people.repository';
import { Person } from "../entities/person";

 export class UpdatePersonInteractor implements UseCase<Person,ResponseApi<Person>>{
    constructor(private readonly  peopleRepository:PeopleRepository){}
     execute(payload: Person): Promise<ResponseApi<Person>> {
         if(payload.name.length === 0){
            return {
                result: false,
                message:'El campo del nombre no puede quedar vacio',
            } as any
         }

         if(payload.job.length=== 0){
            return {
                result: false,
                message:'E campo de trabajo no puede quedar vacio'
            } as any
         }

         return this.peopleRepository.updatePerson(payload)
     }

    
    
 }
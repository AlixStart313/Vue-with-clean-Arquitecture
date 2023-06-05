import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../../entities/dto/AllPeopleDto";
import { Person } from "../../entities/person";
import PeopleRepository from "../../use-cases/ports/people.repository";
import { PeopleStorageGateway } from "../People-storage.gateway";
import { getAllPeopleInteractor } from "../../use-cases/GetAllPeople.interator";
import {  InsertPersonInteractor } from "../../use-cases/Insert-Person.Interactor";
import { UpdatePersonInteractor } from '../../use-cases/UpdatePerson.Interactor';

export class PeopleController{
     getAllPeople(payload?:number){
        try {
            const repo:PeopleRepository= new PeopleStorageGateway();
            const inte:getAllPeopleInteractor= new getAllPeopleInteractor(repo);
            return inte.execute(payload);
        } catch (error) {
            return{
                result:false,
                message:error
            } as ResponseApi<AllPeopleDto>
        }
     }

     insertPerson(payload:Person){
        try {
            const repo:PeopleRepository= new PeopleStorageGateway();
            const interactor:InsertPersonInteractor = new InsertPersonInteractor(repo);
            return interactor.execute(payload)
            
        } catch (error) {
            return {
                result:false,
                message:error
            } as ResponseApi<Person>
        }
     }

     updatePerson(payload:Person){
        try {
            const repo:PeopleRepository = new PeopleStorageGateway();
            const interactor:UpdatePersonInteractor= new UpdatePersonInteractor(repo);
            return interactor.execute(payload);
            
        } catch (error) {
            return{
                result: false,
                message:error
            }as ResponseApi<Person>
            
        }
     }
}
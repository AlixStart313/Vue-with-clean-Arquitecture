import { ResponseApi } from "@/kernel/types";
import PeopleRepository from "./../use-cases/ports/people.repository";
import { AllPeopleDto } from "../entities/dto/AllPeopleDto";
import  Api from "./../../../config/http.client.gateway";
import { Person } from "../entities/person";
import { entity } from '../../../kernel/types';


export class PeopleStorageGateway implements PeopleRepository{

    async updatePerson(payload: Person): Promise<ResponseApi<Person>> {
        const resp = await Api.doPut(`/users/${payload.id}`,payload);
        return {
            status:resp.status,
            entity:resp.data,
            result:true 
        } as ResponseApi<Person>
    }
    
    async getAllPeope(page: number): Promise<ResponseApi<AllPeopleDto>> {
        const resp = await Api.doGet(`/users?pages=${page}`);
        
        return{
            status:resp.status,
            entity:resp.data
        } as ResponseApi<AllPeopleDto>;
    }

    async insertPerson(payload: Person): Promise<ResponseApi<Person>> {
        const resp = await Api.doPost('/users',payload);
        return {
            status:resp.status,
            entity:resp.data,
            result:true
        } as ResponseApi<Person>
    }
    
}
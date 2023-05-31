import { ResponseApi } from "@/kernel/types";
import PeopleRepository from "./../use-cases/ports/people.repository";
import { AllPeopleDto } from "../entities/AllPeopleDto";
import  Api from "./../../../config/http.client.gateway";
export class PeopleStorageGateway implements PeopleRepository{
    async getAllPeope(page: number): Promise<ResponseApi<AllPeopleDto>> {
        const resp = await Api.doGet('api/users?pages=${page}');
        return{
            status:resp.status,
            entity:resp.data
        } as ResponseApi<AllPeopleDto>;
    }
    
}
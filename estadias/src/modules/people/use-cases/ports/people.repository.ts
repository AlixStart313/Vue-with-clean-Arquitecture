import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../../entities/AllPeopleDto";
import { Person } from "../../entities/person";

export default interface PeopleRepository{
    getAllPeope(page:number): Promise<ResponseApi<AllPeopleDto>>;

    insertPerson(payload:Person):Promise<ResponseApi<Person>>;
}
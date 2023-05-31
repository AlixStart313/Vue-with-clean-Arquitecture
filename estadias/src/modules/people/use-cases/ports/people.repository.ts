import { ResponseApi } from "@/kernel/types";
import { AllPeopleDto } from "../../entities/AllPeopleDto";

export default interface PeopleRepository{
    getAllPeope(page:number): Promise<ResponseApi<AllPeopleDto>>;
}
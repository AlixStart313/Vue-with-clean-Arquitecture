import { UseCase } from '@/kernel/contracts';
import { ResponseApi } from '../../../kernel/types';
import { AllPeopleDto } from '../entities/AllPeopleDto';
import PeopleRepository from './ports/people.repository';


export class getAllPeopleInteractor implements UseCase<number,ResponseApi<AllPeopleDto>>{

constructor(private readonly peopleRepository: PeopleRepository){}


    execute(page?: number | undefined): Promise<ResponseApi<AllPeopleDto>> {
            
        if(!page)
            page=1;
        
        return this.peopleRepository.getAllPeope(page);
    }

}
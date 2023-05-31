import {PeopleDto} from './dto/PeopleDto'

export type AllPeopleDto={
    page:number,
    per_page:number,
    total_pages:number,
    data:Array<PeopleDto>
}
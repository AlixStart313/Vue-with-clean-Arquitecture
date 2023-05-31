export interface UseCase<TInput,TOutPut>{
    execute(payload?:TInput): Promise <TOutPut>
}
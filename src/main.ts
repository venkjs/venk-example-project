import { AppDataSource } from './config/DbConfig';
import { Components } from './Components';
import { VenkApplication, VenkInitiliazer } from "venk";

@VenkApplication()
export class VenkExampleApplication{
    public main(){
        AppDataSource.initialize()
        VenkInitiliazer.run(Components)
    }
}
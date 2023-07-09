import inquirer from "inquirer";
import promptSync from "prompt-sync";
export default class Menu{
    public list(type:String){
        if(type==="start"){
            return inquirer.prompt([{
                type:"list",
                message:"Welcome to the static website builder",
                name:"start",
                choices:["See website templates","Start build website","Exit"]
            }])
        }
        else if(type==="main"){
            return inquirer.prompt([{
                type:"list",
                message:"Build your own website",
                name:"main",
                choices:["See my website projects","New website project","Delete website project","Back","Exit"]
            }])
        }
        else if(type=="process"){
            return inquirer.prompt([{
                type:"list",
                message:"Website building process",
                name:"process",
                choices:["Continue build web","See building process","Update web","Exit"]
            }])
        }  
        else if(type=="design"){
            return inquirer.prompt([{
                type:"list",
                message:"Website design color",
                name:"design",
                choices:["Green and dark colored","Light blue,white and coral colored","Coral and blue colored","Exit"]
            }])
        }  
    }
    public input(){
        return promptSync();
    }
}
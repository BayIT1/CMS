import Menu from "./menu.js";

export default class Design{
    private menu:Menu=new Menu();
    private input=this.menu.input();
    private colors={
        navbar:"",
        textPrimary:"",
        button:"",
        bgDark:"",
        bgPrimary:"",
        mainFooter:""
    }
    public setColor(){
        // let input:any=this.menu.list("design");
        // input.then((list:any)=>{
        //     switch(list.design){
        //         case "Green and dark colored":{
        //             this.colors.navbar="navbar";
        //             this.colors.textPrimary="text-primary";
        //             this.colors.button="button";
        //             this.colors.bgDark="bg-dark";
        //             this.colors.bgPrimary="bg-primary";
        //             this.colors.mainFooter="main-footer";
        //             break;
        //         }
        //         case "Light blue,white and coral colored":{
        //             break;
        //         }
        //         case "Coral and blue colored":{
        //             break;
        //         }
        //         default:{   
        //             process.exit(1)
        //         }
        //     }
        // })
        console.log("1:Green and dark colored");
        console.log("2:Light blue,white and coral colored");
        console.log("3:Coral and blue colored");
        let input=parseFloat(this.input(""));
        switch(input){
            case 1:{
                this.colors.navbar="navbar";
                this.colors.textPrimary="text-primary";
                this.colors.button="button";
                this.colors.bgDark="bg-dark";
                this.colors.bgPrimary="bg-primary";
                this.colors.mainFooter="main-footer";
                break;
            }
            case 2:{
                console.log("Design 2");
                break;
            } 
            case 3:{
                console.log("Design 3");
                break;
            }
            default:{
                process.exit(1);
            }
        }
    }
    public getColors():object{
        return this.colors;
    }
}
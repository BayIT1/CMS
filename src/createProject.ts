import Menu from "./menu.js";
import fs from "fs";
import path from "path";
import SaveProject from "./saveProject.js";
import BuildingProcess from "./buildingProcess.js";
import Design from "./designBuild.js";
export default class Create{
    private createdLists:Array<String>=new Array();
    private webName: String=new String();
    private menu:Menu=new Menu();
    private input=this.menu.input();
    private saveProject:SaveProject=new SaveProject();
    private title:String=new String();
    private buildingProcess:BuildingProcess=new BuildingProcess();
    // private design:Design=new Design();
    
    public createWeb(navBar:String):void{
        console.log("Write a website file name");
        let webName=this.input("");
        console.log("Write a website title")
        this.webName=webName;
        this.title=this.input("");
        // this.design.setColor();
        this.addWebList();
        this.setBuild(navBar);
        this.buildingProcess.process(this);
        
    }
    
    public setBuild(navBar:String){
        this.buildWeb(navBar);  
    }
    private addWebList():void{
        this.saveProject.addFile(this.webName);
        this.createdLists.push(this.webName);
    }
    public seeWebProjects():void{
        this.createdLists.forEach((e,i)=>{
            console.log((i+1)+": "+e)
        })
    }
    private buildWeb(navBar:String){
       
        let html:string=`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="css/style.css" />
          
          <script
          src="https://kit.fontawesome.com/a1fbabe143.js"
          crossorigin="anonymous"
         ></script>
          <title>${this.title}</title>
        </head>
        <body>
        ${navBar}
        </body>
        </html>`;
        fs.writeFileSync(
            path.join(
              `D:\\ШУТИС-ПХ\\2-р курс\\2-р сем\\FCS311 Бүтээлт\\BiyDaalt4\\dist\\projects`,
              `${this.webName}.html`
            ),html);
        // fs.writeFile("D:\\ШУТИС-ПХ\\2-р курс\\2-р сем\\FCS311 Бүтээлт\\BiyDaalt4\\dist\\projects\\index.html",html,err=>{
        //     if(err){
        //         console.log(err);
        //     }
        // });
       
    }
}
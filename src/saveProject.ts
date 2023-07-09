import fs from "fs";
import path from "path";
import Menu from "./menu.js";
export default class SaveProject{ 
    private webName:String=new String;
    private webList:Array<String>=new Array();
    private menu:Menu=new Menu();
    private input=this.menu.input();
    private checkedWeb:String=new String();
    public addFile(webName:String){
        this.webName=webName;
        this.writeWeb();
    }
    private writeWeb(){
        fs.writeFile(path.join(
            `D:\\ШУТИС-ПХ\\2-р курс\\2-р сем\\FCS311 Бүтээлт\\BiyDaalt4\\projectNames\\project.txt`,
          ),this.webName.toString()+"\n",{encoding:"utf-8",flag:"a"},(err)=>{
            if(err){
                console.log("Error",err);
            }
            else{
                console.log("Success");
            }
          });
          
    }
    public getProjects(){
        this.readProjects();
        this.webList.forEach((v,i)=>{
            console.log((i+1)+":"+v);
        })
        let number=parseInt(this.input(""));
        let check=this.webList.filter((v,i)=>{
            if(number===(i+1)){
                return v;
            }
        });
        this.checkedWeb=check[0];
    }
    public getWebName():String{
        return this.checkedWeb;
    }
    private readProjects(){
        let data=fs.readFileSync(path.join(
            `D:\\ШУТИС-ПХ\\2-р курс\\2-р сем\\FCS311 Бүтээлт\\BiyDaalt4\\projectNames\\project.txt`
          ),{encoding:"utf-8",flag:"r"});
          this.webList=data.split("\n");
    }
}
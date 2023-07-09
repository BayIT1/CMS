import Menu from "./menu.js";
import Create from "./createProject.js";
import SaveProject from "./saveProject.js";
import LiveServer from "./liveServer.js";
class Main{
    private menu:Menu=new Menu();
    private create:Create=new Create(); 
    private saveProject:SaveProject=new SaveProject();
    private liveServer:LiveServer=new LiveServer();
    public start():void{
        let input:any;
        input=this.menu.list("start");
        input.then((list:any)=>{
            switch(list.start){
                case "See website templates":{
                    console.log("templete will this menu");
                    this.start();
                    break;
                }
                case "Start build website":{
                    this.mainProcess();
                    break;
                }
                default :{
                    process.exit(1);
                }
            }      
        })
    }
    private mainProcess():void{
        let input:any;
        input=this.menu.list("main");
        input.then((list:any)=>{
            switch(list.main){
                case "See my website projects":{
                    console.log("this is my websites");
                    // this.create.seeWebProjects();
                    this.saveProject.getProjects();
                    this.liveServer.start(this.saveProject.getWebName());
                    this.mainProcess();
                    break;
                }
                case "New website project":{
                    this.create.createWeb("");
                    break;
                }
                case "Delete website project":{
                    console.log("delete");
                    break;
                }
                case "Back":{
                    this.start();
                    break;
                }
                default:{
                    process.exit(1);
                }
            }
        })
    }
}
export default Main;
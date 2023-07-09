import Build from "./build.js";
import Create from "./createProject.js";
import Menu from "./menu.js";
import LiveServer from "./liveServer.js";

export default class BuildingProcess{
    private menu:Menu=new Menu();
    private build:Build=new Build();
    private update:Build=new Build();
    private liveServer:LiveServer=new LiveServer();
    public isProcess:boolean=true;
    public process(create:Create){
        if(this.build.isProcess){
            let input:any;
            input=this.menu.list("process");
            input.then((list:any)=>{
                switch(list.process){
                    case "Continue build web":{
                        
                        this.build.setBuilding(create);
                        this.process(create);
                        break;
                    }
                    case "See building process":{
                        this.liveServer.start("Template");               
                        break;
                    }
                    case "Update web":{
                        this.update.setBuilding(create);
                        this.process(create);
                        break;
                    }
                    default:{
                        process.exit(1);
                    }
                }
            })
        }
        else{
            console.log("Web site build finished");
        }
        
    }
}
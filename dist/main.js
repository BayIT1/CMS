import Menu from "./menu.js";
import Create from "./createProject.js";
import SaveProject from "./saveProject.js";
import LiveServer from "./liveServer.js";
class Main {
    constructor() {
        this.menu = new Menu();
        this.create = new Create();
        this.saveProject = new SaveProject();
        this.liveServer = new LiveServer();
    }
    start() {
        let input;
        input = this.menu.list("start");
        input.then((list) => {
            switch (list.start) {
                case "See website templates": {
                    console.log("templete will this menu");
                    this.start();
                    break;
                }
                case "Start build website": {
                    this.mainProcess();
                    break;
                }
                default: {
                    process.exit(1);
                }
            }
        });
    }
    mainProcess() {
        let input;
        input = this.menu.list("main");
        input.then((list) => {
            switch (list.main) {
                case "See my website projects": {
                    console.log("this is my websites");
                    this.saveProject.getProjects();
                    this.liveServer.start(this.saveProject.getWebName());
                    this.mainProcess();
                    break;
                }
                case "New website project": {
                    this.create.createWeb("");
                    break;
                }
                case "Delete website project": {
                    console.log("delete");
                    break;
                }
                case "Back": {
                    this.start();
                    break;
                }
                default: {
                    process.exit(1);
                }
            }
        });
    }
}
export default Main;

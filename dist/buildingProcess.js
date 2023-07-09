import Build from "./build.js";
import Menu from "./menu.js";
import LiveServer from "./liveServer.js";
export default class BuildingProcess {
    constructor() {
        this.menu = new Menu();
        this.build = new Build();
        this.update = new Build();
        this.liveServer = new LiveServer();
        this.isProcess = true;
    }
    process(create) {
        if (this.build.isProcess) {
            let input;
            input = this.menu.list("process");
            input.then((list) => {
                switch (list.process) {
                    case "Continue build web": {
                        this.build.setBuilding(create);
                        this.process(create);
                        break;
                    }
                    case "See building process": {
                        break;
                    }
                    case "Update web": {
                        this.update.setBuilding(create);
                        this.process(create);
                        break;
                    }
                    default: {
                        process.exit(1);
                    }
                }
            });
        }
        else {
            console.log("Web site build finished");
        }
    }
}

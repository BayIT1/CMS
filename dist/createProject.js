import Menu from "./menu.js";
import fs from "fs";
import path from "path";
import SaveProject from "./saveProject.js";
import BuildingProcess from "./buildingProcess.js";
export default class Create {
    constructor() {
        this.createdLists = new Array();
        this.webName = new String();
        this.menu = new Menu();
        this.input = this.menu.input();
        this.saveProject = new SaveProject();
        this.title = new String();
        this.buildingProcess = new BuildingProcess();
    }
    createWeb(navBar) {
        console.log("Write a website file name");
        let webName = this.input("");
        console.log("Write a website title");
        this.webName = webName;
        this.title = this.input("");
        this.addWebList();
        this.setBuild(navBar);
        this.buildingProcess.process(this);
    }
    setBuild(navBar) {
        this.buildWeb(navBar);
    }
    addWebList() {
        this.saveProject.addFile(this.webName);
        this.createdLists.push(this.webName);
    }
    seeWebProjects() {
        this.createdLists.forEach((e, i) => {
            console.log((i + 1) + ": " + e);
        });
    }
    buildWeb(navBar) {
        let html = `<!DOCTYPE html>
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
        fs.writeFileSync(path.join(`D:\\ШУТИС-ПХ\\2-р курс\\2-р сем\\FCS311 Бүтээлт\\BiyDaalt4\\dist\\projects`, `${this.webName}.html`), html);
    }
}

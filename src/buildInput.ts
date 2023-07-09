import Menu from "./menu.js";

export default class BuildInput{
    private menu:Menu=new Menu();
    private input=this.menu.input();
    
    public getNavbar():any{
        let menuList:Array<String>=new Array();
        console.log("Write a your website title")
        let titleName=this.input("");
        for(let i=0; i<4; i++){
          console.log("Add to menu list name "+i)
          menuList[i]=this.input("");   
        }
        return{
            titleName,
            menuList
        }
    }
    public getShowcase():any{
      console.log("Write a showcase content");
      let showcaseContent=this.input("");
      console.log("Write a showcase info")
      let showCaseInfo=this.input("");
      console.log("Write a button text");
      let button=this.input("");
      console.log("Write a image link");
      let backImage=this.input("");
      return{
        showcaseContent,
        showCaseInfo,
        button,
        backImage
      }
    }
    public getFirstSection():any{
        let heading:Array<String>=new Array();
        let itemTitle:Array<String>=new Array();
        let itemText:Array<String>=new Array();
        for(let i=0; i<3; i++){
            console.log("Write a heading "+i+" word");
            heading[i]=this.input("");
        }
        for(let i=0; i<3; i++){
            console.log("Write a item title "+i);
            itemTitle[i]=this.input("");
            console.log("Write a item text "+i);
            itemText[i]=this.input("");
        }
        return{
            heading,
            itemTitle,
            itemText
        }
    }
    public getSecondSection():any{
        let list:Array<String>=new Array();
        console.log("Input a image link");
        let imageLink=this.input("");
        console.log("Write a heading first word");
        let firstWord=this.input("");
        console.log("Write a heading second word");
        let secondWord=this.input("");
        console.log("Write a heading text");
        let headingText=this.input("");
        console.log("Write a list title");
        let listTitle=this.input("");
        for(let i=0; i<5; i++){
            console.log("List"+(i+1));
            list[i]=this.input("");
        }
        return {
            imageLink,
            firstWord,
            secondWord,
            headingText,
            listTitle,
            list
        }
    }
    public getThirdSection():any{
        let labelName:Array<String>=new Array();
        let type:Array<String>=new Array();
        let placeholder:Array<String>=new Array();
        console.log("Write a title");
        let title=this.input("");
        console.log("Write a text title");
        let text=this.input("");
        for(let i=0; i<4; i++){
            console.log("Write a label name"+(i+1));
            labelName[i]=this.input("");
            console.log("Write a type"+(i+1));
            type[i]=this.input("");
            console.log("Write a place holder"+(i+1));
            placeholder[i]=this.input("");
        }
        console.log("Write a more news title");
        let newsTitle=this.input("");
        console.log("Write a more news");
        let news=this.input("");
        return{
            newsTitle,
            news,
            title,
            text,
            labelName,
            type,
            placeholder
        }
    }
    public getFooter():any{
        console.log("Write a footer");
        let footer=this.input("");
        return{
            footer
        }
    }
}
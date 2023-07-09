import BuildInput from "./buildInput.js";
export default class Build {
    constructor() {
        this.body = {
            navBar: "",
            showCase: "",
            firstSection: "",
            secondSection: "",
            thirdSection: "",
            footer: ""
        };
        this.result = new String();
        this.active = {
            isShowCase: false,
            isNavbar: true,
            isSectionOne: false,
            isSectionTwo: false,
            isSectionThree: false,
            isFooter: false
        };
        this.isProcess = true;
        this.buildInput = new BuildInput();
    }
    setBuilding(create) {
        if (this.active.isFooter) {
            this.setFooter();
        }
        if (this.active.isSectionThree) {
            this.thirdSection();
        }
        if (this.active.isSectionTwo) {
            this.secondSection();
        }
        if (this.active.isSectionOne) {
            this.firstSection();
        }
        if (this.active.isShowCase) {
            this.setShowcase();
        }
        if (this.active.isNavbar) {
            this.setNavbar();
        }
        this.result = this.body.navBar.concat(this.body.showCase, this.body.firstSection, this.body.secondSection, this.body.thirdSection, this.body.footer);
        create.setBuild(this.result);
    }
    setNavbar() {
        let input = this.buildInput.getNavbar();
        this.body.navBar = `
            <!-- undsen tses -->
            <nav id="navbar">
              <h1 class="logo">
                <span class="text-primary">
                  <i class="fas fa-book-open"></i>
                  ${input.titleName}
                </span>
              </h1>
              <ul>
                <li><a href="#home">${input.menuList[0]}</a></li>
                <li><a href="#what">${input.menuList[1]}</a></li>
                <li><a href="#who">${input.menuList[2]}</a></li>
                <li><a href="#contact">${input.menuList[3]}</a></li>
              </ul>
            </nav>`;
        this.active.isNavbar = false;
        this.active.isShowCase = true;
    }
    setShowcase() {
        let input = this.buildInput.getShowcase();
        console.log("Write a showcase content");
        this.body.showCase = ` <header id="showcase">
      <img
      src="${input.backImage}"
      height="740px"
      width="1470px"
    />
      <div class="showcase-content">
        <h1 class="l-heading">${input.showcaseContent}</h1>
        <p class="lead">
          ${input.showCaseInfo}
        </p>
        <a href="#what" class="button">${input.button}</a>
      </div>
    </header>`;
        this.active.isShowCase = false;
        this.active.isSectionOne = true;
    }
    firstSection() {
        let input = this.buildInput.getFirstSection();
        this.body.firstSection = `<section id="what" class="bg-light py-1">
      <div class="container">
        <h1 class="m-heading">
          ${input.heading[0]} <span class="text-primary">${input.heading[1]}</span> ${input.heading[2]}
        </h1>
        <div class="items">
          <div class="item">
            <i class="fas fa-university fa-2x"></i>
            <div class="text">
              <h3>${input.itemTitle[0]}</h3>
              <p>
              ${input.itemText[0]}
              </p>
            </div>
          </div>
          <div class="item">
            <i class="fas fa-book-reader fa-2x"></i>
            <div class="text">
              <h3>${input.itemTitle[1]}</h3>
              <p>
              ${input.itemText[1]}
              </p>
            </div>
          </div>
          <div class="item">
            <i class="fas fa-pencil-alt fa-2x"></i>
            <div class="text">
              <h3>${input.itemTitle[2]}</h3>
              <p>
              ${input.itemText[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
        this.active.isSectionOne = false;
        this.active.isSectionTwo = true;
    }
    secondSection() {
        let input = this.buildInput.getSecondSection();
        this.body.secondSection = `<section id="who">
      <img src="${input.imageLink}" alt="" height="520px" />
      <div class="who-text bg-dark p-2">
        <h2 class="m-heading"><span class="text-primary">${input.firstWord}</span> ${input.secondWord}</h2>
        <p>
          ${input.headingText}
        </p>
        <h3>${input.listTitle}</h3>
        <ul class="list">
          <li>${input.list[0]}</li>
          <li>${input.list[1]}</li>
          <li>${input.list[2]}</li>
          <li>${input.list[3]}</li>
          <li>${input.list[4]}</li>
        </ul>
      </div>
    </section>`;
        this.active.isSectionTwo = false;
        this.active.isSectionThree = true;
    }
    thirdSection() {
        let input = this.buildInput.getThirdSection();
        this.body.thirdSection = ` <section id="contact">
      <div class="contact-form bg-primary p-2">
        <h2 class="m-heading">${input.title}</h2>
        <p>${input.text}</p>
        <form action="app.js">
          <div class="form-group">
            <label for="name">${input.labelName[0]}</label><br />
            <input
              type="${input.type[0]}"
              name="name"
              id="name"
              placeholder="${input.placeholder[0]}"
            />
          </div>
          <div class="form-group">
            <label for="mail">${input.labelName[1]}</label><br />
            <input
              type="${input.type[1]}"
              name="email"
              id="email"
              placeholder="${input.placeholder[1]}"
            />
          </div>
          <div class="form-group">
            <label for="number">${input.labelName[2]}</label><br />
            <input
              type="${input.type[2]}"
              name="phone"
              id="name"
              placeholder="${input.placeholder[2]}"
            />
          </div>
          <div class="form-group">
            <label for="message">${input.labelName[3]}</label><br />
            <textarea
              name="name"
              id="name"
              cols="30"
              rows="10"
              placeholder="${input.placeholder[3]}"
            ></textarea>
          </div>
          <div class="form-group">
            <input type="submit" value="Send" class="button btn-dark" />
          </div>
        </form>
      </div>
      <div class="map p-2">
      <h2 class="m-heading">${input.newsTitle}</h2>
      <div class="text">${input.news}</div>
      </div>
    </section>`;
        this.active.isSectionThree = false;
        this.active.isFooter = true;
    }
    setFooter() {
        let input = this.buildInput.getFooter();
        this.body.footer = ` <footer id="main-footer" class="bg-dark text-center py-1">
      <div class="container">
        <p>&copy ${input.footer}</p>
      </div>
    </footer>`;
        this.active.isFooter = false;
        this.isProcess = false;
    }
}

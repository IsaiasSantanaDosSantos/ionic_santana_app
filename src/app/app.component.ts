import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./language.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  links: string[] = [];
  appPages = [
    { title: "Home", url: "/home", icon: "home" },
    { title: "About me", url: "/about", icon: "people" },
    { title: "Services", url: "/services", icon: "code-working" },
    { title: "Resume", url: "/resume", icon: "document" },
    { title: "Portfolio", url: "/portfolio", icon: "newspaper" },
    { title: "References", url: "/references", icon: "ribbon" },
    { title: "Contact", url: "/contact", icon: "chatbubbles" },
  ];
  selectedLanguage: string = "gb";

  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];
  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.setDefaultLang("en");
    this.translate.use("en");
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
    if (this.languageService.getSelectedLanguage() === "gb") {
      this.selectedLanguage = "gb";
      this.links = [
        "Home",
        "About me",
        "Services",
        "Resume",
        "Portfolio",
        "References",
        "Contact",
      ];
    }
    if (this.languageService.getSelectedLanguage() === "br") {
      this.selectedLanguage = "br";
      this.links = [
        "Início",
        "Sobre mim",
        "Serviços",
        "Currículo",
        "Portfólio",
        "Referências",
        "Contato",
      ];
    }
    this.languageService.getWords();
    this.appPages = [
      { title: this.links[0], url: "/home", icon: "home" },
      { title: this.links[1], url: "/about", icon: "people" },
      { title: this.links[2], url: "/services", icon: "code-working" },
      { title: this.links[3], url: "/resume", icon: "document" },
      { title: this.links[4], url: "/portfolio", icon: "newspaper" },
      { title: this.links[5], url: "/references", icon: "ribbon" },
      { title: this.links[6], url: "/contact", icon: "chatbubbles" },
    ];
  }
  getTranslated(key: string): string {
    return this.translate.instant(key);
  }
}

/*
   // { title: "Inbox", url: "/folder/inbox", icon: "mail" },
      // { title: "Outbox", url: "/folder/outbox", icon: "paper-plane" },
      // { title: "Favorites", url: "/folder/favorites", icon: "heart" },
      // { title: "Archived", url: "/folder/archived", icon: "archive" },
      // { title: "Trash", url: "/folder/trash", icon: "trash" },
      // { title: "Spam", url: "/folder/spam", icon: "warning" },
*/

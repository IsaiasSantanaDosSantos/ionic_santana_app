import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./language.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  //Criei este array para tentar fazer algo na tradução do Menu
  enghLinks: string[] = [
    "Home",
    "About",
    "Services",
    "Resume",
    "Portfolio",
    "References",
    "Contact",
  ];
  portLinks: string[] = [
    "Início",
    "Sobre",
    "Serviços",
    "Currículo",
    "Portfólio",
    "Referências",
    "Contatos",
  ];

  public appPages = [
    { title: "Home", url: "/home", icon: "home" },
    { title: "About", url: "/about", icon: "people" },
    { title: "Services", url: "/services", icon: "code-working" },
    { title: "Resume", url: "/resume", icon: "document" },
    { title: "Portfolio", url: "/portfolio", icon: "newspaper" },
    { title: "References", url: "/references", icon: "ribbon" },
    { title: "Contact", url: "/contact", icon: "chatbubbles" },
    // { title: "Inbox", url: "/folder/inbox", icon: "mail" },
    // { title: "Outbox", url: "/folder/outbox", icon: "paper-plane" },
    // { title: "Favorites", url: "/folder/favorites", icon: "heart" },
    // { title: "Archived", url: "/folder/archived", icon: "archive" },
    // { title: "Trash", url: "/folder/trash", icon: "trash" },
    // { title: "Spam", url: "/folder/spam", icon: "warning" },
  ];
  selectedLanguage: string = "br";

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
    }
    if (this.languageService.getSelectedLanguage() === "br") {
      this.selectedLanguage = "br";
    }
    this.languageService.getWords();
  }
  getTranslated(key: string): string {
    return this.translate.instant(key);
  }
}

import { Component, OnInit, AfterViewInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "./language.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  words: string[] = [];
  currentWordIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  text = "";

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

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this.words = ["Web Developer"];
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.type();
    }, 1500);
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
  type() {
    const currentWord = this.words[this.currentWordIndex];
    const totalChars = currentWord.length;

    if (!this.text || this.text.length === totalChars) {
      this.isDeleting = true;
    }

    if (this.isDeleting && this.text.length === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }

    this.text = this.isDeleting
      ? currentWord.slice(0, this.text.length - 1)
      : currentWord.slice(0, this.text.length + 1);

    const timeout = this.isDeleting ? 0 : 350;

    setTimeout(() => {
      this.type();
    }, timeout);

    if (this.text.length === 13) {
      this.text = "";
    }
  }
}

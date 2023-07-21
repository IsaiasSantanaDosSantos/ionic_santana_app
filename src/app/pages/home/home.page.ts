import { Component, OnInit, AfterContentInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../../language.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  words: string[] = [];
  currentWordIndex = 0;
  isDeleting = false;
  dinamic_text_value = "";
  images: string[] = [];
  currentImageIndex = 0;

  constructor(
    private translate: TranslateService,
    public nav: NavController,
    private languageService: LanguageService,
  ) {}

  ngOnInit() {
    this.languageService.toggleLanguage();
    this.words = this.languageService.getWords();
    // this.toggleLanguage();
    this.images = [
      "assets/img/background-1.jpg",
      "assets/img/background-2.jpg",
      "assets/img/background-3.jpg",
      "assets/img/background-4.jpg",
      "assets/img/background-5.jpg",
      "assets/img/background-6.jpg",
      "assets/img/background-7.jpg",
    ];
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.type();
      this.rotateImages();
    }, 1500);
  }
  type() {
    const currentWord = this.words[this.currentWordIndex];
    const isComplete =
      !this.isDeleting && this.dinamic_text_value === currentWord;
    const isDeletingComplete =
      this.isDeleting && this.dinamic_text_value === "";

    if (isComplete) {
      this.isDeleting = true;
      setTimeout(() => {
        this.type();
      }, 1000); 
    } else if (isDeletingComplete) {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      setTimeout(() => {
        this.isDeleting = false;
        this.type();
      }, 500); 
    } else if (this.isDeleting) {
      this.dinamic_text_value = currentWord.slice(
        0,
        this.dinamic_text_value.length - 1,
      );
      setTimeout(() => {
        this.type();
      }, 100); 
    } else {
      this.dinamic_text_value = currentWord.slice(
        0,
        this.dinamic_text_value.length + 1,
      );
      setTimeout(() => {
        this.type();
      }, 100); 
    }
  }
  rotateImages() {
    const homeBox = document.querySelector(".homeBox") as HTMLElement;
    if (homeBox) {
      setInterval(() => {
        const backgroundImage = `url(${this.images[this.currentImageIndex]})`;
        homeBox.style.backgroundImage = backgroundImage;
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      }, 4000);
    }
  }
  getTranslated(key: string): string {
    return this.translate.instant(key);
  }
  // toggleLanguage() {
  //   this.words = this.languageService.getWords();
  // }
  toPortfolioPage() {
    this.nav.navigateForward("portfolio");
  }
}

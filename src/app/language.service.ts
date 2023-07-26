import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  selectedLanguage: string = "gb";

  constructor(private translate: TranslateService) {}

  toggleLanguage() {
    if (this.selectedLanguage === "gb") {
      this.translate.use("pt");
      this.selectedLanguage = "br";
    } else {
      this.translate.use("en");
      this.selectedLanguage = "gb";
    }
  }

  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }
  getWords(): string[] {
    return this.selectedLanguage === "gb"
      ? ["Santana", "Web", "Developer"]
      : ["Desenvolvedor", "Web", "Santana"];
  }
}

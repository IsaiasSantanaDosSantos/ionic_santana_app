import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit, OnDestroy {
  @ViewChild("contactForm") myForm!: HTMLFormElement;
  @ViewChild("windowSend", { static: false }) windowSend!: ElementRef;
  name: string = "";
  email: string = "";
  message: string = "";
  errorMessage: string = "";
  showAirplaneIcon: boolean = true;
  private interval: any;
  showWindowSend: boolean = false;
  isLanguageChanged: boolean = false;

  constructor(private translate: TranslateService) {}
  ngOnInit() {
    this.interval = setInterval(() => {
      this.showAirplaneIcon = !this.showAirplaneIcon;
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

  submitForm(event: Event) {
    event.preventDefault();
    const nameRegex = /^[a-zA-Z ]{6,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(this.isLanguageChanged);
    if (!this.name) {
      // this.errorMessage = this.getTranslated("CONTACT.ERROR_NAME_REQUIRED");
      this.errorMessage = this.isLanguageChanged
        ? 'A "Name" must be added.'
        : 'Um "Nome" deve ser adicionado.';
      return;
    } else if (!nameRegex.test(this.name)) {
      // this.errorMessage = this.getTranslated("CONTACT.ERROR_NAME_INVALID");
      this.errorMessage = this.isLanguageChanged
        ? 'Invalid "Name"'
        : '"Nome" inválido';
      return;
    }
    if (!this.email) {
      // this.errorMessage = this.getTranslated("CONTACT.ERROR_EMAIL_REQUIRED");
      this.errorMessage = this.isLanguageChanged
        ? 'An "Email" must be added.'
        : 'Um "E-mail" deve ser adicionado.';
      return;
    } else if (!emailRegex.test(this.email)) {
      // this.errorMessage = this.getTranslated("CONTACT.ERROR_EMAIL_INVALID");
      this.errorMessage = this.isLanguageChanged
        ? 'Invalid "Email"'
        : '"E-mail" inválido';
      return;
    }
    if (!this.message) {
      // this.errorMessage = this.getTranslated("CONTACT.ERROR_MESSAGE_REQUIRED");
      this.errorMessage = this.isLanguageChanged
        ? 'A "Message" must be added.'
        : 'Uma "Mensagem" deve ser adicionada.';
      return;
    }
    this.name = "";
    this.email = "";
    this.message = "";
    this.errorMessage = "";
    this.handleSubmit(this.myForm["nativeElement"]);
  }
  handleSubmit(formulario: HTMLFormElement) {
    this.showWindowSend = true;
    setTimeout(() => {
      this.showWindowSend = false;
    }, 12000);

    const formData = new FormData(formulario);

    fetch(formulario.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getTranslated(key: string): string {
    const translation = this.translate.instant(key);

    if (this.translate.currentLang === "en") {
      this.isLanguageChanged = true;
    } else if (this.translate.currentLang === "pt") {
      this.isLanguageChanged = false;
    }

    return translation;
  }
  closedWiindow() {
    this.showWindowSend = false;
  }
}

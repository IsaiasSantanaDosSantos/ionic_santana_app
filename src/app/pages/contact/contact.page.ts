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
    if (!this.name || this.name.length < 5) {
      this.errorMessage = "Nome inválido";
      return;
    } else if (!this.email) {
      this.errorMessage = "E-mail inválido";
      return;
    } else if (!this.message) {
      this.errorMessage = 'O campo "Mensagem" não pode ficar em branco.';
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
    }, 15000);

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
    return this.translate.instant(key);
  }
  closedWiindow() {
    this.showWindowSend = false;
  }
}

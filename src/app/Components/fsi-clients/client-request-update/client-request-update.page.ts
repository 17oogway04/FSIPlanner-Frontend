import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ClientAssetPage } from '../client-asset/client-asset.page';

@Component({
  selector: 'app-client-request-update',
  templateUrl: './client-request-update.page.html',
  styleUrls: ['./client-request-update.page.scss'],
})
export class ClientRequestUpdatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_bo2x2wi', 'template_hhia7kk', e.target as HTMLFormElement, {
        publicKey: 'La1iMlI1CUOvEkAdd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload()
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}

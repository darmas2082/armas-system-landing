
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../layout/navbar/navbar';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink, Navbar],
  templateUrl: './contact.html'
})
export class Contact {
  submitted = false;

  form = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    position: '',
    service: '',
    budget: '',
    startDate: '',
    description: '',
    contactPreference: 'email',
    privacyAccepted: false
  };

  services = [
    'Desarrollo de software a medida',
    'Aplicaciones web con Angular',
    'Backend, APIs y microservicios',
    'Integración de sistemas',
    'Modernización de aplicaciones',
    'Bases de datos y reportes',
    'Asesoría tecnológica',
    'Otro servicio'
  ];

  submitForm(): void {
    this.submitted = true;

    if (
      !this.form.fullName.trim() ||
      !this.form.email.trim() ||
      !this.form.phone.trim() ||
      !this.form.service ||
      !this.form.description.trim() ||
      !this.form.privacyAccepted
    ) {
      return;
    }

    const subject = encodeURIComponent(
      `Nueva solicitud de servicio: ${this.form.service}`
    );

    const body = encodeURIComponent(
      `SOLICITUD DE CONTACTO\n\n` +
      `Nombre: ${this.form.fullName}\n` +
      `Empresa: ${this.form.company || 'No especificada'}\n` +
      `Correo: ${this.form.email}\n` +
      `Teléfono: ${this.form.phone}\n` +
      `Cargo: ${this.form.position || 'No especificado'}\n` +
      `Servicio: ${this.form.service}\n` +
      `Presupuesto estimado: ${this.form.budget || 'Por definir'}\n` +
      `Inicio previsto: ${this.form.startDate || 'Por definir'}\n` +
      `Preferencia de contacto: ${this.form.contactPreference}\n\n` +
      `Descripción del proyecto:\n${this.form.description}`
    );

    

    const recipient = 'contacto@tuconsultora.com';

    window.location.href =
      `mailto:${recipient}?subject=${subject}&body=${body}`;
  }
  showPrivacyModal = false;

    openPrivacyModal(): void {
    this.showPrivacyModal = true;
    }

    closePrivacyModal(): void {
    this.showPrivacyModal = false;
    }
}

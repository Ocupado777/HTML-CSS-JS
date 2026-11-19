import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Genero {
  idGenero: number;
  nombre: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  generos: Genero[] = [];
  form = { nombre: '' };
  editingId: number | null = null;
  isLoading = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.loadGeneros();
  }

  loadGeneros(): void {
    this.isLoading = true;
    this.http.get<Genero[]>('http://cine.runasp.net/api/Generos').subscribe({
      next: (data) => {
        this.generos = data;
        this.isLoading = false;
      },
      error: () => {
        this.showMessage('No se pudieron cargar los géneros.', 'error');
        this.isLoading = false;
      },
    });
  }

  submitForm(): void {
    const nombre = this.form.nombre.trim();

    if (!nombre) {
      this.showMessage('El nombre del género es obligatorio.', 'error');
      return;
    }

    const payload = { nombre };

    if (this.editingId !== null) {
      this.updateGenero(this.editingId, payload);
      return;
    }

    this.createGenero(payload);
  }

  createGenero(payload: { nombre: string }): void {
    this.http.post('http://cine.runasp.net/api/Generos', payload).subscribe({
      next: () => {
        this.resetForm();
        this.loadGeneros();
        this.showMessage('Género registrado correctamente.', 'success');
      },
      error: () => {
        this.showMessage('Error al registrar el género.', 'error');
      },
    });
  }

  updateGenero(id: number, payload: { nombre: string }): void {
    this.http.put(`http://cine.runasp.net/api/Generos/${id}`, payload).subscribe({
      next: () => {
        this.resetForm();
        this.loadGeneros();
        this.showMessage('Género actualizado correctamente.', 'success');
      },
      error: () => {
        this.showMessage('Error al actualizar el género.', 'error');
      },
    });
  }

  editGenero(genero: Genero): void {
    this.editingId = genero.idGenero;
    this.form = { nombre: genero.nombre };
    this.showMessage(`Editando el género: ${genero.nombre}`, 'success');
  }

  deleteGenero(genero: Genero): void {
    const confirmDelete = window.confirm(`¿Deseas eliminar el género "${genero.nombre}"?`);

    if (!confirmDelete) {
      return;
    }

    this.http.delete(`http://cine.runasp.net/api/Generos/${genero.idGenero}`).subscribe({
      next: () => {
        if (this.editingId === genero.idGenero) {
          this.resetForm();
        }

        this.loadGeneros();
        this.showMessage('Género eliminado correctamente.', 'success');
      },
      error: () => {
        this.showMessage('Error al eliminar el género.', 'error');
      },
    });
  }

  resetForm(): void {
    this.editingId = null;
    this.form = { nombre: '' };
  }

  private showMessage(text: string, type: 'success' | 'error'): void {
    this.message = text;
    this.messageType = type;
  }
}

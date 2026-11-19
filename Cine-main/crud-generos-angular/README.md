# CRUD de Géneros Angular

Aplicación cliente desarrollada en Angular para administrar los géneros de películas consumiendo la API REST disponible en http://cine.runasp.net.

## Descripción

La aplicación permite listar, registrar, editar y eliminar géneros mediante los endpoints de la API REST usando los métodos HTTP correctos:

- GET /api/Generos
- POST /api/Generos
- PUT /api/Generos/{id}
- DELETE /api/Generos/{id}

## Tecnologías utilizadas

- Angular 22
- TypeScript
- HTML5
- CSS3
- HTTP Client de Angular

## Instrucciones para ejecutar

1. Clona o descarga este proyecto.
2. Entra a la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

4. Inicia la aplicación:

```bash
npm start
```

5. Abre la siguiente URL en tu navegador:

```text
http://localhost:4200
```

## Endpoints utilizados

```text
GET    http://cine.runasp.net/api/Generos
POST   http://cine.runasp.net/api/Generos
PUT    http://cine.runasp.net/api/Generos/{id}
DELETE http://cine.runasp.net/api/Generos/{id}
```

## Validaciones

- Se valida que el nombre del género no esté vacío.
- Se muestra un mensaje de éxito o error según la respuesta de la API.
- Antes de eliminar, se solicita confirmación.

## Notas

La aplicación consume directamente la API pública proporcionada por el docente y usa correctamente las operaciones CRUD requeridas para la actividad.

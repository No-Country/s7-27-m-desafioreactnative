# URL Deploy

...

# Rutas

## /auth

### /auth/registro => registrarse localmente

uso: registro de usuario local
method: POST

body:

```json
{
  "username": "email",
  "password": "string"
}
```

### /auth/iniciarsesion

uso: inicia una session
method: POST

```json
{
  "username": "a@a.com",
  "password": "Asd123"
}
```

### /auth/google

uso: registro/inicio de sesión con google
method: GET

### /auth/facebook

uso: registro/inicio de sesión con facebook
method: GET

### /auth/recuperarcontrasena

uso: envia un mail con un link (30 min disponible) para el recupero de la contraseña
method: GET
query: username ej: /auth/recuperarcontrasena?username=a@a.com

## /mascota

### METHOD GET

uso: obtener todas las mascotas del usuario logeado

### METHOD POST

uso: crear nueva mascota del usuario logeado

body:

```json
{
  "nombre": "string", // Hasta 25 caracteres
  "tipoMascota": "string", // Id del tipo de mascota
  "caracteristicas": {
    // Estas o las caracteristicas que se definan
    "edad": "string",
    "sueno": 100,
    "energia": 100,
    "salud": 100,
    "felicidad": 100,
    "higiene": 100
  },
  "accesoriosEnUso": ["idAccesorio"] // Array de id's de los accesorios en uso
}
```

## /mascota/:idMascota

### METHOD GET

uso: obtener los detalles de una mascota en particular del usuario logeado

### METHOD POST

usp: modificar LAS CARACTERISTICAS de una mascota en particular del usuario logeado

body:

```json
{
  "edad": 1, // La/las caracteristicas que se deseen modificar
  "sueno": 50
}
```

### METHOD PUT

uso: modificar LOS ACCESORIOS EN USO de una mascota en particular del usuario logeado

body:

```json
{
  // por cada accesorio que pueda elegir para usar la mascota, va ir una propiedad
  // AVISAR QUE ACCESORIOS HAY QUE AGREGAR
  "fondo": "idFondo1", // id de fondo/cuadro que este en uso
  "cuadro": "idCuadro1"
}
```

### METHOD PATCH

uso: eliminar EL ACCESORIO EN USO ELEGIDO de una mascota en particular del usuario logeado

body:

```json
{
  "cuadro": "eliminar", // Enviar "eliminar" al accesorio que se desea dejar de usar
  "fondo": false
}
```

### METHOD DELETE

uso: eliminar una mascota en particular del usuario logeado

## /accesorio

### METHOD POST

uso: agregar accesorio ganado al usuario logeado

body:

```json
{
  "fondos": ["fondo1"], // Array con los id's del o de los fondos ganados
  "accesorios": ["cuadro1"] // Array con los id's del o de los accesorios ganados
}
```

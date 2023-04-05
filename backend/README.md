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
  "password": "string",
  "nombre": "Nombre Apellido", // hasta 25
  "nacimiento": "1988-09-18",
  "telefono": 541234567890
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
respuesta:

```json
{
  "mascotas": []
}
```

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
  "accesoriosEnUso": ["idAccesorio"], // Array de id's de los accesorios en uso
  "accesoriosGanados": ["idAccesorio"] // Array de los accesorios ganados
}
```

respuesta:

```json
{
  "nuevaMascota": {
    "nombre": "Nombre mascota",
    "tipoMascota": "a1",
    "caracteristicas": {
      "edad": 0,
      "sueno": 100,
      "energia": 100,
      "salud": 100,
      "felicidad": 100,
      "higiene": 100
    },
    "accesoriosEnUso": [],
    "accesoriosGanados": [],
    "_id": "642b29043fd10d97610e396a"
  }
}
```

## /mascota/:idMascota

### METHOD GET

uso: obtener los detalles de una mascota en particular del usuario logeado
respuesta:

```json
{
  "mascota": {
    "caracteristicas": {
      "edad": 0,
      "sueno": 100,
      "energia": 100,
      "salud": 100,
      "felicidad": 100,
      "higiene": 100
    },
    "_id": "642b29043fd10d97610e396a",
    "nombre": "Nombre mascota",
    "accesoriosEnUso": [],
    "accesoriosGanados": []
  }
}
```

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
  "fondo": "idFondo1", // id de fondo/cuadro que este en uso
  "cuadro": "idCuadro1"
}
```

### METHOD PATCH

uso: modificar LOS ACCESORIOS GANADOS de una mascota en particular del usuario logeado

body:

```json
{
  "fondos": ["idFondo1"], // ARRAY de id's de fondo/cuadro que vaya ganando
  "cuadros": ["idCuadro1"]
}
```

### METHOD DELETE

uso: eliminar una mascota en particular del usuario logeado

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

### /auth/recuperarcontrasena

uso: envia un mail con un link (30 min disponible) para el recupero de la contraseña
method: GET
query: username ej: /auth/recuperarcontrasena?username=a@a.com

### /auth/google

uso: registro/inicio de sesión con google
method: GET

### /auth/facebook

uso: registro/inicio de sesión con facebook
method: GET

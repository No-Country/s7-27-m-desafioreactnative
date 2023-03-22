# VARIABLES ENTORNO

PATH_FRONT=''
PORT=''
MAIL_ADMIN=""
CONTRASENA_ADMIN=""
DB_URI='mongodb://localhost:27017/noCountry'
SESSION_SECRET=''

# RUTAS

## /auth

### /auth/registro

method: "POST"
body:

```json
{
  "username": "b@b.com", // Requerido. Formato email
  "password": "Asd123", // Requerido
  "nombre": "Nombre Apellido", // String hasta 25 caracteres
  "nacimiento": "1988-09-18", // Date YYYY-MM-DD
  "telefono": 541234567890 // Numero, hasta 999999999999
}
```

### /auth/iniciarsesion

method: "POST"
body:

```json
{
  "username": "b@b.com", // Mail registrado
  "password": "Asd123" // Contraseña
}
```



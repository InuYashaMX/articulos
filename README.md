El proyecto consta de 2 partes

La primera es el webservice.
El ipn.js es el archivo que contiene un web service que cacha lo que viene del ipn de paypal y lo inserta en firebase

La segunda esta en public.
Tecnicamente envia a un sandbox de paypal, si lo quieres probar create una cuenta sandbox para poder "pagar" el ejemplo, no se te cobrara nada, pero podras ver que en firebase se crea el registro.

Para probarlo,
Create una cuenta en sandbox de paypal y edita el id del boton en public/index.html

Para pasarlo a tu firebase,
Debes crear una cuenta de servicio y reemplazar articulos-7fb9e932b2fc.json por tu json.

Para crear una cuenta de servicio puedes seguir esta guia.
https://firebase.google.com/docs/server/setup




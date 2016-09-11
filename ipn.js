var ipn = require('paypal-ipn');
var express = require('express');
var firebase = require("firebase");
var app = express();

firebase.initializeApp({
    serviceAccount: "articulos-7fb9e932b2fc.json",
    databaseURL: "https://articulos-7f94a.firebaseio.com"
});

var db = firebase.database().ref("/compras");

app.post('/paypal', function (req, res) {
    console.log("Datos que se obtienen de paypal ipn: " + req.body);

    /* para la version en produccion
     ipn.verify(params, function callback(err, msg) {
     */

    ipn.verify(req.body, {'allow_sandbox': true}, function callback(err, msg) { 
        if (err) {
            console.error(err);
        } else {
            if (req.body.payment_status === 'Completed') {
                db.push(req.body);
                console.log("Se completo");
            } else {
                console.log("No se completo ", req.body);
            }
        }
    });
});

app.listen(3000, function () {
    console.log('Iniciando servicio en el puerto 3000!');
});
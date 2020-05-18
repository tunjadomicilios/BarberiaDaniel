document.querySelector('#enviar').addEventListener('click',function(){

    let nombre = document.querySelector('#nombre').value;
    let telefono = document.querySelector('#telefono').value;
    let direccion = document.querySelector('#direccion').value;
    let fecha = document.querySelector('#fecha').value;


    if(nombre ===""|| telefono===""||direccion===""||fecha===""){
        alert("por favor ingresa todos los campos")
        return null;
    }else{
          let url = "https://api.whatsapp.com/send?phone=5730541958938&text=*Barberia_Daniel*%0A*Pedidos*%0A%0A*¿Cual es tu nombre?*%0A" + nombre + "%0A*tu telefono:*%0A" + telefono + "%0A*Direccion:*%0A" + direccion + "%0A*Fecha y Hora:*%0A" + fecha +  "%0A*si todo lo anterior es correcto por favor espera nuesra confirmacion*%0A";
    window.open(url);
    }


});

$(document).ready(function () {
  $("button").on("click", function () {
    $.ajax({
      tipe: "GET", //tipo de peticion, ouede ser GET, POST, PUT"
      url: "https://www.feriadosapp.com/api/holidays.json", //aqui va url a consultar
      dataType: "json", //puede ser xml, json, script, o html
      success: function (datosFecha) {
        datosFecha.data.forEach((element) => {
          $("#tableBody").append(
            `
            <tr>
                <th scope='row'>${element.date}</th>
                <td>${element.title}</td>
                <td>${element.extra}</td>
                
            </tr>`
          );
        });
        //si todo sale bien, se agrega la funcionalidad aqui.
      },
      error: function (datosFecha, jxhr) {
        // esta funcion se activa si ocurre algun errordurante el proceso
        if (jxhr != "success") {
          alert("ha ocurrido un error");
        }
      },
      async: true,
    });
  });
});

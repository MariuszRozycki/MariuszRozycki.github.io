$(document).ready(function () {
  // za pomoca tej metody mozna pobierac dane tylko w formacie JSON

  let getData = $('#get-data');
  const getDataProgrammer = () => {
    // 1 spsosob - jezeli wrzucimy wszystkie dane do jednego diva
    // $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    //   .done(function (data) {
    //     console.log(data);
    //     console.log(data.imie);
    //     console.log(data.nazwisko);
    //     console.log(data.zawod);
    //     console.log(data.firma);

    //     let div = $('<div></div>');
    //     div.text('Imie: ' + data.imie + ', ' + 'Nazwisko: ' + data.nazwisko + ', ' + 'Zawod: ' + data.zawod + ', ' + 'Firma: ' + data.firma);
    //     $(document.body).append(div);
    //     $(div).attr('id', 'dane-programisty');

    //   })
    //   .fail(function (error) {
    //     console.error(error);
    //   });



    // drugi sposob, jezeli stworzymy diva, a dla kazdej pary: klucz:wartosc nowy paragraf
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
      .done(function (data) {
        console.log(data);
        console.log(data.imie);
        console.log(data.nazwisko);
        console.log(data.zawod);
        console.log(data.firma);

        let div = $('<div></div>');
        $(document.body).append(div);
        div.attr('id', 'dane-programisty')

        let pName = $('<p></p>').text('Imie: ' + data.imie);
        let pSurname = $('<p></p>').text('Nazwisko: ' + data.nazwisko);
        let pOccupation = $('<p></p>').text('Zawod: ' + data.zawod);
        let pCompany = $('<p></p>').text('Zawod: ' + data.firma);

        pName.attr('class', 'red');
        pSurname.attr('class', 'red');
        pOccupation.attr('class', 'red');
        pCompany.attr('class', 'red');

        div.append(pName);
        div.append(pSurname);
        div.append(pOccupation);
        div.append(pCompany);

      })
      .fail(function (error) {
        console.error(error);
      });
  }

  getData.on('click', getDataProgrammer);

});
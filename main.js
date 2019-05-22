
var sceltaUtente = parseInt(prompt('inserisci il numero dei giocatori per visualizzare le statistiche'));

$.ajax({
  url:'https://www.boolean.careers/api/array/basket?n=numberPlayers',
  data: {
    n: sceltaUtente
  },
  method: 'GET',
  success: function(data){
    var ajax = data.response;
    console.log(ajax);
    for (var i = 0; i < ajax.length; i++) {

      var casella = $('.template .boxCode').clone();

      var codiceGiocatore = ajax[i].playerCode;

      console.log(codiceGiocatore);

      casella.text(codiceGiocatore);

      $('.sidebar').append(casella);
    }

    $('.boxCode').click(function(){
      var thisCode = $(this).text();
      for (var i = 0; i < ajax.length; i++) {
        var codiceGiocatore = ajax[i].playerCode;
        if (thisCode == codiceGiocatore) {
          console.log(ajax[i]);
          var source = $('#dataPlayer').html();
          var template = Handlebars.compile(source);
          var context = {codice : ajax[i].playerCode, rimbalzi : ajax[i].rebounds, punti : ajax[i].points, falli : ajax[i].fouls, tiriDa2punti : ajax[i].twoPoints, tiriDa3punti : ajax[i].threePoints};
          var html = template(context);
          $('.mainplayer').html(html);
        }
      }

    });
  },
  error: function(){

  }

});

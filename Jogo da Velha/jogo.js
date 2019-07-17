var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){

$('#btn_iniciar_jogo').click(function(){

    //Validacão se de digitacão dos nomes

    if ($('#apelido_jogador1').val() == '' ){
        alert('Favor digitar um apelido para o jogador 1');
        return false;
    }
    if ($('#apelido_jogador2').val() == '') {
        alert('Favor digitar um apelido para o jogador 1');
        return false;
    }
    // Exibir apelidos inseridos
    $('#nome_jogador_1').html($('#apelido_jogador1').val());
    $('#nome_jogador_2').html($('#apelido_jogador2').val());

    //Controla Visualizacao da pagina
    $('#pagina_inicial').hide();
    $('#palco_do_jogo').show();
    
});

$('.jogada').click(function(){

var id_campo_clicado = this.id;
jogada(id_campo_clicado);

});

function jogada(id){
    var icone = '';
    var ponto = 0;
    if((rodada % 2) == 1){
       icone = 'url("imagens/marcacao_1.png")';
        ponto = -1;
    }
    else{
        icone = 'url("imagens/marcacao_2.png")';
        ponto = 1;
    }
    rodada++;
    $('#'+id).css('background-image',icone);
    var linha_coluna = id.split('-');
    matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
    verifica_combinacao();

    }

function verifica_combinacao(){
    // Verifica a soma dos valora nas linhas
    var pontos = 0;
    for(i =1 ; i<=3; i++){
        pontos = pontos + matriz_jogo['a'][i];
    }
    ganhador(pontos);
    var pontos = 0;
    for (i = 1; i <= 3; i++) {
        pontos = pontos + matriz_jogo['b'][i];
    }
    ganhador(pontos);
    var pontos = 0;
    for (i = 1; i <= 3; i++) {
      pontos = pontos + matriz_jogo['c'][i];
    }
    ganhador(pontos);
 
    // verificar a soma dos pontos nas coluna

    var pontos = 0;
    for (l = 1; l <= 3; l++) {
        pontos = 0;
        pontos += matriz_jogo['a'][l];
        pontos += matriz_jogo['b'][l];
        pontos += matriz_jogo['c'][l];
        ganhador(pontos);
    }

    // verificar a diagonal 
    pontos = 0;
    pontos = matriz_jogo['a'][1]+matriz_jogo['b'][2] + matriz_jogo['c'][3];
    ganhador(pontos);
    
    pontos = 0;
    pontos = matriz_jogo['c'][1] + matriz_jogo['b'][2] + matriz_jogo['a'][3];
    ganhador(pontos);
 
}

function ganhador(pontos){


    if (pontos == -3) {
        var jogada_1 = $('#nome_jogador_1').val();
        alert(jogada_1 + ' é o vencedor');
        $('.jogada').off();

    } else if (pontos == 3) {
        var jogada_2 = $('#nome_jogador_2').val();
        alert(jogada_2 + ' é o vencedor');
        $('.jogada').off();
    }



}

});
$(document).ready(function() {
  $(".pokemon").each(function(i) {
  $(this).addClass("pokemon" + (i+1));
    });
    $(".hp").each(function(i) {
  $(this).addClass("hp" + (i+1));
    });
});

$(document).ready(function() {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/1/"
    }).then(function(item) {
       $('.pokemon1').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/2/"
    }).then(function(item) {
       $('.pokemon2').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/3/"
    }).then(function(item) {
       $('.pokemon3').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/4/"
    }).then(function(item) {
       $('.pokemon4').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/5/"
    }).then(function(item) {
       $('.pokemon5').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/6/"
    }).then(function(item) {
       $('.pokemon6').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/7/"
    }).then(function(item) {
       $('.pokemon7').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/8/"
    }).then(function(item) {
       $('.pokemon8').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/9/"
    }).then(function(item) {
       $('.pokemon9').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/10/"
    }).then(function(item) {
       $('.pokemon10').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/11"
    }).then(function(item) {
       $('.pokemon11').append(item.name);
    });
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon-form/12/"
    }).then(function(item) {
       $('.pokemon12').append(item.name);
    });
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/1/"
    }).then(function(item) {
       $('.hp1').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/2/"
    }).then(function(item) {
       $('.hp2').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/3/"
    }).then(function(item) {
       $('.hp3').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/4/"
    }).then(function(item) {
       $('.hp4').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/5/"
    }).then(function(item) {
       $('.hp5').append(item.stats[5].base_stat +"hp");
    });
            $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/6/"
    }).then(function(item) {
       $('.hp6').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/7/"
    }).then(function(item) {
       $('.hp7').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/8/"
    }).then(function(item) {
       $('.hp8').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/9/"
    }).then(function(item) {
       $('.hp9').append(item.stats[5].base_stat +"hp");
    });
            $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/10/"
    }).then(function(item) {
       $('.hp10').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/11/"
    }).then(function(item) {
       $('.hp11').append(item.stats[5].base_stat +"hp");
    });
        $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/12/"
    }).then(function(item) {
       $('.hp12').append(item.stats[5].base_stat +"hp");
    });
});



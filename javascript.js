$(document).ready(function() {

    var kidpositions = ['brad.jpg', 'jill.jpg', 'kat.jpg', 'mal.jpg', 'sam.jpg', 'zach.jpg'];
    
    //randomize kid location upon pageload
    var i = 1;
    while (i <= kidpositions.length) {
        $('<img src="images/' + kidpositions[Math.floor(Math.random() * kidpositions.length)] + '">').appendTo('#studentorder');
        i++;
    }

});
$(document).ready(function () {
    var nrTarefa = 0;

    $('form').on('submit', function (e) {
        e.preventDefault();
        var tarefa = $('#tarefa').val();

        console.log(tarefa);
        $('#lista-tarefas').append(`<li id="nr${nrTarefa}">${tarefa}</li>`);

        nrTarefa +=1;
        console.log(nrTarefa);
    })
})


$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();
        var tarefa = $('#tarefa').val();
        
        console.log(tarefa);
        $('#lista-tarefas').append(`<li>${tarefa}</li>`);
    })
})


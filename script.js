$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();
        var tarefa = $('#tarefa').val().trim();

        var itemTarefa = $(`<li>${tarefa}</li>`);
        $(itemTarefa).appendTo('ul');
        $('#tarefa').val('');

        $('#ul-tarefas').on('click', 'li', function () {
            $(this).toggleClass('done');
        });
    })

})



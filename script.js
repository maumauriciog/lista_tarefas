$(document).ready(function () {
    let valor = 1;

    $('form').on('submit', function (e) {
        e.preventDefault();
        valor += 1;
        var tarefa = $('#tarefa').val();

        if (tarefa === '') {
            alert('Digite uma tarefa.');
        } else {
            var itemTarefa = $(`<li>${tarefa}</li>`);
            $(itemTarefa).appendTo('ul');
        }
        
        $('#taskList').on('click', function () {
            $('li').toggleClass('done');
        });
    })

})


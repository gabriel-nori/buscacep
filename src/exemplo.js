function buscarCEP(cep) {
    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        dataType: "json",
        type: 'GET',
        success: function (result, status, xhr) {
            $("#logradouro").html(result.logradouro);
            $("#complemento").html(result.complemento);
            $("#bairro").html(result.bairro);
            $("#localidade").html(result.localidade);
            $("#uf").html(result.uf);
        },
        error: function (xhr, status, error) {
            $("#endereco").html("Não consegui localizar o CEP");
        }
    });
}














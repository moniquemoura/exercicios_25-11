
function exibirDados(id) {
    dados = [
        {
            'nome': 'Marcos Antônio',
            'cpf': '217.213.601-82',
            'tel': '(21) 98305-9845'
        },
        {
            'nome': 'Alberto Antunes',
            'cpf': '31.448.939-3',
            'tel': '(61) 98552-1551'
        },
        {
            'nome': 'Carlos Roberto',
            'cpf': '14.778.368-9',
            'tel': '(86) 99992-1996'
        },
        {
            'nome': 'Daniel Moraes',
            'cpf': '319.521.169-61',
            'tel': '(81) 98699-5572'
        },
        {
            'nome': 'Francisco Mendes',
            'cpf': '755.046.129-50',
            'tel': '(31) 98908-8063'
        }
    ];

    document.getElementById('nome').innerText = 'Nome: '+ dados[id].nome;
    document.getElementById('cpf').innerText = 'CPF: ' + dados[id].cpf;
    document.getElementById('tel').innerText = 'Tel: ' + dados[id].tel;
}


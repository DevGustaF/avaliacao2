const JogoValidator = {
    nome: {
        required: "O campo Nome é obrigatório",
        minLength: {
            value: 3,
            message: "Mínimo de 3 caracteres"
        },
        maxLength: {
            value: 50,
            message: "Máximo de 50 caracteres"
        }
    },
    genero_nome: {
        required: "O campo 'Nome' é obrigatório"
    },

    plataforma_nome: {
        required: "O campo 'Plataforma' é obrigatório"
    },

    editora_nome: {
        required: "O campo 'Editora' é obrigatório"
    },

    desenvolvedora_nome: {
        required: "O campo 'Desenvolvedora' é obrigatório"
    },

    classificacao_nome: {
        required: "O campo 'Classificação' é obrigatório"
    }
}

export default JogoValidator
const EditoraValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Mínimo de 3 caracteres"
        },
        maxLength: {
            value: 50,
            message: "Máximo de 50 caracteres"
        }
    },
}

export default EditoraValidator
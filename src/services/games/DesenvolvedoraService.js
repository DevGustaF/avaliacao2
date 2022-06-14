class DesenvolvedoraService {

    getAll() {
        const desenvolvedoras = localStorage.getItem("desenvolvedoras");
        return desenvolvedoras ? JSON.parse(desenvolvedoras) : [];
    }

    get(id) {
        const desenvolvedoras = this.getAll()
        return desenvolvedoras[id]
    }

    create(dados) {
        const desenvolvedoras = this.getAll()
        desenvolvedoras.push(dados)
        localStorage.setItem('desenvolvedoras', JSON.stringify(desenvolvedoras))
    }

    update(id, dados) {
        const desenvolvedoras = this.getAll()
        desenvolvedoras.splice(id, 1, dados)
        localStorage.setItem('desenvolvedoras', JSON.stringify(desenvolvedoras))
    }

    delete(id) {
        const desenvolvedoras = this.getAll()
        desenvolvedoras.splice(id, 1)
        localStorage.setItem('desenvolvedoras', JSON.stringify(desenvolvedoras))
    }
}

export default new DesenvolvedoraService()
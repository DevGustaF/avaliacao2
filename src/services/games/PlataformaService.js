class PlataformaService {

    getAll() {
        const plataformas = localStorage.getItem("plataformas");
        return plataformas ? JSON.parse(plataformas) : [];
    }

    get(id) {
        const plataformas = this.getAll()
        return plataformas[id]
    }

    create(dados) {
        const plataformas = this.getAll()
        plataformas.push(dados)
        localStorage.setItem('plataformas', JSON.stringify(plataformas))
    }

    update(id, dados) {
        const plataformas = this.getAll()
        plataformas.splice(id, 1, dados)
        localStorage.setItem('plataformas', JSON.stringify(plataformas))
    }

    delete(id) {
        const plataformas = this.getAll()
        plataformas.splice(id, 1)
        localStorage.setItem('plataformas', JSON.stringify(plataformas))
    }
}

export default new PlataformaService()
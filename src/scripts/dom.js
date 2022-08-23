export class MontandoDados {
    static noticiaPrincipal(array) {
     
       const dados = array.map((element) => {

            const main = document.querySelector('main')
            const principal = document.createElement('ul')
            const principalApoioInfo = document.createElement('li')
            const principalCategoria = document.createElement('li')
            const principalTitulo = document.createElement('li')
            const principalNoticia = document.createElement('li')
            const principalFonte = document.createElement('li')
            const img = document.createElement('img')

            principal.classList.add('principal')
            principalApoioInfo.classList.add('principal-apoio-info')
            principalCategoria.classList.add('principal-categoria')
            principalTitulo.classList.add('principal-titulo')
            principalNoticia.classList.add('principal-noticia')
            principalFonte.classList.add('principal-fonte')
            img.classList.add('imagem-principal')

            principalTitulo.addEventListener('click', function(event){
                event.preventDefault()
                window.location.assign(element.noticia_completa)
            })

            if (element.id === 2) {
                principalCategoria.innerText = element.categoria
                principalTitulo.innerText = element.titulo
                principalNoticia.innerText = element.resumo
                principalFonte.innerText = element.fonte
                img.src = element.imagem
            } else {
                return
            }

            principalApoioInfo.append(principalCategoria, principalTitulo, principalNoticia, principalFonte)
            principal.append(principalApoioInfo, img)
            main.append(principal)

        })
        return dados
        
    }


    static noticiasSecundarias(array) {
         const dados =  array.map((element) => {

            const section = document.querySelector('section')
            const cardNoticia = document.createElement('div')
            const imagemNoticia = document.createElement('img')
            const infoNoticia = document.createElement('ul')
            const categoriaNoticia = document.createElement('li')
            const tituloNoticia = document.createElement('li')
            const resumoNoticia = document.createElement('li')
            const fonteNoticia = document.createElement('li')

            cardNoticia.classList.add('card-noticia')
            imagemNoticia.classList.add('imagem-noticia')
            infoNoticia.classList.add('info-noticia')
            categoriaNoticia.classList.add('categoria-noticia')
            tituloNoticia.classList.add('titulo-noticia')
            resumoNoticia.classList.add('resumo-noticia')
            fonteNoticia.classList.add('fonte-noticia')

            tituloNoticia.addEventListener('click', function(event){
                event.preventDefault()
                window.location.assign(element.noticia_completa)
            })

            if (element.id > 2) {
                imagemNoticia.src = element.imagem
                categoriaNoticia.innerText = element.categoria
                tituloNoticia.innerText = element.titulo
                resumoNoticia.innerText = element.resumo
                fonteNoticia.innerText = element.fonte
            } else {
                return
            }

            infoNoticia.append(categoriaNoticia, tituloNoticia, resumoNoticia, fonteNoticia)
            cardNoticia.append(imagemNoticia, infoNoticia)
            section.append(cardNoticia)

        })
        return dados
    }
}

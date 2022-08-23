
import { MontandoDados } from "./dom.js"

export class Noticias {

    static baseUrl = 'https://kenzie-news-api.herokuapp.com/api/news'

    static async ChamadaApi(){
     const data = await fetch(this.baseUrl, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => 
            MontandoDados.noticiaPrincipal(res) && MontandoDados.noticiasSecundarias(res)
            )
        .catch(err => console.log(err))

       return data
}
}




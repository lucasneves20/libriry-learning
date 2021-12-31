import fetch from 'node-fetch'

function manejaErros(erro) {
    throw new Error(erro.message)
} 

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url)
            return res.status
        }))
        return arrayStatus
    } catch(err) {
        manejaErros(err)
    }
}

function gerarArraysURLs (arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
    const links =  gerarArraysURLs(arrayLinks)
    const statusLinks = await checaStatus(links)

    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultados
}

export {validaURLs};
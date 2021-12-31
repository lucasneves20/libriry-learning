import chalk from 'chalk';
import { pegaArquivo } from './index.mjs'
import { validaURLs } from './validation.mjs'

const caminho = process.argv

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2])

    if(caminho[3] === 'validate') {
        console.log(chalk.yellow('links validados : '), await validaURLs(resultado))
    } else {
        console.log(chalk.yellow('lista de links : '), resultado)
    }
} 

processaTexto(caminho)
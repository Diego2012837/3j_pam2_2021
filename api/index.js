const express = require('express')
const servidor = express()

servidor.get(
    '/', (req,res, next) =>{
        return res.send(
            {
                "mensagem": "bem-vindo(a) ao servidor"
             }   
        )
    }
)        
servidor.listen(3000, ()=> {
    console.log('servidor execucao!')
})

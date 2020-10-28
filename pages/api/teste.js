const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')
const parseResponse = require('../../utils/parseResponse')


export default async (req, res) => {

    const mountSearchParams = obj => Object.getOwnPropertyNames(obj).map(key => `${key}=${obj[key]}`).join('&');
    
    const requestBody = req.body
    console.log(requestBody)
    const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPreco'
    const method = 'POST'
    const data2 = mountSearchParams(requestBody);
    const options = {
      url,
      method,
      data : data2
    };
    
    let resp = ''
    await axios(options)
    .then(async function(response){
        console.log(response.data)
        resp = await parseResponse(response.data)
        console.log(resp, resp.Servicos)
        console.log(response.headers)
        console.log(response.status)
    }).catch(function(error){
        if(error){
            console.log(error)
        }
    })
    // const parse = await parseResponse(resp) 
    // console.log("=========", parse, "=======")
    return res.json({resp})
}


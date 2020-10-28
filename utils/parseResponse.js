const xml2js = require('xml2js');

const replaceBrackets = str => str.replace(/\[|\]|/g, '');

const parser = new xml2js.Parser();

const parseResponse = async (xml) => {

    let response;
    
    await parser.parseString(xml, (err, result) => {
        if (err) return err;
        
        response = JSON.stringify(result);
        
        return response;
    });
    
    response = JSON.parse(response);
    console.log(response)
    response = replaceBrackets(JSON.stringify(response.cResultado.Servicos[0].cServico[0]));
    
    return JSON.parse(response);

};

module.exports = parseResponse;

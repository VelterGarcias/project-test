import Head from 'next/head'
import axios from "axios";
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {

  const mountSearchParams = obj => Object.getOwnPropertyNames(obj).map(key => `${key}=${obj[key]}`).join('&');

  const handleTeste = async () => {

    const requestBody = {
      nCdEmpresa: "",
      sDsSenha: "",
      nCdServico: "04510",
      sCepOrigem: "96610000",
      sCepDestino: "95702512",
      nVlPeso: "1",
      nCdFormato: "1",
      nVlComprimento: "20",
      nVlAltura: "20",
      nVlLargura: "20",
      nVlDiametro: "0",
      sCdMaoPropria: "N",
      nVlValorDeclarado: "0",
      sCdAvisoRecebimento: "N",
    };

    const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPreco'
    const method = 'POST'
    const data = mountSearchParams(requestBody);
    const options = {
      url,
      method,
      data,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
    };

    const response = await axios(options)
      .then((res) => res)
      .then((res) => res)
      .catch((err) => err);

    
    console.log(response)
    return response;
    
  };

  return (
    <Layout pageTitle="LaLeLimp Higienização de Estofados" >
      
      <button onClick={handleTeste}>Teste</button>
      <Services />
      <ServicesDetails   />
    </Layout>
  )
}


function Services() {
  return (
    <section >
      <div className={styles.titleBackground}>
        <h2 className={styles.titleText}>Higienização de Estofados</h2>
      </div>
      <div className={styles.SectionContent} >
        
      </div>
   </section>
  )
}

function ServicesDetails() {
  return (
    <section >
      <div className={styles.titleBackground}>
        <h2 className={styles.subTitleText}>VEJA O QUE ESTÁ INCLUSO EM NOSSOS SERVIÇOS</h2>
      </div>
      <div className={styles.SectionContent} >
        
      </div>
   </section>
  )
}

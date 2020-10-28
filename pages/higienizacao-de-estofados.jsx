import Head from 'next/head'
import axios from "axios";
import cors from "cors";
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import { useState } from 'react';

export default function Home() {

  const mountSearchParams = obj => Object.getOwnPropertyNames(obj).map(key => `${key}=${obj[key]}`).join('&');
  const [price, setPrice] = useState()
  const [peso, setPeso] = useState()
  const handleTeste = async () => {

    const requestBody = {
      nCdEmpresa: "",
      sDsSenha: "",
      nCdServico: "04510",
      sCepOrigem: "96610000",
      sCepDestino: "95702512",
      nVlPeso: peso,
      nCdFormato: "1",
      nVlComprimento: "20",
      nVlAltura: "20",
      nVlLargura: "20",
      nVlDiametro: "0",
      sCdMaoPropria: "N",
      nVlValorDeclarado: "0",
      sCdAvisoRecebimento: "N",
    };

    const url = '/api/teste'
    const method = 'POST'
    const data = requestBody
    const options = {
      url,
      method,
      data
    };

    const response = await axios(options)
      .then((res) => res)
      .then((res) => res)
      .catch((err) => err);

    
    console.log(response)
    setPrice(response.data.resp)
    return response;
    
  };

  return (
    <Layout pageTitle="LaLeLimp Higienização de Estofados" >

      <label htmlFor="peso">Peso</label>
      <input type="text" id="peso" onChange={(e) => { setPeso(e.target.value) }} />
      
      <button onClick={handleTeste}>Teste</button>

      {
        price &&
        <>
          <h2>{price.Valor}</h2>
        </>
      }
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

import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Home() {

 

  return (
    <Layout pageTitle="Valentin Shopping Center" >
      
      <Services />
      <ServicesDetails   />
    </Layout>
  )
}


function Services() {
  return (
    <section >
      <div className={styles.titleBackground}>
        <h2 className={styles.titleText}>LIMPEZA AUTOMOTIVA</h2>
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

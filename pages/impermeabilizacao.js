import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'


export default function Home() {

 

  return (
    <Layout pageTitle="LaLeLimp Higienização de Estofados" >
      
      <Services />
      <ServicesDetails   />
    </Layout>
  )
}


function Services() {
  return (
    <section >
      <div className={styles.titleBackground}>
        <h2 className={styles.titleText}>Impermeabilização</h2>
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

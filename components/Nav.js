import styles from './Header.module.css'
import LinkItem from './LinkItem'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Nav(props) {

    const router = useRouter()
    const active = LinkItem.findIndex(page=> page.as === router.asPath)
    

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link} as={itens.as}>
                <a className={itens.isActive ? styles.pageActive :''} title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    )


    return (
        <nav className={`${styles.menu} ${styles[props.isOpen]}`}>
            <div className={styles.content}>
                <ul>
                    {  LinkItem.map((item, i) => {
                        let isActive = active == i ? true : false;
                        return <LinkMenu key={`nav-${item.id}`} link={item.link} label={item.label} as={item.as} isActive={isActive}/>
                    })
                    }
                </ul>
            </div>
            <Link href="/area/[forms]" as="/area/login" >
                <a title="Login" className={styles['btn-register']}>
                    Contato
                </a>
            </Link>        

        </nav>
    )
}
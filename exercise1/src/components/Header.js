import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.background}>
            <div className={ styles.container }>
                <div className={ styles.brand }>HELSINGIN SANOMAT</div>
                    <div className={styles.ekat}>
                        <div style={{width: '70px'}}>Etusivu</div>
                        <div style={{width: '70px'}}>Uutiset</div>
                        <div style={{width: '70px'}}>Lehdet</div>
                        <div style={{width: '70px'}}>Asiakaspalvelu</div>
                    </div>          
                    <div className={styles.tokat}>
                        <div style={{width:'50px'}}>Tilaa</div>
                        <div style={{width:'75px'}}>Kirjaudu</div>
                        <div> Valikko≡</div>
                    </div>
            </div>
        </div>
    )
}
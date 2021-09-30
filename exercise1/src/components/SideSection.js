import React from 'react'
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
        <div className={ styles.container }>
            <div className={styles.lue}>
                <div className={styles.lueKaks}>{props.lue}</div>
                <div>___________________________________________________</div>
                    <div className={styles.numJaBody}>
                        <div className={styles.nro}> {props.nro} </div>
                                <div className={styles.koko}> <span className={styles.header}>{props.topic}</span>{props.body}
                                </div>
                    </div>            
            </div>
        </div>
    )
}
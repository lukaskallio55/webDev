import React from 'react'
import styles from './MainSection.module.css'

export default function MainSection(props) {
    return (
        <div className={styles.header}> 
        <div className={styles.otsikko}>{props.topic}</div>
            <div> <img src={props.kuva} className={styles.kuva}/> </div>
            <div>
            {props.body}
            </div>
        </div>
    )
}
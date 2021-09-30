import styles from './SearchResult.module.css'

export default function SearchResult(props) {
    return (
        <div className={styles.product}>
            <div className={styles.location}>
                <div>< img src={`/images/${props.image}`} className={styles.image} /></div>
                <div className={ styles.name }>{ props.brand }</div>
                <div>{ props.product }</div>
                <div>{ props.price }€</div>
            </div>
        </div>
    )
}
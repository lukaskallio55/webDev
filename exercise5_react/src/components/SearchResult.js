import ImageComponent from '../ImageComponent'
import styles from './SearchResult.module.css'

export default function SearchResult(props) {
    return (
        <div className={styles.product}>
            <div className={styles.location}>
                <div><ImageComponent url={props.image}/></div>
                <div className={ styles.name }>{ props.manufacturer }</div>
                <div>{ props.name }</div>
                <div>{ props.price }€</div>
            </div>
        </div>
    )
}
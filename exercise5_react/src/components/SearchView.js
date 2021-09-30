import SearchResult from "./SearchResult"
import styles from "./SearchView.module.css"

export default function SearchView(props) {
    return(
        <div>
            <div className={ styles.presentationModeGrid }>
            {
                props.items.map(item => <SearchResult key={item.id} {...item} />)
            }
            </div>
        </div>
    )
}
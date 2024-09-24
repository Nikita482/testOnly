import styles from "./card.module.css"


export default function Card(props){
    return(
        <>
            <div className={styles.wtapper}>
                <h1 className={styles.wtapperData}>{props.data}</h1>
                <p className={styles.wtapperText}>{props.text}</p>
            </div>
        </>
    )
}
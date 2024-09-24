import styles from "./App.module.css"

import Spinner from "./components/Spinner/Spinner"

export default function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.borderHeight}></div>
        
        <div className={styles.wrapperBox}>
              <Spinner />
        </div>
      </div>
    </>
  )
}


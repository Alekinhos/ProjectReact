import styles from './Frase.module.css'

function Frase(){
    return (
    <div className={styles.fraseContainer}>
        <p>Este é o componente utilizado para criação de frases aleatorias!</p>
    </div>
    )
}

export default Frase
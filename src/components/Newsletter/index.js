import styles from './index.module.sass';

export default function Newsletter () {
    return (
        
        <div className={styles.newsletter}>
            <h3>¡Únete a nuestras novedades y promociones!</h3>
            <input className={styles.nombre} placeholder="Ingresa tu nombre" />
            <input className={styles.mail} placeholder ="Ingresa tu mail" />
            <button className={styles.boton}>Suscribirme</button>
        </div>
    );
}
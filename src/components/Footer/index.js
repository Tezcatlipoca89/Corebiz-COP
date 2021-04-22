//Estilos
import styles from './index.module.sass';
//imagenes
import logo from "../../img/site-logo-corebiz-preto-cinza.svg";
import vector from "../../img/Vector.svg";

export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.direccion}>
                <p className={styles.ubicacion}>Ubicación</p>
                <p className={styles.p}>Avenida Andromeda, 2000. Bloco 6 e 8</p>
                <p className={styles.p}>Alphaville SP</p>
                <p className={styles.p}>brasil@corebiz.ag</p>
                <p className={styles.p}>+55 11 3090 1039</p>
            </div>
            <div className={styles.contac}>
                <i className={styles.i} class="fas fa-envelope"></i><input className={styles.contacto} placeholder="CONTÁCTANOS" />
                <i class="fas fa-phone"></i><input className={styles.consultor} placeholder="HABLA CON UN CONSULTOR" /> 
            </div>
            
            <img src={logo} className={styles.img} />
            <img src={vector} className={styles.img} />
        </div>
    )
}
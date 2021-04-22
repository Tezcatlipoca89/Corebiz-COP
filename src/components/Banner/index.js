//imagenes
import logo from "../../img/banner.png";
//estilos
import styles from './index.module.sass';

export default function Banner (){
    return (
        <div className={styles.banner}> 
            <img src={logo} className={styles.image} alt='banner' />
        </div>
    );
}

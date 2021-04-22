import { useState } from 'react';
//imagenes
import logo from "../../img/logo.png";
//Estilos
import styles from './index.module.sass';

export default function Header({setWord}){
    return ( 
        <div className={styles.header}>
            <img src={logo} className={styles.image} alt='logo' />
            <input type="text" 
                onChange={(e)=> setWord(e.target.value)} 
                className={styles.busca} 
                placeholder="¿Qué estas buscando?" />
                <label className={styles.cuenta}><i class="fa fa-user"></i> Mi cuenta  </label>
                <i class="fa fa-shopping-cart"></i>
        </div>
    );
}
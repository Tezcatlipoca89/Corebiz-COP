import products from "../../constants/products";
//console.log({products});
//componentes
import Product from "../Product";
//Estilos
import styles from './index.module.sass';

export default function ResultList({word}) {
    console.log(word);
    return <div className={styles.resulList}>
        <h2 className={styles.subTitulo}>Más vendidos</h2>
        {
            products.map((product,key) => {
                const { productName } = product;
                console.log(productName, word);
                return productName.includes(word) && <Product key={key} product ={product}/>;
            })
        }
        
    </div>
    
}


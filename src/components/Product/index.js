// import productos from '../../constants/products';
import productos from '../../constants/products';
import styles from './index.module.sass';

export default function Product ({product}){
     const {imageUrl,installments,listPrice,price,productId,productName,stars} = product;
     const quantity = installments && installments.length > 0 ? installments[0].quantity : ''  ;
     const value = installments && installments.length > 0 ? installments[0].value : ''  ;
    //  console.log(quantity);
    // console.log(product);
    const starsArr = [1,2,3,4,5]

    return <div className={styles.product}>
        <img src={imageUrl} className={styles.image} />
        <p className={styles.productName}>{productName}</p>
        <div className={styles.stars}>
            {starsArr.map((key) => {
                // console.log({key});
                return (
                key <= stars ? (<p className={styles.starsY}>&#9733;</p>) : (<p className={styles.starsB}>&#9733;</p>)
                )
            })}
        </div>
        <p className={styles.price}>por $ {price/100}0</p>
        <p className={styles.installments}>O en {quantity}x de R ${value/100}</p>
        <button className={styles.comprar}>Comprar</button>
    </div>;
}
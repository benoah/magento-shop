import { useEffect, useState } from 'react'
import styles from './Products.module.css'

export const Products = (items) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(items.data)
        return () => {
            setProducts([])
        }
    }, [items])

    return (
        <div className={styles.products}>
            {products.map(({ products }) => (
                products.items.map(({ uid, name, image }) => (
                    <div key={uid}>
                        <p>{name}</p>
                        <img src={image.url} alt='asd' />
                    </div>
                ))
            ))}
        </div>
    )
}
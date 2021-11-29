import { useEffect, useState } from 'react'
import { Products } from '../Products/Products'
import styles from './SubCategories.module.css'


export const SubCategories = (items) => {
    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        setSubcategories(items.data)
        return () => {
            setSubcategories([])
        }
    }, [items])

    return (
        <>
            <div className={styles.subcategories}>
                <Products data={subcategories} />
            </div>
        </>
    )
}
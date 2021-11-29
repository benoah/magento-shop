import { useState } from 'react'
import categoriesData from '../../data/categories.json'
import { SubCategories } from '../SubCategories/SubCategories'
import styles from './Categories.module.css'

function getCategories() {
    return categoriesData.data.categories.items[0].children
}

export const Categories = () => {
    // const { loading, error, data } = useQuery(GET_CATEGORIES)
    const data = getCategories()

    const [categories, setCategories] = useState([])

    return (
        <div className={styles.categories}>
            {data.map(({ uid, name, children }) => (
                <button key={uid} className={styles.button} onClick={() => setCategories(children)}>{name}</button>
            ))}
            <SubCategories data={categories} className={styles.title} />
        </div>
    )
}
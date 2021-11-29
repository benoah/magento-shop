import { gql } from '@apollo/client'
import './App.css'
import styles from './App.module.css'
import { Categories } from './components/Categories/Categories'

const GET_CATEGORIES = gql`
  query {
    categories {
      items {
        name
        children {
          uid
          name
          children {
            uid
            name
          }
        }
      }
    }
  }
`

function App() {
  return (
    <div className={styles.app}>
      <h2 className={styles.title}>Apollo project</h2>
      <Categories className={styles.categories} />
    </div>
  )
}

export default App

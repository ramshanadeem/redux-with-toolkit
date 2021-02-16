import React from 'react'
import Todos from './Todos'
import { useDispatch } from 'react-redux'
import { addTodo, delAll } from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'
import AddBoxIcon from '@material-ui/icons/AddBox';
import ClearAllIcon from '@material-ui/icons/ClearAll';
function AddTodo() {
    const dispatch = useDispatch()
    const [todo, setTodo] = React.useState('')

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setTodo(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        e.target.parentElement.firstChild.value = ''
        dispatch(addTodo(todo))
    }
    const handleDel = (e) => {
        e.preventDefault()
        dispatch(delAll())
    }

    return (
        <div>
            {/* <h3 className={styles.value}>Shopping List </h3> */}
            <h4 style={{ paddingBottom: '5%' }} className={styles.value} >SHOPPING LIST</h4>
            <div>
                <input type="text" style={{ height: '35px' }} className={styles.textbox} onChange={handleChange} />
                <button className={`${styles.button} ${styles.btnLg}`} onClick={handlesubmit}><AddBoxIcon></AddBoxIcon></button>
                <button className={`${styles.button} ${styles.btnLg}`} onClick={handleDel}><ClearAllIcon></ClearAllIcon></button>
                <Todos />
            </div>
        </div>
    )
}

export default AddTodo

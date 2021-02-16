import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delTodo, editTodo, fetchposts } from '../features/todolist/todoSlicer'
import styles from './Todo.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > span': {
            margin: theme.spacing(2),
        },
    },
}));

function Todos() {
    const classes = useStyles();
    const state = useSelector(state => state.todo.todos)
    const statepost = useSelector(state => state.todo.posts)
    console.log(state)
    const dispatch = useDispatch()
    const handleDel = (id) => {
        dispatch(delTodo(id, state))
    }
    const handleEdit = (id) => {
        let title = prompt("Enter title");
        let newTodo = { id: id, text: title }
        console.log(newTodo)
        dispatch(editTodo(newTodo))
    }
    return (
        <div className={classes.root}>
            {
                state.map((item) => {
                    console.log(item)
                    return (
                        <div style={{ textDecoration: 'none', padding: ' 10px 20px', listStyle: 'none', borderRadius: '5px', transition: ' all 0.6 ease' }} className={styles.flex}>
                            <li key={item.id}>{item.text}</li>
                            <button style={{ marginRight: '2px' }} className={styles.button} onClick={() => handleDel(item.id)}><DeleteSweepIcon style={{ color: green[500] }}>></DeleteSweepIcon></button>
                            <button className={styles.button} onClick={() => handleEdit(item.id)}> <EditIcon style={{ color: green[500] }}>  </EditIcon></button>


                        </div>
                    )
                })
            }
            {
                statepost.map((item) => {
                    return (
                        <div>
                            <li key={item.id}>{item.title}</li>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Todos
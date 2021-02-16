import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchposts} from '../../features/post/postSlice.js'
import styles from './Post.module.css'

function Posts() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.post)
console.log(state)
    return (
        <div>
             {
                state.map((item) => {
                    console.log(item[0].title)
                 return (
                    <div>
                        <li key={item[0].id}>{item[0].title}</li>
                        <p>{item[0].body}</p>
            
                    </div>
                 )
                })
            }
            <button className={styles.asyncButton} onClick={() => dispatch(fetchposts())}>click</button>
        </div>
    )
}

export default Posts

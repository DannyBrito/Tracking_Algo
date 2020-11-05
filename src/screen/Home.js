import React ,{useState,useEffect} from 'react'
import List from '../components/List'
const Home = () =>{

    const [list,setList] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/problems')
            .then(res => res.json())
            .then(res =>{
                setList(res)
            })
    })

    return (
        <div>
            <List problems={list}/>
        </div>
    )
}

export default Home
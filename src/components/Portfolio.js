import { useEffect, useState } from 'react';
import {Loading} from './Loading.js';
import { Profile } from './Profile.js';






export function Porfolio() {
   const [items, setItems] = useState([])
   const [user] = useState("silvergripen")

   useEffect(() => {
    const fetchRepos = async () => {
        const res = await fetch (`https://api.github.com/users/silvergripen/repos?page=1&per_page=10&sort=updated`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
        
        
    }
    fetchRepos()
   }, [])
   return(
    <>
    {!items ? ( <Loading/>) : <>
    <section>
        <h1> viewing silvergripens respositories</h1>
        <div> {items.map((item) => (
            <Profile key={item.id} {...item}/>
        ))} </div>
        </section></>}
    </>

   )

}

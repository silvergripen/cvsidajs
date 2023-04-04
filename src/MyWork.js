import workJson from '../Json/Work.json'
import { useEffect, useState } from 'react';

function MyWork(){
    const [error, setError] = useState(null);
    const [isloaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch(workJson)
        .then(res => res.json())
        .then(
            (result)=>{
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])
    if(error){
        return <div>Error: {error.message}</div>
    }
    else if(!isloaded){
        return <div>Loading ...</div>
    }
    else{
        return(
            <container>
                {items.map(item =>(
                    <li key={item.id}>
                        {item.title} 
                        {item.company}
                        {item.datestart} 
                        {item.dateend}
                    </li>
                ))}
            </container>
        );
    }
}
export default MyWork
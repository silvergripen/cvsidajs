import {useState} from 'react'
import { Button } from 'react-bootstrap'


    const EasterClick =() =>{
        const [changeColor, setChangeColor] = useState(false)
        const handleClick = () => {
            setChangeColor(!changeColor)
        }
        return <Button onClick={handleClick}></Button>
    }
    const ChangeColor = () =>{
        let colors =[];
        if(ChangeColor === true){
            colors.push('background-pviolet');
        }else if(ChangeColor !== true){
            colors.push('background-white');
        }  
        return <div className={colors}></div>
    }
    export {EasterClick, ChangeColor};
    
import { useEffect } from 'react'

export function EasterKey (){
    const onGnome = (thingToDo) =>{
        const expectedList = ['g', 'n', 'o', 'm', 'e'];
        let actualList = [];
        let currentIndex = 0;

        const reset = () => {
            actualList =[];
            currentIndex = 0;
        };

        const isGnome = () => actualList.join('') === expectedList.join('');

        const onKeyUp = (event) => {
            const key = event.key.toLowerCase();
            if (key === expectedList[currentIndex]) {
                actualList.push(key);
                currentIndex++;
            }else {
                reset();
            }
            if (isGnome()){
                thingToDo();
            }
        }
        
        document.addEventListener('keyup', onKeyUp)
        const cleanUp = () => {
            document.removeEventListener('keyup', onKeyUp)
        }
        return {
            cleanUp
        }
    }


    useEffect(() =>{
        document.addEventListener('keydown', detectKeyDown, true)
    
    },[])
    const detectKeyDown = (e) => {
       console.log("Clicked Key: ", e.key)

    
       }
       onGnome(() => console.log("Gnome!"));
    }






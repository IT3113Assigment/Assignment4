import {animals} from '../assets/data/AnimalsDb';
import '../assets/css/compo.css';
import {useState,useEffect} from 'react';

export default function AnimalTable(props){
    const[randomAnimal,setRandomAnimal]=useState[0];
    const[result,setResult]=useState('');

    useEffect(()=>{
        generateAnimal();
    },[]);
    const generateAnimal=()=>{
        const randomIndex=Math.floor(Math.random()*10)+1;
        setRandomAnimal(animals[randomIndex]);
        setResult('');
    };
    const handleAnimal=(selectedAnimal)=>{
        if(selectedAnimal===randomAnimal.name){
            setResult('WIN');
        }else{
            setResult('LOSE');
        }
    };
    return(
        <div className='gameContainer'>
            <table className='game-table'>
                <thead>
                    <tr>
                    <th colSpan={3}><h1>ANIMAL MATCHING GAME</h1></th>
                    </tr>
                    <tr>
                        <th>Result</th>
                        <th>Animal Name</th>
                        <th>Select the animal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{result}</td>
                        <td>{randomAnimal.name}</td>
                        <td className='animalgrid'>
                            <div>
                                <div className='animalgrid'>
                                    {animals.map((animal)=>(
                                        <div key={animal.name} className='animalgrid-item'
                                        onClick={()=>handleAnimal(animal.name)}>
                                         <img src={require ('../assets/fig/${animal.img}')}
                                         alt={animal.name}/>                   
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

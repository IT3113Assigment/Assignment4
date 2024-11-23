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
    }
}

import React, { useEffect, useState } from "react";
import "./counter.css"
import {useUpdateEffect} from "../hooks"
function Counter(){
    
    const [counter, setCounter] = useState(0);

    const onClickPlus = () => setCounter((prev)=>prev+1);
    const onClickMinus= () => setCounter((prev)=>prev-1);
    const [value, setValue] = useState({
        "id":"",
        "password":"",
        "address":"",
        "phoneNumber":""
    });



    // useEffect(()=>{
    //     console.log("monut");
    //     return () =>{
    //         console.log("unmount");
    //     }
    // },[counter])

    useUpdateEffect(()=>{
        console.log("update");
    },[counter])

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
    }

    const onChangeIput = (e) =>{
        const {name ,value : inputValue} = e.currentTarget;
        setValue((prev)=> 
             ({
                ...prev,
                [name]: inputValue
            })
        );
    }
    console.log(value);

    return (
        <main>
            <button type="button" onClick={onClickPlus} disabled ={counter ===3} className = "plusButton">+</button>
            <strong>{counter}</strong>
            <button type="button" onClick={onClickMinus} className = "minusButton">-</button>
            <form onSubmit={onSubmit}>
                <input type ="text" autoFocus name="id" value ={value.id} onChange={onChangeIput}></input>
                <input type ="text" autoFocus name="password" value ={value.password} onChange={onChangeIput}></input>
                <input type ="text" autoFocus name="address " value ={value.adress} onChange={onChangeIput}></input>
                <input type ="text" autoFocus name="phoneNumber "value ={value.phoneNumber} onChange={onChangeIput}></input>
                <button type="submit">제출</button>
            </form>
        </main>
    );
}

export default Counter;
import { React, useState, useEffect }from "react";
import axios from 'axios';

export function Houses(){
    let api = process.env.REACT_APP_API_KEY;
    let [prevProps, setPrevProps] = useState([])
    useEffect(()=>{
        axios.get(`${api}properties`).then(res=>{setPrevProps(res.data.data)})
    },[])
    var properties = prevProps;
    return properties
}
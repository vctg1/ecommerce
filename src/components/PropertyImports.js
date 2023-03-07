import { React, useState, useEffect }from "react";
import axios from 'axios';
import property1 from '../images/casa1.jpg'
import property2 from '../images/casa2.jpg'
import property3 from '../images/casa3.jpg'
import property4 from '../images/casa4.jpg'
import property5 from '../images/casa5.jpg'
import property6 from '../images/casa6.jpg'

export function Houses(){
    let api = process.env.REACT_APP_API_KEY;
    let [prevProps, setPrevProps] = useState([])
    useEffect(()=>{
        axios.get(`${api}properties`).then(res=>{setPrevProps(res.data.data)})
    },[])
    var properties = prevProps;
    return properties
}
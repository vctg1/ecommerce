import React from "react";
import property1 from '../images/casa1.jpg'
import property2 from '../images/casa2.jpg'
import property3 from '../images/casa3.jpg'
import property4 from '../images/casa4.jpg'
import property5 from '../images/casa5.jpg'
import property6 from '../images/casa6.jpg'

export function houses(){
    var properties = [
        {
            id: "1",
            images: {image1: property1, image2:''},
            suburb:'Asa Sul',
            address:'SQNY Rua 10 casa 20',
            price:2000000.00,
            rent: 2000000*0.005,
            description:'Casa incrível, 4 quartos, 7 banheiros'
        },
        {
            id: "2",
            images: {image1: property2, image2:''},
            suburb:'Asa Norte',
            address:'SQNY Rua 10 casa 20',
            price:2500000.00,
            rent: 2500000*0.005,
            description:'Casa incrível, 3 quartos, 5 banheiros'
        },
        {
            id: "3",
            images: {image1: property3, image2:''},
            suburb:'Lago Sul',
            address:'SQNY Rua 10 casa 20',
            price:3000000.00,
            rent: null,
            description:'Casa incrível, 5 quartos, 6 banheiros'
        },
        {
            id: "4",
            images: {image1: property4, image2:''},
            suburb:'Lago Norte',
            address:'SQNY Rua 10 casa 20',
            price:1000000.00,
            rent: 1000000*0.005,
            description:'Casa incrível, 7 quartos, 4 banheiros'
        },
        {
            id: "5",
            images: {image1: property5, image2:''},
            suburb:'Entorno',
            address:'SQNY Rua 10 casa 20',
            price:15000000.00,
            rent: null,
            description:'Casa incrível, 6 quartos, 5 banheiros'
        },
        {
            id: "6",
            images: {image1: property6, image2:''},
            suburb:'Entorno',
            address:'SQNY Rua 10 casa 20',
            price:1500000.00,
            rent: 1000000*0.005,
            description:'Casa incrível, 3 quartos, 6 banheiros'
        }
    ]
    return properties
}
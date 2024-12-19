import { Component } from "@angular/core";



@Component({
    selector :"app-students",
    templateUrl :"./students.component.html",
    styleUrls : ['./students.component.scss']


})
export class studentsComponent {
     products = [
        {
            id: 1,
            name: "Wireless Earbuds",
            category: "Electronics",
            price: 49.99,
            stock: 200,
            rating: 4.5,
            brand: "SoundPro",
            description: "High-quality wireless earbuds with noise cancellation.",
            color: "Black",
            value: 10
        },
        {
            id: 2,
            name: "Running Shoes",
            category: "Footwear",
            price: 69.99,
            stock: 150,
            rating: 4.7,
            brand: "RunFast",
            description: "Comfortable and durable running shoes.",
            color: "Blue",
            value: 10
        },
        {
            id: 3,
            name: "Smartphone",
            category: "Electronics",
            price: 699.99,
            stock: 50,
            rating: 4.8,
            brand: "TechMaster",
            description: "Latest model with advanced features.",
            color: "Silver",
            value: 10
        },
        {
            id: 4,
            name: "Blender",
            category: "Kitchen",
            price: 39.99,
            stock: 100,
            rating: 4.2,
            brand: "KitchenPlus",
            description: "Powerful blender for smoothies and soups.",
            color: "White",
            value: 10
        },
        {
            id: 5,
            name: "Gaming Chair",
            category: "Furniture",
            price: 199.99,
            stock: 30,
            rating: 4.6,
            brand: "GameComfort",
            description: "Ergonomic chair for long gaming sessions.",
            color: "Red",
            value: 10
        },
        {
            id: 6,
            name: "Laptop",
            category: "Electronics",
            price: 999.99,
            stock: 25,
            rating: 4.9,
            brand: "ComputePro",
            description: "High-performance laptop for work and play.",
            color: "Gray",
            value: 10
        },
        {
            id: 7,
            name: "Yoga Mat",
            category: "Fitness",
            price: 24.99,
            stock: 300,
            rating: 4.4,
            brand: "FlexMat",
            description: "Non-slip yoga mat for all skill levels.",
            color: "Purple",
            value: 10
        },
        {
            id: 8,
            name: "Desk Lamp",
            category: "Home Decor",
            price: 19.99,
            stock: 120,
            rating: 4.3,
            brand: "BrightLite",
            description: "Adjustable desk lamp with LED lighting.",
            color: "Yellow",
            value: 10
        },
        {
            id: 9,
            name: "Electric Toothbrush",
            category: "Personal Care",
            price: 59.99,
            stock: 90,
            rating: 4.7,
            brand: "SmilePro",
            description: "Rechargeable toothbrush with multiple modes.",
            color: "White",
            value: 10
        },
        {
            id: 10,
            name: "Backpack",
            category: "Accessories",
            price: 49.99,
            stock: 250,
            rating: 4.5,
            brand: "CarryAll",
            description: "Stylish and spacious backpack for daily use.",
            color: "Green",
            value: 10
        }
    ];

}
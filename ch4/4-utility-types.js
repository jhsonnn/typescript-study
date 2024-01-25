"use strict";
{
    const capitals = {
        "South Korea": "Seoul",
        "United States": "Washington D.C",
        "Canada": "Ottawa",
    };
    const countyInfo = {
        "South Korea": {
            capital: "Seoul",
            population: 51000000,
            continent: "Asia"
        },
        "United States": {
            capital: "Washington D.C",
            population: 331000000,
            continent: "North America"
        },
        "Canada": {
            capital: "Ottawa",
            population: 83000000,
            continent: "North America"
        }
    };
    function saveUser(...params) {
        const [name, age] = params;
    }
    saveUser("David", 33);
}

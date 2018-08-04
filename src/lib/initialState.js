const initialState =  {
    bases: [{
        type: "25cm NY Style € 8,99",
        cost: 8.99
    },
    {
        type: "30cm NY Style € 11,49",
        cost: 11.49
    },
    {
        type: "35cm NY Style € 13,49",
        cost: 13.49
    }],
    sauces: [{
        name: "white",
        cost: 1.00
    },
    {
        name: "red",
        cost: 1.00
    },
    {
        name: "mix",
        cost: 1.50
    }],
    toppings: ["Pineapple",
    "Corn",
    "Olives (green)",
    "Red union",
    "Spinach",
    "Cherry tomatoes"
    ],
    delivery: '',
    selection: {
        base: null,
        sauce: null,
        toppings: [],
        delivery: false
    },
    total: 0
}

export default initialState;
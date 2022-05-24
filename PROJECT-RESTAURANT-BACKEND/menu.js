const appetizers = [{
    name: "Hummus",
    descrip: "Served with Pita or with Veggies",
    price:  "Price: 5.69",
    calories: "350 calories"

},
{   
    name: "Taziki Dip",
    descrip: "Served with Pita or with Veggies",
    price:  "Price: 5.69",
    calories: "160 calories"

}]


const soupsalad = [{
    name: "Mediterranean Salad",
    descrip: "Fresh mixed lettuces, tomatoes,cucumbers, roasted red peppers, red onions, feta, pepperoncini, kalamata olives and Greek dressing. Served with a baked pita chip",
    price: "Price: 8.99",
    calories: "630 calories"
},
{
    name: "Greek Salad",
    descrip: "Fresh mixed lettuces with garbanzo beans, roasted red peppers, red onions, diced tomatoes, candied pecans, feta and balsamic vinaigrette. Served with a baked pita chip", 
    price: "Price: 7.29",
    calories: "410 calories"
}]

const gyros = [{
    name: "Hand-crafted Grilled Lamb Gyros",
    descrip: "Served with Taziki sauce, tomatoes, mixed lettuce, and grilled onions with chips on the side.",
    price: "Price: 11.99",
    calories: "710-950 calories"
},
{
    name: "Hand-crafted Grilled Chicken Gyros",
    descrip: "Served with Taziki sauce, tomatoes, mixed lettuce, and grilled onions with chips on the side.",
    price: "Price: 10.49",
    calories: "580-820 calories"
}]


const dinner = [{
    name: "Chargrilled Lamb Feast",
    descrip: "Served with Greek salad, a baked pita ship & your choice of roasted red potatoes or basmati rice. Also served with Taziki sauce",
    price: "Price: 15.49",
    calories: "930-1,080 calories"

},
{
    name: "Grilled Salmon Feast",
    descrip: "Served with Greek salad, a baked pita ship & your choice of roasted red potatoes or basmati rice. Also served with Taziki sauce",
    price: "Price: 16.49",
    calories: "1,060-1,170 calories"
}]



module.exports = {
    appetizers: appetizers,
    soupsalad: soupsalad,
    gyros: gyros,
    dinner: dinner,

}


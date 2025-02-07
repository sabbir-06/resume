// Challenge 10: Meal Suggestion
// Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening") 
// and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions 
// based on the input parameters.

function suggestMeal(time, diet) {
    if (time === "morning" && diet === "vegan") {
        return "Fruit smoothie with oats";
    } else if (time === "morning" && diet === "vegetarian") {
        return "Egg and avocado toast";
    } else if (time === "morning" && diet === "omnivore") {
        return "Bacon and eggs with toast";
    } else if (time === "afternoon" && diet === "vegan") {
        return "Quinoa salad with roasted vegetables";
    } else if (time === "afternoon" && diet === "vegetarian") {
        return "Grilled cheese sandwich with tomato soup";
    } else if (time === "afternoon" && diet === "omnivore") {
        return "Chicken sandwich with a side salad";
    } else if (time === "evening" && diet === "vegan") {
        return "Stir-fried tofu with rice and veggies";
    } else if (time === "evening" && diet === "vegetarian") {
        return "Vegetable lasagna";
    } else if (time === "evening" && diet === "omnivore") {
        return "Grilled salmon with mashed potatoes";
    } else {
        return "you are robot, No food needed.";
    }
}


// Usage examples:
console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
console.log(suggestMeal("evening", "vegan")); // "Vegan lentil stew"
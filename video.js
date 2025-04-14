var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=this.document.querySelector("#player1")
	video.autoplay=false;

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });




const recipesData = [
    {
        id: 1,
        name: "Pasta Primavera",
        ingredients: ["pasta", "tomato", "zucchini", "bell pepper", "garlic", "olive oil"],
        cookTime: "30 minutes",
        difficulty: "Medium",
        instructions: [
            "Boil pasta until al dente.",
            "In a pan, heat olive oil and sauté garlic.",
            "Add vegetables and cook until tender.",
            "Toss cooked pasta with sautéed vegetables."
        ],
        nutritionalInfo: {
            calories: 400,
            fat: "15g",
            protein: "12g",
            carbs: "55g"
        }
    }]





	
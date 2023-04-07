const express = require("express"); 
const fs = require("fs"); 
const exphbs = require("express-handlebars"); 


const app = express(); 

app.engine("hbs", exphbs.engine({
    defaultLayout: "main",
    extname:  ".hbs"
}));

app.set("view engine", "hbs"); 

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render("home"); 
});

let saveMovies = []; 

fs.readFile("fav-movies.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err); 
    }
    else {
        saveMovies = data.split("/"); 
    }
});

app.get("/my-movies", (req, res) => {
    const showMovies = {
        movies: [
            {title: saveMovies[0]},
            {title: saveMovies[1]},
            {title: saveMovies[2]}
        ]
    }
    res.render("favorite-movies", showMovies);
});

app.listen(8000, () => {
    console.log("http://localhost:8000");
});

//Del ett och två

// let nums = 0; 

// for (i = 1; i <= 20; i++) {
//     if (nums === undefined) {
//         nums = (Math.floor(Math.random() * i)).toString(); 
//     }
//     else {
//         nums += (Math.floor(Math.random() * i)).toString();
//     }
// }


// fs.writeFile("numbers.txt", nums, err => {
//     if (err) {
//         console.log(err); 
//     }

// });

// fs.readFile('numbers.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     updateFile(sortNumbers(data)); 
//   });


// function sortNumbers(data) {
//     const numArr = data.split(""); 
//     numArr.sort(); 
//     return numArr; 
// }

// function updateFile(sortedData) {
//     let nums; 
//     sortedData.forEach(element => {
//         if (nums === undefined) {
//             nums = element; 
//         }
//         else {
//             nums += element;
//         }
         
//     });
//     fs.writeFile("numbers.txt", nums, err => {
//         if (err) {
//             console.log(err); 
//         }
    
//     });
// }


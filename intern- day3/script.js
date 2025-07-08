// // console.log("Hello, World!");

// // let clock = new Promise((resolve, reject) => {
// //     let num = 10;
// //     if (num % 2 === 0) {
// //         resolve("Even number");
// //     }
// //     else {
// //         reject("Odd number");
// //     }

// // });

// // clock.then(
// //     (res) =>

// //         console.log(res)
// // )


// let over = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Time's up!");
//     }, 10);
// });

// over.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error("Error:", error);
// })


// //let make some tea

// // boilwater(function () {
// //     addtea(function () {
// //         addmilk(function () {
// //             console.log("Tea is ready!");
// //         });
// //     });
// // });

// // boilwater().then(addleaves).then(addmilk).then(() => {
// //     console.log("Tea is ready!");
// // }).catch((error) => {
// //     console.error("Error:", error);
// // });

// function delay(message) {
//     return new Promise((resolve) => setTimeout(() => {
//         console.log(message);
//         resolve();
//     }, 1000));
// }

// //async use before any function to make it async function 
// //await is used to wait for a promise to resolve



// // function process() {
// //     console.log("Processing...");
// //     delay(1000)
// //     console.log("Processing complete!");
// //     delay(1000)
// //     console.log("Finalizing...");
// //     delay(1000)
// //     console.log("Process complete!");
// // }

// // process()

// // async function getData() {
// //     let res = await fetch("https://www.google.com.pk/");
// //     let data = await res.json();
// //     console.log(data);
// // }
async function getData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

async function getId() {
    const input = document.getElementById("id").value;
    const count = parseInt(input);
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = ""; // Clear previous

    if (isNaN(count) || count <= 0) {
        console.log("Please enter a valid positive number.");
        resultDiv.innerHTML = "<p>Please enter a valid positive number.</p>";
        return;
    }

    const data = await getData();

    if (data && data.length) {
        console.log(`--- First ${count} Posts ---`);
        for (let i = 0; i < count && i < data.length; i++) {
            const post = data[i];
            console.log(`${i + 1}. [ID: ${post.id}] Title: ${post.title}`);
            resultDiv.innerHTML += `<p><strong>${i + 1}.</strong> [ID: ${post.id}] Title: ${post.title}</p>`;
        }
    } else {
        console.log("No data received from API.");
        resultDiv.innerHTML = "<p>No data found.</p>";
    }
}  



// const handleFormSubmit = event => {
//     event.preventDefault();

//     const myForm = event.target;
//     const formData = new FormData(myForm);

//     fetch("https://script.google.com/macros/s/AKfycbwUfbRZ11NsXkn1EEv8j3KSV3D48-EYHY6PrLr58zoN/dev", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString(),
//     })
//         .then(() => {
//             console.log("Form successfully submitted", result)
//             alert("Thanks! I'll be in touch shortly!")
//         })
//         .catch((error) => alert(error));
// };

// const afterSubmit = () => {
//     location.reload();
// }

// document
//     .getElementById("contact")
//     .addEventListener("submit", handleFormSubmit);

// document
//     .getElementById("contact")
//     .addEventListener("submit", afterSubmit);
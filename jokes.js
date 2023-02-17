const API_URL = "https://icanhazdadjoke.com"

if (navigator.onLine) {
 const request_new_joke = async () => {
  const joke = await fetch(API_URL, {
   method: "GET",
   headers: { Accept: "application/json" },
  })
   .then((response) => response.json())
   .then((response) => response.joke)
   .catch((err) => {
    err
   })

  document.getElementById("joke").innerText = joke
 }

 document.addEventListener("DOMContentLoaded", () => {
  request_new_joke()
 })

 document.getElementById("new").addEventListener("click", () => {
  request_new_joke()
 })
} else {
 document.getElementById("joke").innerText = "No Internet Connection"
}

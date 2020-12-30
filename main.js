var images = [
  "first.jpg" , 
"two.jpg",
"third.jpg",
"four.jpg",
"five.jpg",
"six.jpg",
"seven.jpg",
"eight.jpg",
"nine.jpg",
"ten.jpg",
"eleven.jpg",
"twelve.jpg",
"thirteen.jpg"
]
var i = 0
function nextslide() {
    document.getElementById("album").src=images[i]
    i++
}
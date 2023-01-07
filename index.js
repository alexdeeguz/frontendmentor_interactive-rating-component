const ratings = document.querySelectorAll(".rating__num");
ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const current = document.getElementsByClassName("active");
    if (current.length) {
      current[0].className = current[0].className.replace(" active", "");
    }
    e.target.classList.add("active");
  });
});

document.getElementById("submit-btn").addEventListener("click", () => {
  const active = document.getElementsByClassName("active");
  if (!active.length) return;
  const ratingSelected = document.getElementById("rating-selected");
  ratingSelected.innerHTML = active[0].innerHTML;
  const card = document.getElementById("card");
  const thankyouCard = document.getElementById("card--thankyou");
  console.log(thankyouCard);
  card.style.animation = "cardOut 0.5s forwards";
  thankyouCard.style.animation = "cardIn 0.5s 0.5s forwards";
});

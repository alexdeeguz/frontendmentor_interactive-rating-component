const ratings = document.querySelectorAll('.rating__num')
ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        const current = document.getElementsByClassName("active")
        console.log(current)
        if (current.length) {
                    current[0].className = current[0].className.replace(
                      " active",
                      ""
                    );
        }
        e.target.classList.add("active")
        console.log(document.getElementById('card'))
        document.getElementById("card").style.animation =
          "nextCard 0.5s";
        
    })
})
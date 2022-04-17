document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.querySelector('.gameArea');
    document.getElementById("title").style.textShadow = "-8px -8px #" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("title").style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    var images = [
        "images/fruit1.jpg",
        "images/fruit2.jpg",
        "images/fruit3.jpg",
        "images/fruit4.jpg",
        "images/fruit5.jpg",
        "images/fruit6.jpg",
        "images/fruit7.jpg",
        "images/fruit8.jpg",
        "images/fruit9.jpg",
    ]
    var selected = []
    var matchedItems = 0;

    function setup() {
        gameArea.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

        images = images.concat(images)
        console.log(images)
        images.sort(() => Math.random() - 0.5);
        console.log(images)

        for (let i = 0; i < 18; i++) {
            const div = document.createElement("div");
            img = document.createElement("img");
            img.setAttribute('src', 'images/corbeille.png');
            // document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            img.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            div.appendChild(img)
            div.id = i;
            div.addEventListener('click', flip)
            gameArea.appendChild(div);
        }
    }

    function isMatch() {
        //console.log(selected);
        if (selected[0].firstChild.src === selected[1].firstChild.src) {
            for (let i = 0; i < selected.length; i++) {
                selected[i].firstChild.style.display = "none";
                selected[i].removeEventListener('click', flip);
                matchedItems++;
            }
        } else {
            selected[0].firstChild.setAttribute('src', 'images/corbeille.png');
            selected[1].firstChild.setAttribute('src', 'images/corbeille.png');
        }
        selected = [];
        console.log(matchedItems);
        if (matchedItems == images.length)
            alert("Found all Matches!!!");
    }

    function flip() {
        console.log('card clicked')
        let id = this.id;
        //console.log(id)
        if (selected.length != 2) {
            selected.push(this)
            if (selected[0] == selected[1]) {
                selected.pop()
            }
            this.firstChild.setAttribute('src', images[id]);
        } else {
            isMatch();
        }





    }

    setup();
})
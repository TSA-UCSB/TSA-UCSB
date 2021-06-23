/*ethan sifferman 06.22.21*/

const to_replace = document.getElementsByClassName("to-replace");

for ( let i = 0; i < to_replace.length; i++ ) {
    fetch( to_replace[i].getAttribute("src") )
        .then(response => response.text())
        .then(data => {
            to_replace[i].innerHTML = data;
        });
}


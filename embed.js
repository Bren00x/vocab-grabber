    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/bren00x/vocab-grabber@latest/embed.css';
    link.media = 'all';
    head.appendChild(link);

    document.body.innerHTML = document.body.innerHTML + `<div class="vl-app">
    <p class="vl-title">Vocab Grabber</p>
    <p>Vocab Grabber lets you get a full list of vocab words from <a href="https://vocabulary.com" target="_blank">vocabulary.com</a> in the form of a Word or Text Document.</p>
    <button class="vl-button" onclick="vl()">Get</button>
    <textarea id="vl_text" placeholder="Vocab words will appear here"></textarea>
</div>`;


    var x = document.getElementsByClassName("entry");
    var y = document.getElementById("vl_text");

    function vl() {
        var full = "";
        for (var i = 0, len = x.length; i < len; i++) {
            //console.log(len + " " + i);
            full += i + 1 + ". " + jsUcfirst(x[i].getElementsByClassName("word")[0].innerText) + " - " + x[i].getElementsByClassName("definition")[0].innerText + ".\n";
            if (len - 1 == i) {
                console.log(full);
                y.innerHTML = full
            }
        }

    }

    function jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

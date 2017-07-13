function init() {

    $('.unslider').unslider({
        autoplay: true,
        infinite: true,
        arrows: true
    });

  function createList(data) {
    var ul = document.getElementById("alighintoj");
    data.forEach(function(homo){
        var li = document.createElement("li");
        li.setAttribute('class', 'mdl-list__item mdl-list__item--two-line');
        var content = document.createElement("span");
        content.setAttribute('class', 'mdl-list__item-primary-content');
        content.innerHTML = '<i class="material-icons mdl-list__item-icon">person</i>'
        content.appendChild(document.createTextNode(homo.Nomo));
        var country = document.createElement("span", "truc");
        country.setAttribute('class', "mdl-list__item-sub-title");
        country.appendChild(document.createTextNode(homo.Lando));
        content.appendChild(country);
        li.appendChild(content);
        ul.appendChild(li);
    })
  }

  if (document.getElementById("alighintoj")) {
    var publishedUrl = "https://docs.google.com/spreadsheets/d/1fzmX24cZpdvsqWBqQpVMzeogGkqDHURbGzahgxVp7cM/pubhtml?gid=721185647&single=true";
    Tabletop.init({key: publishedUrl, callback: createList, simpleSheet: true})
  }
}

document.addEventListener("DOMContentLoaded", init)

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function(response) {
        document.getElementById("container").innerHTML = builder(response.data);

    })
    .catch(function(error) {
        console.log(error);
    });


function builder(data) {
    let HTML = "";
    if (typeof data === 'object') {
        if (Array.isArray(data)) {
            HTML += `<ol>`;
            for (let i = 0; i < data.length; i++) {
                HTML += `<li>${builder(data[i])}</li>`;
            }
            HTML += `</ol>`;
        } else {
            HTML += `<ul>`;
            for (const key in data) {
                HTML += builder(data[key]);
            }

            // let ov = Object.values(data);
            // for (let i = 0; i < ov.length; i++) {
            //     HTML += builder(ov[i]);
            // }

            HTML += `</ul>`;
        }
    } else {
        HTML += `<li>${data}</li>`;
    }
    return HTML;
}
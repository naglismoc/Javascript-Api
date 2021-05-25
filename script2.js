// Make a request for a user with a given ID



renderTable('https://jsonplaceholder.typicode.com/users', 'stalas', ["table,ol,ul"]);

function renderTable(url, id, order) {
    axios.get(url)
        .then(function(response) {
            let table = document.getElementById(id);
            let HTML = tableHeader(response.data[0]);

            response.data.forEach(user => {
                HTML += tableRow(user);
            });

            table.innerHTML = HTML;

        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });
}

function tableHeader(data) {
    let header = "<tr>";
    Object.keys(data).forEach(key => {
        header += `<th>${ key.charAt(0).toUpperCase().concat(key.slice(1, key.length))}</th>`;
        // header += `<th>${key}</th>`
    });
    header += "</tr>";
    return header;
}

function tableRow(user) {
    let row = "<tr>";
    Object.values(user).forEach(value => {
        if (typeof value !== 'object') {
            row += `<td>${value}</td>`;
        } else {
            row += "<td>" + tableOl(value) + "</td>";
        }
    });
    row += "</tr>";
    return row;
}

function tableOl(data) {
    let row = "<ol>";
    Object.values(data).forEach(value => {
        if (typeof value !== 'object') {
            row += `<li>${value}</li>`;
        } else {
            row += tableOl(value);
        }
    });
    row += "</ol>";
    return row;
}



//1. make a variable where we store the names of received array of objects
//2. Select the <ul> html element from document.
//3. for loop to go trough every name to append the name to ul document.
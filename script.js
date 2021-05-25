// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        console.log(response.data);
        let table = document.getElementById('table');
        let HTML = "";
        response.data.forEach(user => {
            HTML +=
                `<tr>
                  <td> ${user.id} </td>
                  <td> ${user.name} </td>
                  <td> ${user.username} </td>
                  <td> ${user.email} </td>
                  <td> ${user.phone} </td>
                  <td> ${user.website} </td>`;

            HTML += `<td> ${JSON.stringify(user.company)} </td>
                  <td> ${JSON.stringify(user.address)} </td>
                  <td> <ul><li></li></ul> </td>
                </tr>`;
        });
        table.innerHTML += HTML;

    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });

//1. make a variable where we store the names of received array of objects
//2. Select the <ul> html element from document.
//3. for loop to go trough every name to append the name to ul document.
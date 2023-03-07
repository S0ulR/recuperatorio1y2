fetch("https://basic-server-one.vercel.app/users")
.then(function(response){
      return response.json()})
.then(function (respJSON){
        console.log(respJSON.data)
        let resp = respJSON.data;
        let table= document.querySelector('#container-table');
        let bodyTable=` <table id='customers'>
                          <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>    
                          </thead>
                          <tbody>`;
        resp.forEach(element => {

            bodyTable+=`<tr>
                            <td> ${element.name} </td>
                            <td> ${element.username} </td>
                            <td> ${element.email} </td>
                        </tr>`;
        }); 
        bodyTable+=`</tbody>
                </table>`;
        table.innerHTML=bodyTable; 
})
.catch(function(error) {
    console.log('Ups ha ocurrido un error : '+error)
});

const modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
    
span.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const url = "https://63a5e08f318b23efa79fe459.mockapi.io/"
const inputName = document.getElementById("input-name");

const inputEmail = document.getElementById("input-email");
const inputSalary = document.getElementById("input-salary");

let options = {
    method: "POST",
    headers: {
        'Content-Type': "application/json"
    },
}
const btn = document.querySelector("#submit-btn")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const person = {
        Ho: inputName.value,
        Ten: inputEmail.value,
        SoLan: inputSalary.value,

    }
    options.body = JSON.stringify(person)
    const data = fetch(url + "hehe", options)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderTable(data)
        })

})
const table = fetch(url + "hehe")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        renderTable(data);

    })

const renderTable = (data) => {



    const dataTable = document.getElementById("output-table");
    const htmlValue = data.reduce((acc, val, index) => {
        return acc + `
            <tr>
                <td>${val.Ho}</td>
                <td>${val.Ten}</td>
                <td>${val.SoLan}</td>
                <td>${val.createdAt}</td>
                
            </tr>
            `;

    }, `
        <tr>
            <th>Ho</th>
            <th>Ten</th>
            <th>So Lan</th>
            <th>Tao vao</th>
        </tr>
    `);
    dataTable.innerHTML = htmlValue;
}
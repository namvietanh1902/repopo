const inputName = document.getElementById("input-name");

const inputEmail = document.getElementById("input-email");
const inputSalary = document.getElementById("input-salary");
const inputCity = document.getElementById("input-city");

const btn = document.getElementById("submit-btn");
const arr = [
    {
        name: "Van Thinh",
        email: "namhai@gmail.com",
        city: "DaNang",
        salary: 200,
    },
    {
        name: "Van Hai",
        email: "mamtom@gmail.com",
        city: "Quang Nam",
        salary: 300,
    }, {
        name: "Quang Khang",
        email: "balankhang1967@gmail.com",
        city: "DaNang",
        salary: 0,
    },
];;


btn.addEventListener("click", (e) => {
    e.preventDefault();
    const person = {
        name: inputName.value,
        email: inputEmail.value,
        city: inputCity.value,
        salary: inputSalary.value,
    }
    arr.push(person);
    console.log(arr);
    inputName.value = "";
    inputEmail.value = "";
    inputCity.value = "";
    inputSalary.value = "";
    renderTable(arr);


})
const renderTable = (arr) => {
    const dataTable = document.getElementById("output-table");
    const htmlValue = arr.reduce((acc, val, index) => {
        console.log(val)
        return acc + `
        
        <tr>
            <td>${val.name}</td>
            <td>${val.email}</td>
            <td>${val.salary}</td>
            <td>${val.city}</td>
            <td><a href="javascript:void(0)">Edit</a>
            <a href="javascript:void(0)" onclick="deleteElement(${index})">Delete</a></td>
        </tr>
        `;

    }, `
    <tr>
        <th>Full Name</th>
        <th>Email Id</th>
        <th>Salary</th>
        <th>City</th>
        <th>Actions</th>
    </tr>
`);
    dataTable.innerHTML = htmlValue;
}
const deleteElement = (index) => {
    arr.splice(index, 1);
    console.log(arr);
    renderTable(arr);
}

renderTable(arr);

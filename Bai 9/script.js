const inputName = document.getElementById("input-name");

const inputEmail = document.getElementById("input-email");
const inputSalary = document.getElementById("input-salary");
const inputCity = document.getElementById("input-city");

const btn = document.getElementById("submit-btn");

arr = []

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const userList = JSON.parse(localStorage.getItem("userList"));
    const person = {
        name: inputName.value,
        email: inputEmail.value,
        city: inputCity.value,
        salary: inputSalary.value,
    }
    userList.push(person);
    console.log(arr);
    inputName.value = "";
    inputEmail.value = "";
    inputCity.value = "";
    inputSalary.value = "";
    localStorage.setItem("userList", JSON.stringify(userList));
    renderTable();


})
const renderTable = () => {

    const userList = JSON.parse(localStorage.getItem("userList"));
    console.log(userList);
    const dataTable = document.getElementById("output-table");
    const htmlValue = userList.reduce((acc, val, index) => {
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
    const userList = JSON.parse(localStorage.getItem("userList"));
    userList.splice(index, 1);
    localStorage.setItem("userList", JSON.stringify(userList));
    renderTable();
}

renderTable();

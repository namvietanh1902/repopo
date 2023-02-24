const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const addModal = $('#addModal')
const editModal = $('#editModal')
const showAddModal = () => {
    addModal.classList.toggle('hidden')
    const submitBtn = $('#addModal .submit')
    console.log(submitBtn)
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let todoList = JSON.parse(localStorage.getItem('todoList'))
        console.log(todoList)
        const inputCat = $('#addModal #input-category')
        const inputTitle = $('#addModal #input-title')
        const inputContent = $('#addModal #input-content')
        const data = {
            category: inputCat.value,
            title: inputTitle.value,
            content: inputContent.value,
            dateTime: new Date().toDateString().slice(4),
            type: 'todo'

        }
        todoList.push(data)
        renderData(todoList)
        addModal.classList.toggle('hidden')
    })
}
const showEditModal = (index) => {
    editModal.classList.toggle('hidden')
    const submitBtn = $('#editModal .submit')
    console.log(submitBtn, index)
    const todoList = JSON.parse(localStorage.getItem('todoList'))
    const editCat = $('#edit-category')
    const editTitle = $('#edit-title')
    const editContent = $('#edit-content')
    const radios = $$('input[name=type]')
    let getType = () => {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) return radios[i].value
        }
    }
    let setType = (type) => {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].value == type) {
                radios[i].checked = true;
                break
            }
        }
    }
    let curr = todoList[index]
    editCat.value = curr.category;
    editTitle.value = curr.title;
    editContent.value = curr.content;
    setType(curr.type)
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        curr.category = editCat.value;
        curr.title = editTitle.value;
        curr.content = editContent.value;
        curr.type = getType()
        curr.dateTime = new Date().toDateString().slice(4);


        renderData(todoList)
        editModal.classList.toggle('hidden')
    })
}
const showCount = (todoList) => {
    const todoCountCol = $('.todo .column-count')
    const doingCountCol = $('.doing .column-count')
    const finishedCountCol = $('.finished .column-count')
    let todoCount = 0, doingCount = 0, finishedCount = 0
    todoList.filter((element) => {
        switch (element.type) {
            case 'todo':
                todoCount += 1;
                break;
            case 'doing':
                doingCount += 1;
                break;
            case 'finished':
                finishedCount += 1;
                break;
        }

    })
    todoCountCol.innerHTML = todoCount
    doingCountCol.innerHTML = doingCount
    finishedCountCol.innerHTML = finishedCount

}
const closeEdit = $('#editModal .close')
const closeAdd = $('#addModal .close')
closeAdd.onclick = function () {
    addModal.classList.toggle('hidden')
}
closeEdit.onclick = function () {
    editModal.classList.toggle('hidden')
}
window.onclick = function (event) {
    if (event.target == addModal) {
        addModal.classList.toggle('hidden')
    }
    else if (event.target == editModal) {
        editModal.classList.toggle('hidden')
    }
}
const todos = $('.todo .column-content')
const doings = $('.doing .column-content')
const finished = $('.finished .column-content')
const cols = {
    'todo': todos,
    'doing': doings,
    'finished': finished
}

const renderData = (todoList) => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
    showCount(todoList)
    let htmls = todoList.reduce((acc, element, index) => {
        let type = element.type
        let html = ` 
    <div class="card">
    <div class="card-header">
        <div class="card-intro">
            <div class="card-category">
                ${element.category}
            </div>
            <div class="card-title">
                ${element.title}
            </div>
        </div>
        <div class="card-btn">
            <div class="btn">
                <img src="./assets/img/edit.png" onclick='showEditModal(${index})'" alt="" srcset="">
            </div>
            <div class="btn" onclick='deleteTodo(${index})'">
                <img src="./assets/img/delete.png" alt="" srcset="">
            </div>
        </div>


    </div>
    <div class="card-content">
        <div class="card-desc">
            ${element.content}
        </div>
        <div class="card-date">
            <img src="./assets/img/Vectorclock.png" alt="" srcset="">
            ${element.dateTime}
        </div>
    </div>

    </div>
        `
        acc[type] += html
        return acc
    }, {
        "todo": "",
        "doing": "",
        "finished": ""
    })
    todos.innerHTML = htmls['todo']
    doings.innerHTML = htmls['doing']
    finished.innerHTML = htmls['finished']
}
const deleteTodo = (index) => {
    let todoList = JSON.parse(localStorage.getItem('todoList'))
    todoList.splice(index, 1)
    renderData(todoList)
}
renderData(JSON.parse(localStorage.getItem('todoList')))

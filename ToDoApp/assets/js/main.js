const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const addModal = $('#addModal')
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
const closeAdd = $('#addModal .close')
closeAdd.onclick = function () {
    addModal.classList.toggle('hidden')
}
window.onclick = function (event) {
    if (event.target == addModal) {
        addModal.classList.toggle('hidden')
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
                                    <img src="./assets/img/edit.png" alt="" srcset="">
                                </div>
                                <div class="btn">
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
renderData(JSON.parse(localStorage.getItem('todoList')))

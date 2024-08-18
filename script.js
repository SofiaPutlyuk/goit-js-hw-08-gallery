/*task 1 */
const searchList = document.getElementById('userList')
searchList.addEventListener('click', deleteUser)
function deleteUser(event) {
    if (event.target.classList.contains("deleteButton")) {
        const searchItem = event.target.parentNode
        searchItem.remove()
    }
}
/*Task2 */
const searchAddButton = document.getElementById('addTask')
const searchInput = document.getElementById('new Task')
const searchForm = document.querySelector('form')
const searchListTask = document.getElementById('taskList')
const removeTask = _.debounce((element) => {
    element.remove();
}, 3000);

searchForm.addEventListener('click', function (event) {
    event.preventDefault()
})
searchAddButton.addEventListener('click',function(){
    const createList = document.createElement('li')
    createList.id ="itemTask"
    const searchInputValue = searchInput.value
    createList.textContent = searchInputValue
    const createInput = document.createElement('input')
    createInput.type = 'checkbox'
    createList.appendChild(createInput)
    searchListTask.appendChild(createList)
    searchInput.value = '';
})

searchListTask.addEventListener('click',function(){
    const target = event.target;
    if(target.type ==="checkbox"){
        if(target.checked){
            alert('Task complied')
        } else {
            alert('Task completed: false');
        }
    if(target.tagName === 'LI'){
        removeTask(target);
    }
    }
})
/*Творчі завдання */
const searchActiveList = document.querySelector('.nav')
searchActiveList.addEventListener('click', colorChange)
function colorChange(event){
    if(event.target.classList.contains('btn')){
        const buttons = searchActiveList.querySelectorAll('.btn');
        buttons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');
    }
}


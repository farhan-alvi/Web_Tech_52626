let form = document.getElementById('student-form');
let nameInput = document.getElementById('student-name');
let rollInput = document.getElementById('student-roll');
let list = document.getElementById('student-list');
let totalText = document.getElementById('total');
let attendanceText = document.getElementById('attendance');
let addBtn = document.getElementById('add-btn');
let searchBox = document.getElementById('search');

let presentCount = 0;

// Disable Add button when name input is empty
nameInput.addEventListener('input', function(){
    addBtn.disabled = nameInput.value.trim() === "";
});

// Add student
form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = nameInput.value.trim();
    let roll = rollInput.value.trim();

    if(name === "" || roll === ""){
        alert("Enter both name and roll");
        return;
    }

    let li = document.createElement('li');
    li.classList.add('student-item');

    let span = document.createElement('span');
    span.textContent = roll + " - " + name;

    // Present checkbox
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            li.classList.add('present');
            presentCount++;
        } else {
            li.classList.remove('present');
            presentCount--;
        }
        updateAttendance();
    });

    // Edit button using prompt
    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.classList.add('btn-edit');
    editBtn.onclick = function(){
        let newName = prompt("Enter new name", name);
        let newRoll = prompt("Enter new roll", roll);
        if(newName && newRoll){
            span.textContent = newRoll + " - " + newName;
            name = newName;
            roll = newRoll;
        }
    };

    // Delete button with confirm
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('btn-delete');
    deleteBtn.onclick = function(){
        if(confirm("Are you sure you want to delete this student?")){
            if(checkbox.checked) presentCount--;
            li.remove();
            updateCount();
            updateAttendance();
        }
    };

    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    nameInput.value = "";
    rollInput.value = "";
    addBtn.disabled = true;

    updateCount();
    updateAttendance();
});

// Update total students
function updateCount(){
    let total = document.querySelectorAll('.student-item').length;
    totalText.textContent = "Total students: " + total;
}

// Update attendance
function updateAttendance(){
    let total = document.querySelectorAll('.student-item').length;
    let absent = total - presentCount;
    attendanceText.textContent = "Present: " + presentCount + " , Absent: " + absent;
}

// Search/filter
searchBox.addEventListener('input', function(){
    let text = searchBox.value.toLowerCase();
    let students = document.querySelectorAll('.student-item');
    students.forEach(function(student){
        let name = student.querySelector('span').textContent.toLowerCase();
        student.style.display = name.includes(text) ? "flex" : "none";
    });
});

// Sort A-Z
document.getElementById('sort-btn').onclick = function(){
    let students = Array.from(document.querySelectorAll('.student-item'));
    students.sort(function(a,b){
        let nameA = a.querySelector('span').textContent.split(" - ")[1].toLowerCase();
        let nameB = b.querySelector('span').textContent.split(" - ")[1].toLowerCase();
        return nameA.localeCompare(nameB);
    });
    students.forEach(student => list.appendChild(student));
};

// Highlight first student
document.getElementById('highlight-btn').onclick = function(){
    let students = document.querySelectorAll('.student-item');
    students.forEach(s => s.classList.remove('highlight'));
    if(students.length > 0) students[0].classList.add('highlight');
};
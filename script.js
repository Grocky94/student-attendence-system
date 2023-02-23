function addStudent() {
    //alert ("working");
    var studentName = document.getElementById("addingStudent").value;
    console.log(studentName, "studentName");


    var StudentsList = JSON.parse(localStorage.getItem("StudentsList")) || [];

    StudentsList.push(studentName)

    localStorage.setItem("StudentsList", JSON.stringify(StudentsList));

}

function displayStudentsList() {
    var studentsList = JSON.parse(localStorage.getItem('StudentsList'));
    console.log(studentsList, "studentsList")
    //taking tags from html
    var divFromHTML = document.getElementById("displayingStudentsList");
    console.log(divFromHTML, "divFromHTML");

    //looping over userList to create perfect structure
    var students = [];
    for (var i = 0; i < studentsList.length; i++) {
        students += `<div><p>${studentsList[i]}</p></div>`;
    }
    console.log(students,"students")

    // adding localstorage data into HTML with perfect structure
    divFromHTML.innerHTML = students;
}
displayStudentsList()

function markingAttendance(){
    var studentsList = JSON.parse(localStorage.getItem('StudentsList'));
    console.log(studentsList,"studentsList")

    var divFromHTML = document.getElementById("markingAttendance");
    console.log(divFromHTML,"divFromHTML");

    var students = [];
    for (var i = 0; i < studentsList.length; i++) {
        students += `<div><p>${studentsList[i]}</p></div>`;
    }
    console.log(students, "students")

    divFromHTML.innerHTML = students;
}
markingAttendance()
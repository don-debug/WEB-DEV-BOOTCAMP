console.log("JavaScript Loaded");
function addStudent(){

    let name =
    document.getElementById("studentName").value;

    let age =
    document.getElementById("studentAge").value;

    let course =
    document.getElementById("studentCourse").value;

    if(name === "" || age === "" || course === ""){

        alert("Please fill all fields");

        return;
    }

    let row =
    document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
    `;

    document
    .getElementById("studentTable")
    .appendChild(row);

}
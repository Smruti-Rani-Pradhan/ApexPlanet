const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailInput.addEventListener("input", function () {
  if (!emailPattern.test(emailInput.value)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = emailInput.value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
    return;
  }

  if (!emailPattern.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";
  this.reset();
  emailError.style.display = "none";
});
function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Remove";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}

// ===== Contact Form Validation =====
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailRegex)) {
    status.style.color = "orange";
    status.textContent = "📧 Enter a valid email address.";
    return;
  }

  status.style.color = "lightgreen";
  status.textContent = "✅ Your message has been sent!";
  document.getElementById("contactForm").reset();
});

// ===== To-Do List Feature =====
function addTodo() {
  const taskInput = document.getElementById("todoInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌"; // Perfect cross icon
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("todoList").appendChild(li);
  taskInput.value = "";
}

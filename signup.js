// signup.js
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // الحصول على البيانات المدخلة من المستخدم
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // التحقق من تطابق كلمة المرور مع تأكيد كلمة المرور
  if (password !== confirmPassword) {
    document.getElementById("error-message").textContent = "كلمة المرور وتأكيد كلمة المرور غير متطابقتين!";
    return;
  }

  // التحقق من وجود الحساب مسبقًا
  var existingUser = localStorage.getItem("user");
  if (existingUser) {
    existingUser = JSON.parse(existingUser);
    if (existingUser.email === email) {
      document.getElementById("error-message").textContent = "البريد الإلكتروني مسجل مسبقًا!";
      return;
    }
  }

  // حفظ البيانات في localStorage
  var newUser = { username: username, email: email, password: password };
  localStorage.setItem("user", JSON.stringify(newUser));

  alert("تم إنشاء الحساب بنجاح!");
  window.location.href = "login.html";  // إعادة توجيه المستخدم لصفحة تسجيل الدخول
});

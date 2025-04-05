// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // الحصول على البيانات المدخلة من المستخدم
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // استرجاع بيانات المستخدم من localStorage
  var storedUser = localStorage.getItem("user");
  if (!storedUser) {
    document.getElementById("login-error-message").textContent = "لم يتم العثور على حساب!";
    return;
  }

  storedUser = JSON.parse(storedUser);

  // التحقق من صحة بيانات تسجيل الدخول
  if (storedUser.username === username && storedUser.password === password) {
    alert("تم تسجيل الدخول بنجاح!");
    window.location.href = "welcome.html";  // إعادة توجيه المستخدم لصفحة الترحيب
  } else {
    document.getElementById("login-error-message").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
  }
});

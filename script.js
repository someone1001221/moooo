// script.js
function calculate() {
  var moahla = parseFloat(document.getElementById("moahla").value);
  var gpa = parseFloat(document.getElementById("gpa").value);

  // تحقق من قيمة المؤهلة
  if (moahla < 80) {
      alert("قيمة المؤهلة يجب أن تكون 80 أو أعلى.");
      return;
  }

  // تحقق من قيمة GPA
  if (gpa > 5) {
      alert("قيمة المعدل الجامعي لا يمكن أن تتجاوز 5.");
      return;
  }

  // تحقق من صحة القيم
  if (isNaN(moahla) || isNaN(gpa)) {
      document.getElementById("result").textContent = "من فضلك أدخل قيم صحيحة.";
      return;
  }

  var result = (moahla * 0.3) + (gpa * 14);
  document.getElementById("result").textContent = "النتيجة: " + result.toFixed(2);
}

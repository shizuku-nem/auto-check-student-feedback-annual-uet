# auto-check-student-feedback-annual-uet
Tool tự động check 5 sao "Lấy ý kiến phản hồi của sinh viên về học phần HKI năm học" của trường Đại học Công Nghệ

# Cách dùng
Vào môn học cần đánh giá, click "Phiếu đánh giá môn học/ hoạt động giảng dạy"
Bật dev tool lên, vào Console và run code:

```
var finds = document.querySelectorAll("tr.raterow");
const STAR = 5 // from 1 to 5
const ELEMENT = STAR + 1
finds.forEach((tr) => {
  document.getElementById(
    tr.children[ELEMENT].children[1].getAttribute("id")
  ).checked = true;
});
```

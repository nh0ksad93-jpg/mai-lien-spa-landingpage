# 15. TỔNG KẾT VÀ HƯỚNG DẪN SỬ DỤNG

## 15.1 Tóm tắt bộ prompt

| # | Phần | Mục đích | File/Folder |
|---|---|---|---|
| 1 | Tổng quan | Hiểu dự án | `01-Tong-quan/` |
| 2 | Quy tắc chung | Bộ luật điều hành | `GEMINI.md` |
| 3 | Cấu trúc vận hành | Nơi Agent làm việc | `.agent/` |
| 4 | Tài liệu thực tế | Source of truth kinh doanh | `docs/` |
| 5 | Prompt mẫu | Thư viện câu lệnh | `02-Prompts/` |
| 6 | Kỹ năng | Kỹ năng chuyên biệt | `.agent/skills/` |
| 7 | Triển khai | Lộ trình thực tế | `03-Trien-khai/` |

## 15.2 Cách sử dụng

```markdown
BƯỚC 1: Đọc 01-Tong-quan/ để hiểu tổng quan dự án
BƯỚC 2: Điền thông tin doanh nghiệp thật vào thư mục docs/
BƯỚC 3: Đọc GEMINI.md để nắm 10 quy tắc vận hành tối cao
BƯỚC 4: Sử dụng prompt mẫu trong 02-Prompts/ để bắt đầu task
BƯỚC 5: Theo dõi ERRORS.md để ghi lại lỗi và tối ưu AI
BƯỚC 6: Mở rộng hệ thống theo lộ trình trong 03-Trien-khai/
```

## 15.3 Nguyên tắc vàng

```
1. SPEC TRƯỚC, LÀM SAU — Đừng vội tạo agent khi chưa có docs đầy đủ
2. MVP TRƯỚC, MỞ RỘNG SAU — 4 agent + 1 workflow > 9 agent không docs
3. HUMAN REVIEW LUÔN — Ít nhất tháng đầu, đừng tin 100% vào AI
4. GHI LOG MỌI LỖI — ERRORS.md là tài sản quý nhất
5. TINH CHỈNH LIÊN TỤC — Prompt tốt nhất là prompt đã qua thực chiến
```

---

> **Lưu ý cuối:** Bộ prompt này là điểm khởi đầu. Sau 2-4 tuần sử dụng thực tế, 
> bạn sẽ cần điều chỉnh prompt, thêm examples vào skills, cập nhật rules dựa trên 
> pattern lỗi thực tế. Đó là quy trình bình thường và cần thiết.
> 
> **Mục tiêu cuối cùng:** Một hệ thống multi-agent marketing trong Antigravity có thể 
> giúp doanh nghiệp tạo, triển khai, đo lường, tối ưu marketing hằng ngày với ít 
> công sức vận hành hơn, nhưng vẫn kiểm soát được rủi ro và bám mục tiêu kinh doanh.

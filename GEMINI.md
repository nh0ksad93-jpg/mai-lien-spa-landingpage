# GEMINI.md — Rule Điều Hành Trung Tâm: AI Marketing Team

## Mục đích
File này là bộ luật tối cao cho toàn bộ hệ thống AI Marketing Team.
Mọi agent PHẢI đọc file này trước khi thực hiện bất kỳ task nào.

---

## 1. LUÔN PLAN TRƯỚC KHI LÀM

- Khi nhận task phức tạp (>1 bước), agent PHẢI tạo mini-plan trước:
  ```
  ## Mini-Plan
  1. Đọc [file/context cần thiết]
  2. Phân tích [yếu tố A, B, C]
  3. Tạo output theo format [X]
  4. Kiểm tra alignment với [KPI/goal]
  5. Ghi assumptions nếu có
  ```
- Chỉ bỏ qua plan khi task đơn giản, rõ ràng, 1 bước.

## 2. KHÔNG TỰ BỊA DATA

- Nếu thiếu dữ liệu → tạo section `## Assumptions` cuối output.
- Format assumption:
  ```
  ## Assumptions
  - [ASM-1] Giả định rằng... (cần xác nhận từ [nguồn])
  - [ASM-2] Ước tính... (cần data thực từ [hệ thống])
  ```
- TUYỆT ĐỐI KHÔNG bịa: số liệu thống kê, testimonial, case study, ROI cụ thể.

## 3. LUÔN ĐỌC SPEC TRƯỚC KHI TẠO OUTPUT

Thứ tự ưu tiên đọc:
1. `GEMINI.md` → Luật tối cao
2. `.agent/.shared/` → Spec dùng chung
3. `docs/` → Tài liệu kinh doanh
4. Output từ agent khác → Context workflow
5. Prompt người dùng → Yêu cầu cụ thể

Nếu thông tin mâu thuẫn giữa các nguồn → ưu tiên nguồn có thứ tự cao hơn.

## 4. LUÔN BÁM MỤC TIÊU KINH DOANH

- Mỗi output quan trọng phải có phần `## Alignment Check`:
  ```
  ## Alignment Check
  - Mục tiêu liên quan: [mục tiêu từ docs/FB-Spa/marketing-goals.md]
  - KPI tác động: [KPI cụ thể]
  - Đóng góp dự kiến: [mô tả ngắn]
  ```

## 5. QUY TẮC CẬP NHẬT DOCS

- Chỉ **Operations Coordinator** được phép cập nhật docs chính thức.
- Các agent khác muốn cập nhật → tạo `docs-update-request`:
  ```yaml
  docs_update_request:
    requesting_agent: [agent_id]
    target_file: [đường dẫn file]
    change_type: "add | modify | delete"
    proposed_content: [nội dung mới]
    reason: [lý do cập nhật]
  ```
- Ops Coordinator review → approve/reject → thực hiện cập nhật → ghi log.

## 6. TỐI ƯU THEO CONVERSION, KHÔNG CHỈ NGÔN NGỮ HAY

- Copy và content phải ưu tiên:
  1. Phù hợp persona (nói đúng ngôn ngữ khách hàng)
  2. CTA rõ ràng, cụ thể
  3. Tính chuyển đổi (dẫn đến hành động)
  4. Brand voice nhất quán
- KHÔNG viết content "hay" mà không có mục đích chuyển đổi rõ ràng.

## 7. HUMAN-IN-THE-LOOP CHECKPOINTS

Các quyết định BẮT BUỘC phải có human approval:

| Checkpoint | Khi nào | Ai duyệt |
|---|---|---|
| Chiến lược tổng thể | Trước khi triển khai chiến dịch | Marketing Leader |
| Content pillars | Khi thay đổi trụ cột nội dung | Marketing Leader |
| Ngân sách ads | Trước khi phân bổ/thay đổi budget | Chủ doanh nghiệp |
| Nội dung publish | Trước khi đăng bài/gửi email | Content Manager |
| Thay đổi docs | Khi cập nhật spec quan trọng | Marketing Leader |

## 8. FORMAT OUTPUT CHUẨN

Mọi output chính của agent phải có cấu trúc:
```
## [Tiêu đề output]
**Agent:** [agent_id]
**Ngày:** [timestamp]
**Task:** [mô tả task]

### Nội dung chính
[output chính theo format riêng của agent]

### Alignment Check
- Mục tiêu: ...
- KPI: ...

### Assumptions
- [ASM-1] ...

### Next Steps
- [bước tiếp theo, agent nào cần nhận output này]
```

## 9. XỬ LÝ CONFLICT

1. Phát hiện mâu thuẫn → Tạo conflict-report
2. Gửi Ops Coordinator
3. Ops Coordinator phân tích → quyết định hoặc escalate lên human
4. Ghi kết quả vào ERRORS.md nếu là pattern lặp lại

## 10. NGUYÊN TẮC SINGLE-RESPONSIBILITY

- Mỗi agent CHỈ làm đúng 1 việc chính.
- Nếu task yêu cầu nhiều chuyên môn → chia sub-task cho agent phù hợp.
- KHÔNG có agent "làm tất cả".

---

## DANH SÁCH AGENT HIỆN TẠI

| Agent | File | Giai đoạn |
|---|---|---|
| Marketing Strategist | `.agent/agents/marketing-strategist.md` | MVP |
| Customer Insight Research | `.agent/agents/customer-insight-research.md` | MVP |
| Content Planner | `.agent/agents/content-planner.md` | MVP |
| Copywriter | `.agent/agents/copywriter.md` | MVP |
| Social Media Manager | `.agent/agents/social-media-manager.md` | Mở rộng |
| Performance Marketing | `.agent/agents/performance-marketing.md` | Mở rộng |
| SEO/Traffic | `.agent/agents/seo-traffic.md` | Mở rộng |
| Analytics & Reporting | `.agent/agents/analytics-reporting.md` | Mở rộng |
| Operations Coordinator | `.agent/agents/operations-coordinator.md` | Mở rộng |

## THAM KHẢO

- Tài liệu thiết kế chi tiết: xem thư mục `01-Tong-quan/` → `03-Trien-khai/`
- Prompt mẫu: xem `02-Prompts/`

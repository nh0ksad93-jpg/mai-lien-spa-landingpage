# 1. TỔNG QUAN DỰ ÁN

## 1.1 Mô tả

Dự án này xây dựng một **đội marketing AI hoàn chỉnh** trên nền tảng Google Antigravity, sử dụng cấu trúc `.agents/` theo chuẩn mới nhất. Hệ thống mô phỏng một team marketing thực chiến với các nhóm chức năng: chiến lược, nghiên cứu insight, sáng tạo nội dung, quảng cáo, social media, phân tích hiệu quả, và điều phối công việc.

## 1.2 Nguyên tắc thiết kế

| Nguyên tắc | Mô tả |
|---|---|
| **Spec-first** | Mọi agent đều đọc spec/docs trước khi tạo output |
| **Planning-first** | Luôn lập kế hoạch trước khi thực thi |
| **Multi-agent collaboration** | Các agent phối hợp theo workflow rõ ràng |
| **Context engineering** | Biến tri thức doanh nghiệp thành cấu trúc file, rule, skill |
| **Intent engineering** | Prompt thiết kế theo mục tiêu kinh doanh cụ thể |
| **Human-in-the-loop** | Checkpoint duyệt tại các quyết định quan trọng |

## 1.3 Lộ trình triển khai

- **MVP (Tuần 1-2):** 4 agent cốt lõi (Strategist, Insight, Content Planner, Copywriter) + 1 workflow chính. **[HIỆN TẠI]: Áp dụng cho dự án Startup F&B.**
- **Mở rộng (Tuần 3-6):** Thêm Social, Performance, SEO, Analytics, Operations Coordinator
- **Tối ưu (Tháng 2-3):** Debate/critique workflow, A/B testing tự động, báo cáo nâng cao

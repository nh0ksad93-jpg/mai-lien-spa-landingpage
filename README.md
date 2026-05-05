# AI Marketing Team — Hướng Dẫn Dùng Project

> **Phiên bản:** 1.0 MVP  
> **Cập nhật:** 2026-05-03

## Giới thiệu

Dự án này xây dựng một **đội marketing AI hoàn chỉnh** trên nền tảng Google Antigravity, sử dụng hệ thống multi-agent. Mỗi agent đảm nhận một vai trò chuyên biệt: chiến lược, nghiên cứu, lên kế hoạch, viết nội dung, quảng cáo, phân tích...

## Cấu trúc thư mục

```
Antigravity/
├── .agent/                    # 🧠 Não bộ: agents, skills, shared context
│   ├── .shared/               # Tài liệu dùng chung giữa các agent
│   ├── agents/                # Định nghĩa vai trò từng agent
│   └── skills/                # Kỹ năng chuyên biệt
│
├── docs/                      # 📄 Tài liệu kinh doanh (source of truth)
│
├── Content/                   # ✍️ Nội dung sáng tạo (output)
├── Tạo ảnh/                   # 🎨 Hình ảnh marketing (output)
│
├── 01-Tong-quan/ → 03-Trien-khai/  # 📚 Tài liệu thiết kế & hướng dẫn
│
├── GEMINI.md                  # ⚙️ Rule điều hành trung tâm
├── ERRORS.md                  # 🐛 Log lỗi để cải thiện
├── README.md                  # 📖 File này
└── skill.md                   # 📋 Mục lục tham chiếu
```

## Bắt đầu nhanh

1. **Đọc `GEMINI.md`** — Hiểu 10 quy tắc vận hành
2. **Điền thông tin vào `docs/`** — Ít nhất 4 file: goals, persona, brand-voice, content-pillars
3. **Chạy workflow đầu tiên** — Xem `02-Prompts/prompt-use-cases.md`, bắt đầu với use case 10.1

## MVP Agents (Tuần 1-2)

| Agent | Vai trò |
|---|---|
| **Marketing Strategist** | Xây dựng chiến lược, định hướng chiến dịch |
| **Customer Insight Research** | Nghiên cứu khách hàng, phân tích thị trường |
| **Content Planner** | Lên kế hoạch nội dung, content calendar |
| **Copywriter** | Viết nội dung, copy quảng cáo |

## Nguyên tắc vàng

1. **SPEC TRƯỚC, LÀM SAU** — Đừng vội tạo agent khi chưa có docs đầy đủ
2. **MVP TRƯỚC, MỞ RỘNG SAU** — 4 agent + 1 workflow > 9 agent không docs
3. **HUMAN REVIEW LUÔN** — Ít nhất tháng đầu, đừng tin 100% vào AI
4. **GHI LOG MỌI LỖI** — ERRORS.md là tài sản quý nhất
5. **TINH CHỈNH LIÊN TỤC** — Prompt tốt nhất là prompt đã qua thực chiến

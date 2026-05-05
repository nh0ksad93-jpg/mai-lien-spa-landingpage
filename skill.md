# BỘ PROMPT HOÀN CHỈNH: XÂY DỰNG ĐỘI MARKETING AI TRÊN ANTIGRAVITY

> **Phiên bản:** 1.0 MVP  
> **Cập nhật:** 2026-05-03  
> **Mục đích:** Hướng dẫn triển khai hệ thống multi-agent marketing trên Google Antigravity

---

## 📁 CẤU TRÚC DỰ ÁN

```
Antigravity/
│
├── .agent/                          ← 🧠 NÃO BỘ (vận hành)
│   ├── .shared/                     ← Tài liệu dùng chung
│   │   ├── agent-registry.md        Danh sách agent & phạm vi
│   │   ├── workflow-definitions.md  Luồng phối hợp
│   │   ├── io-format-schema.md      Chuẩn input/output
│   │   └── handoff-protocols.md     Quy trình bàn giao
│   ├── agents/                      ← 9 agent chuyên môn
│   └── skills/                      ← 6 kỹ năng chuyên biệt
│
├── docs/                            ← 📄 TÀI LIỆU KINH DOANH (Source of Truth)
│   ├── user-profile.md              Hồ sơ anh Thành & Phong cách làm việc
│   ├── F-and-B/                     Chiến lược Quán ăn
│   ├── Spa/                         Chiến lược Tiệm Spa
│   ├── Affiliate/                   Dự án Tiếp thị liên kết
│   └── Knowledge-Base/              Kho tri thức học tập (Content, Ads, Quản trị)
│
├── Content/                         ← ✍️ OUTPUT nội dung
├── Tạo ảnh/                         ← 🎨 OUTPUT hình ảnh
│
├── 01-Tong-quan/                    ← 📚 THAM KHẢO: Tổng quan dự án
│   ├── tong-quan-du-an.md           Mô tả, nguyên tắc, lộ trình
│   ├── muc-tieu-kinh-doanh.md      Mục tiêu tổng thể, trade-offs
│   └── so-do-doi-ngu.md            Sơ đồ đội ngũ, ownership matrix
│
├── 02-Prompts/                      ← 💬 THAM KHẢO: Prompt mẫu
│   ├── prompt-scaffold.md           Prompt khởi tạo project
│   ├── prompt-agents.md             Prompt riêng 4 agent MVP
│   ├── prompt-use-cases.md          7 prompt tác vụ hằng ngày
│   └── prompt-multi-agent.md        4 prompt phối hợp đa agent
│
├── 03-Trien-khai/                   ← 🚀 THAM KHẢO: Hướng dẫn triển khai
│   ├── khuyen-nghi-trien-khai.md    Lộ trình, checklist, metrics
│   └── tong-ket.md                  Tóm tắt & nguyên tắc vàng
│
├── 04-Examples/                     ← 🏆 THƯ VIỆN MẪU: Bài viết & Ads thành công
│   ├── Best-Copy/                   Các mẫu content hiệu quả cao
│   └── Best-Ads/                    Các mẫu ads chuyển đổi tốt
│
├── GEMINI.md                        ← ⚙️ 10 rules điều hành trung tâm
├── ERRORS.md                        ← 🐛 Log lỗi
├── HISTORY.md                       ← 📈 Nhật ký chiến dịch & hiệu quả
├── README.md                        ← 📖 Hướng dẫn dùng
└── skill.md                         ← 📋 File này (mục lục)
```

---

## 🚀 BẮT ĐẦU NHANH

```
1. Đọc    → 01-Tong-quan/ (hiểu dự án)
2. Điền   → docs/ (thông tin doanh nghiệp thật)
3. Chạy   → 02-Prompts/prompt-use-cases.md (use case đầu tiên)
4. Review → Duyệt output tại mỗi checkpoint
5. Log    → Ghi lỗi vào ERRORS.md
6. Mở rộng → 03-Trien-khai/ (lộ trình tiếp theo)
```

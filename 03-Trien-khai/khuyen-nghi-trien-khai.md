# 14. KHUYẾN NGHỊ TRIỂN KHAI THỰC TẾ

## 14.1 Lộ trình MVP → Mở rộng

```
TUẦN 1-2: MVP
├── Setup 4 agent: Strategist, Insight, Content Planner, Copywriter
├── Tạo docs cơ bản: goals, persona, brand-voice, content-pillars
├── Chạy 1 workflow: Lập kế hoạch content tháng
├── Human review tại mọi checkpoint
└── Ghi nhận lỗi vào ERRORS.md

TUẦN 3-4: Ổn định MVP
├── Fix lỗi từ ERRORS.md
├── Tinh chỉnh prompt dựa trên output thực tế
├── Bổ sung docs: offer-and-funnel, campaign-workflow
├── Chạy workflow thứ 2: Chiến dịch lead conversion
└── Đánh giá chất lượng output (1-10 cho mỗi agent)

TUẦN 5-8: Mở rộng Phase 1
├── Thêm Operations Coordinator
├── Thêm Analytics & Reporting Agent
├── Thêm Social Media Manager
├── Setup reporting workflow tuần/tháng
└── Bắt đầu debate/critique workflow

THÁNG 3-6: Mở rộng Phase 2
├── Thêm Performance Marketing Agent
├── Thêm SEO/Traffic Agent
├── Setup A/B testing workflow
├── Tối ưu prompt dựa trên 2 tháng data
└── Giảm dần human checkpoints cho task routine
```

## 14.2 Checklist trước khi bắt đầu

```markdown
□ Đã điền đầy đủ docs/marketing-goals.md
□ Đã điền đầy đủ docs/customer-persona.md (ít nhất 1 persona)
□ Đã điền đầy đủ docs/brand-voice.md
□ Đã điền đầy đủ docs/content-pillars.md
□ Đã tạo GEMINI.md với 10 rules
□ Đã tạo 4 agent files (MVP)
□ Đã tạo ít nhất 2 skills (planning, content-review)
□ Đã xác định ai là human reviewer
□ Đã setup kênh marketing cần dùng
□ Đã có data lịch sử (nếu có) để Analytics dùng
```

## 14.3 Metrics đánh giá hệ thống

| Metric | Cách đo | Target tuần 1-2 | Target tháng 2 |
|---|---|---|---|
| Output quality score | Human đánh giá 1-10 | ≥ 6/10 | ≥ 8/10 |
| Thời gian lập kế hoạch | Giờ/tháng | Giảm 30% | Giảm 50% |
| Số lần bịa data | Đếm trong output | < 3/tuần | 0 |
| Alignment với KPI | % output có alignment check | > 70% | > 95% |
| Human intervention rate | % task cần sửa | < 40% | < 20% |

## 14.4 Lưu ý quan trọng

```markdown
⚠️ ĐỪNG kỳ vọng hoàn hảo từ ngày đầu.
   → Bắt đầu nhỏ, đo lường, tinh chỉnh.

⚠️ ĐỪNG bỏ human review quá sớm.
   → Ít nhất 1 tháng đầu, duyệt mọi output quan trọng.

⚠️ ĐỪNG để agent tự cập nhật docs.
   → Chỉ Ops Coordinator, có log, có approval.

⚠️ ĐỪNG dùng output mà không kiểm tra assumptions.
   → Đọc section "assumptions" mỗi lần nhận output.

⚠️ CẬP NHẬT ERRORS.md mỗi khi phát hiện pattern lỗi.
   → Đây là tài liệu quý nhất để cải thiện hệ thống.
```

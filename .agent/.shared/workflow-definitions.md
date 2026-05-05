# Workflow Definitions — Định nghĩa luồng công việc

---

## Workflow 1: Chiến dịch chuyển đổi lead (MVP)

```
Bước 1: [Human] → Yêu cầu chiến dịch (brief ban đầu)
    ↓
Bước 2: [Insight Agent] → Nghiên cứu khách hàng mục tiêu, pain points, cơ hội
    ↓
Bước 3: [Strategist] → Đọc insight + goals → Tạo chiến lược chiến dịch
    ↓
Bước 4: [Human] → ✅ Duyệt chiến lược (CHECKPOINT)
    ↓
Bước 5: [Content Planner] → Đọc strategy + insight → Lên content calendar + brief
    ↓
Bước 6: [Human] → ✅ Duyệt content plan (CHECKPOINT)
    ↓
Bước 7: [Copywriter] → Nhận brief → Viết content/copy theo từng piece
    ↓
Bước 8: [Content Planner] → Review content (brand voice, alignment)
    ↓
Bước 9: [Human] → ✅ Duyệt content trước publish (CHECKPOINT)
    ↓
Bước 10: [Social Media / Performance] → Triển khai trên kênh
    ↓
Bước 11: [Analytics] → Thu thập data → Báo cáo hiệu quả
    ↓
Bước 12: [Strategist] → Đọc báo cáo → Đề xuất tối ưu → Quay lại Bước 2
```

---

## Workflow 2: Lập kế hoạch nội dung tháng (MVP)

```
Bước 1: [Human] → "Lên kế hoạch content tháng [X]"
    ↓
Bước 2: [Insight Agent] → Review persona, trending topics, performance tháng trước
    ↓
Bước 3: [Strategist] → Xác nhận ưu tiên tháng, KPI mục tiêu
    ↓
Bước 4: [Content Planner] → Tạo content calendar chi tiết
    ↓
Bước 5: [Human] → ✅ Duyệt calendar (CHECKPOINT)
    ↓
Bước 6: [Copywriter] → Viết batch content theo calendar
```

---

## Cơ chế chống trùng việc

1. Mỗi agent chỉ tạo output trong phạm vi trách nhiệm đã định nghĩa
2. Nếu cần output ngoài phạm vi → tạo request gửi agent tương ứng
3. Mỗi output phải ghi rõ agent_id và timestamp

## Cơ chế chống mâu thuẫn

1. Nếu output mâu thuẫn với docs/spec → ưu tiên docs/spec
2. Nếu phát hiện mâu thuẫn → tạo "conflict-report" gửi Ops Coordinator
3. Ops Coordinator quyết định escalate lên human hoặc giải quyết

## Cơ chế chống bịa data

1. Mọi số liệu phải có nguồn (data thực hoặc ghi rõ "estimated")
2. Nếu thiếu data → ghi vào section "assumptions" + đề xuất câu hỏi
3. KHÔNG BAO GIỜ tự bịa testimonial, case study, hoặc số liệu thống kê

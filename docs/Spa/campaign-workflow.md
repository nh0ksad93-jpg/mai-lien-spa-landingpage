# Campaign Workflow

> **Source of Truth cho:** Steps, handoffs, approvals  
> **Ai cập nhật:** Ops Coordinator

---

## Workflow chuẩn: Tạo chiến dịch mới

| Bước | Agent | Hành động | Input từ | Output cho | Checkpoint |
|---|---|---|---|---|---|
| 1 | Human | Tạo brief chiến dịch | — | Insight Agent | — |
| 2 | Insight Agent | Nghiên cứu khách hàng | Brief | Strategist | — |
| 3 | Strategist | Xây chiến lược | Insight report | Content Planner | ✅ Human duyệt |
| 4 | Content Planner | Lên content calendar | Strategy | Copywriter | ✅ Human duyệt |
| 5 | Copywriter | Viết content | Content brief | Content Planner | — |
| 6 | Content Planner | Review content | Content piece | Social/Performance | ✅ Human duyệt |
| 7 | Social/Performance | Triển khai | Content duyệt | Analytics | — |
| 8 | Analytics | Báo cáo hiệu quả | Data các kênh | Strategist | — |

## Quy tắc
- Mọi checkpoint ✅ đều BẮT BUỘC human approval trước khi tiếp tục
- Nếu agent nhận output không đủ thông tin → tạo request bổ sung
- Mỗi output phải theo format chuẩn (xem `.agent/.shared/io-format-schema.md`)

---

> **Cập nhật lần cuối:** [ngày]

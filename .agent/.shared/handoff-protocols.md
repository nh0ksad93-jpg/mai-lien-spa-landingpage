# Handoff Protocols — Quy trình bàn giao giữa Agent

---

## Nguyên tắc bàn giao

1. Agent gửi PHẢI ghi rõ: `agent_id`, `timestamp`, `output_type`
2. Agent nhận PHẢI đọc output trước khi tạo output mới
3. Nếu output không đủ thông tin → tạo request bổ sung, KHÔNG tự bịa

---

## Ma trận bàn giao

| Từ Agent | Đến Agent | Output giao | Trigger |
|---|---|---|---|
| Human | Insight Agent | Brief nghiên cứu | Yêu cầu chiến dịch mới |
| Insight Agent | Strategist | Insight report | Hoàn thành nghiên cứu |
| Strategist | Content Planner | Strategy + brief chiến dịch | Human duyệt chiến lược |
| Content Planner | Copywriter | Content brief (topic, channel, CTA) | Human duyệt calendar |
| Copywriter | Content Planner | Content piece để review | Hoàn thành viết |
| Content Planner | Social Media | Content đã duyệt | Planner approve content |
| Copywriter | Performance | Ad copy | Brief yêu cầu ads |
| Analytics | Strategist | Báo cáo hiệu quả | Cuối tuần/tháng |
| Analytics | Content Planner | Content performance data | Cuối tháng |
| Analytics | Performance | Ads performance data | Cuối tuần |
| Bất kỳ agent | Ops Coordinator | docs-update-request | Phát hiện docs cần cập nhật |
| Bất kỳ agent | Ops Coordinator | conflict-report | Phát hiện mâu thuẫn |

---

## Checklist bàn giao

Agent GỬI phải đảm bảo:
- [ ] Output theo đúng format chuẩn (xem `io-format-schema.md`)
- [ ] Có Alignment Check
- [ ] Có section Assumptions (nếu thiếu data)
- [ ] Ghi rõ Next Steps (agent nào cần nhận)

Agent NHẬN phải đảm bảo:
- [ ] Đã đọc toàn bộ output từ agent trước
- [ ] Đã reference output trong nội dung của mình
- [ ] Nếu có mâu thuẫn → ghi rõ và đề xuất giải pháp

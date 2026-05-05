# 10. PROMPT MẪU CHO CÁC TÁC VỤ MARKETING (USE CASE)

## 10.1 Lập kế hoạch marketing tháng (MVP)

```
@operations-coordinator

Lập kế hoạch marketing tháng 6/2026 cho [Tên doanh nghiệp].

Workflow:
1. Gọi @insight-agent: Review persona, trending topics tháng 5, performance tháng trước
2. Gọi @strategist: Xác định ưu tiên tháng 6, KPI mục tiêu, phân bổ ngân sách
3. Gọi @content-planner: Tạo content calendar tháng 6 (4 tuần, tất cả kênh)
4. Human review: Duyệt calendar trước khi chuyển Copywriter

Thông tin bổ sung:
- Ngân sách tháng: [X triệu]
- Kênh: Facebook, Instagram, Blog, Email
- Mục tiêu: Tăng 15% lead so với tháng 5
- Sự kiện đặc biệt: [nếu có]

Format kết quả mong muốn:
- Bảng content calendar (ngày | kênh | chủ đề | format | CTA | persona)
- Checklist KPI cho tháng
- Timeline milestone
```

## 10.2 Nghiên cứu insight khách hàng

```
@customer-insight-research

Nghiên cứu insight khách hàng cho sản phẩm [Tên SP]:

Yêu cầu:
- Persona mục tiêu: [mô tả persona]
- Độ sâu: deep
- Focus: pain points, buying triggers, objections phổ biến
- So sánh với đối thủ: [Đối thủ A], [Đối thủ B]

Đọc trước: docs/[folder]/customer-persona.md, docs/[folder]/offer-and-funnel.md

Format kết quả:
- Bảng pain points (pain point | mức độ | evidence | content opportunity)
- Bảng objections (objection | cách xử lý | messaging gợi ý)
- Top 5 content opportunities xếp theo ưu tiên
- Section assumptions rõ ràng
```

## 10.3 Lên content pillar

```
@content-planner

Đề xuất content pillars cho Q3/2026:

Input:
- Đọc docs/[folder]/content-pillars.md (pillars hiện tại)
- Đọc output mới nhất từ @insight-agent
- Đọc chiến lược Q3 từ @strategist

Yêu cầu:
- Đề xuất 4-5 pillars chính
- Mỗi pillar: tên, mô tả, % phân bổ, ví dụ 3 chủ đề
- Giải thích logic phân bổ (tại sao pillar này chiếm nhiều/ít hơn)
- Nêu rõ pillar nào phục vụ awareness, pillar nào phục vụ conversion

Format: Bảng + giải thích chi tiết
```

## 10.4 Viết bài social

```
@copywriter

Viết 5 bài social Facebook cho tuần 1 tháng 6:

Brief:
- Đọc content calendar từ @content-planner (tuần 1/tháng 6)
- Đọc docs/[folder]/brand-voice.md
- Persona: [tên persona]

Mỗi bài cần:
- Hook (câu mở đầu hấp dẫn, dưới 20 từ)
- Body (150-300 từ, nói đúng ngôn ngữ persona)
- CTA rõ ràng
- 3-5 hashtags
- 1 variation A/B cho headline

Format output: Markdown, mỗi bài tách section rõ ràng
```

## 10.5 Viết quảng cáo chuyển đổi

```
@copywriter

Viết ad copy cho chiến dịch chuyển đổi lead [Tên chiến dịch]:

Brief:
- Sản phẩm: [mô tả]
- Offer: [ưu đãi cụ thể]
- Landing page: [URL hoặc mô tả]
- Persona: [tên persona từ docs]
- Platform: Facebook Ads

Cần tạo:
- 3 headlines (dưới 40 ký tự)
- 3 primary text variations (100-150 từ)
- 2 descriptions
- CTA button suggestion

Yêu cầu:
- Tối ưu conversion, không chỉ hay
- Dùng social proof nếu có data thực
- KHÔNG bịa số liệu hoặc testimonial
- Đọc docs/[folder]/brand-voice.md để đúng tone
```

## 10.6 Phân tích chiến dịch đang chạy

```
@analytics-reporting

Phân tích hiệu quả chiến dịch [Tên chiến dịch]:

Data input:
- Thời gian: [ngày bắt đầu] đến [ngày hiện tại]
- Kênh: [Facebook Ads, Google Ads, Email...]
- Metrics: [paste data hoặc link]

Yêu cầu phân tích:
- So sánh với KPI mục tiêu (đọc docs/[folder]/marketing-goals.md)
- Top performing / worst performing content/ad
- Chi phí/lead thực tế vs mục tiêu
- Xu hướng (improving / declining / stable)
- 3-5 đề xuất tối ưu cụ thể

Format: Dashboard bảng + insights + recommendations (xếp theo priority)
```

## 10.7 Đề xuất chiến lược tăng lead

```
@marketing-strategist

Đề xuất chiến lược tăng lead cho Q3/2026:

Context:
- Lead hiện tại: [X lead/tháng]
- Mục tiêu: [Y lead/tháng] (tăng Z%)
- Ngân sách thêm: [có/không, bao nhiêu]
- Kênh hiện tại: [liệt kê]
- Đọc báo cáo từ @analytics-agent (Q2 performance)

Yêu cầu:
- 3 kịch bản chiến lược (conservative, moderate, aggressive)
- Mỗi kịch bản: kênh, ngân sách, timeline, KPI dự kiến, rủi ro
- Đề xuất quick wins (có thể thấy kết quả trong 2 tuần)
- Checkpoint human review cho mỗi kịch bản

Format: Bảng so sánh 3 kịch bản + chi tiết từng kịch bản
```

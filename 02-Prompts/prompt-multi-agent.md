# 11. PROMPT PHỐI HỢP ĐA AGENT (DEBATE, CRITIQUE, REVIEW)

## 11.1 Phối hợp xây chiến lược sản phẩm mới

```
@operations-coordinator

Phối hợp 3 agent để xây chiến lược marketing cho [Sản phẩm X] trong 3 tháng tới:

Workflow:
1. @insight-agent: Nghiên cứu thị trường, đối thủ, persona cho [SP X]
   → Output: Insight report
   
2. @strategist: Đọc insight report → Xây chiến lược 3 tháng
   → Output: Marketing strategy với KPI, channels, campaigns
   
3. @content-planner: Đọc strategy + insight → Lên content plan tháng 1
   → Output: Content calendar + briefs

4. @strategist: Review content plan → Confirm alignment hoặc yêu cầu điều chỉnh

5. Human checkpoint: Duyệt toàn bộ package (insight + strategy + content plan)

Yêu cầu:
- Mỗi agent phải reference output của agent trước
- Nếu có mâu thuẫn → ghi rõ và đề xuất giải pháp
- Tổng hợp thành 1 package trình human duyệt
```

## 11.2 Analytics phản biện content plan

```
@operations-coordinator

Yêu cầu @analytics-agent phản biện content plan hiện tại:

Workflow:
1. @analytics-agent đọc content plan tháng hiện tại từ @content-planner
2. So sánh với data performance 3 tháng gần nhất
3. Đánh giá:
   - Content types nào đang có ROI thấp → nên giảm?
   - Kênh nào đang under-performing → cần điều chỉnh?
   - Có gap nào giữa plan và KPI mục tiêu?
4. Tạo critique report với:
   - Điểm mạnh của plan hiện tại
   - Rủi ro KPI cụ thể (nêu số liệu)
   - Đề xuất điều chỉnh (với logic data)

5. @content-planner đọc critique → Phản hồi hoặc điều chỉnh plan
6. Human review kết quả cuối

Format: Debate log (Agent A nói → Agent B phản hồi → Kết luận)
```

## 11.3 Performance đánh giá copy

```
@operations-coordinator

Yêu cầu @performance-agent đánh giá tính chuyển đổi của copy:

Input: Copy ads hiện tại từ @copywriter cho chiến dịch [Tên]

Workflow:
1. @performance-agent đánh giá:
   - Headline: hook strength (1-10), clarity (1-10)
   - CTA: urgency (1-10), clarity (1-10), relevance (1-10)
   - Overall conversion potential (1-10)
   - So sánh với best practices cho [platform]
   
2. Đề xuất A/B tests cụ thể:
   - Test 1: [variable] — variant A vs variant B
   - Test 2: [variable] — variant A vs variant B
   - Success metric cho mỗi test

3. @copywriter nhận feedback → Tạo variants theo đề xuất

4. Human review: Duyệt variants trước khi chạy test

Format: Scorecard + A/B test proposals + revised copy variants
```

## 11.4 Workflow tranh luận chiến lược

```
@operations-coordinator

Tổ chức phiên tranh luận chiến lược cho Q4:

Participants: @strategist, @insight-agent, @analytics-agent

Quy trình:
1. @analytics-agent trình bày: Performance review Q3 (data-driven)
2. @insight-agent trình bày: Thay đổi thị trường, persona shifts
3. @strategist đề xuất: Chiến lược Q4 dựa trên 2 input trên

4. Debate round:
   - @analytics-agent phản biện chiến lược (góc nhìn data/ROI)
   - @insight-agent phản biện chiến lược (góc nhìn khách hàng)
   - @strategist phản hồi và điều chỉnh

5. Kết luận: Chiến lược Q4 final với consensus points và disagreements

6. Human checkpoint: Quyết định final

Rules tranh luận:
- Mỗi agent chỉ phản biện trong phạm vi chuyên môn
- Phải dùng evidence, không dùng ý kiến cá nhân
- Ghi rõ consensus vs disagreement
- Không thay đổi docs mà không qua approval
```

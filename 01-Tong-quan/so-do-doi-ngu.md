# 3. SƠ ĐỒ ĐỘI NGŨ AGENT ĐỀ XUẤT

## 3.1 Tổng quan đội ngũ

### MVP Agents (4 agent - Tuần 1-2)

| Agent | Vai trò chính | Ưu tiên |
|---|---|---|
| **Marketing Strategist** | Xây dựng chiến lược, định hướng chiến dịch | ⭐⭐⭐ |
| **Customer Insight Research** | Nghiên cứu khách hàng, phân tích thị trường | ⭐⭐⭐ |
| **Content Planner** | Lên kế hoạch nội dung, content calendar | ⭐⭐⭐ |
| **Copywriter** | Viết nội dung, copy quảng cáo, bài social | ⭐⭐⭐ |

### Advanced Agents (5 agent - Mở rộng)

| Agent | Vai trò chính | Ưu tiên |
|---|---|---|
| **Social Media Manager** | Quản lý kênh social, lịch đăng, engagement | ⭐⭐ |
| **Performance Marketing** | Quảng cáo trả phí, tối ưu chiến dịch ads | ⭐⭐ |
| **SEO/Traffic** | Tối ưu SEO, organic traffic, keyword research | ⭐⭐ |
| **Analytics & Reporting** | Phân tích dữ liệu, báo cáo hiệu quả | ⭐⭐ |
| **Operations Coordinator** | Điều phối trung tâm, quản lý workflow | ⭐⭐⭐ |

## 3.2 Sơ đồ phối hợp

```
┌─────────────────────────────────────────────────────┐
│           OPERATIONS COORDINATOR (Orchestrator)      │
│         Nhận yêu cầu → Phân task → Kiểm tra output  │
└──────────┬──────────┬──────────┬────────────────────┘
           │          │          │
    ┌──────▼──┐ ┌─────▼────┐ ┌──▼───────────┐
    │STRATEGIST│ │ INSIGHT  │ │CONTENT PLANNER│
    │Chiến lược│ │Nghiên cứu│ │Kế hoạch ND   │
    └────┬─────┘ └────┬─────┘ └──────┬────────┘
         │            │              │
         └──────┬─────┘              │
                │                    │
         ┌──────▼─────┐      ┌──────▼──────┐
         │ COPYWRITER │      │SOCIAL MEDIA │
         │ Viết content│      │Quản lý kênh │
         └──────┬──────┘      └──────┬──────┘
                │                    │
    ┌───────────▼────┐    ┌──────────▼──────┐
    │ PERFORMANCE MKT│    │   SEO/TRAFFIC   │
    │ Quảng cáo paid │    │ Organic traffic │
    └───────────┬────┘    └──────────┬──────┘
                │                    │
                └────────┬───────────┘
                  ┌──────▼──────┐
                  │  ANALYTICS  │
                  │  Báo cáo KPI│
                  └─────────────┘
```

## 3.3 Ownership Matrix

| Lĩnh vực | Owner chính | Hỗ trợ | Reviewer |
|---|---|---|---|
| Chiến lược marketing | Strategist | Insight | Human |
| Persona & Insight | Insight | Strategist | Human |
| Content calendar | Content Planner | Strategist, Copywriter | Human |
| Copy & Content | Copywriter | Content Planner | Strategist |
| Social publishing | Social Media | Copywriter | Content Planner |
| Paid ads | Performance | Copywriter, Analytics | Human |
| SEO | SEO/Traffic | Content Planner | Analytics |
| Báo cáo | Analytics | Tất cả agent | Human |
| Điều phối | Ops Coordinator | — | Human |

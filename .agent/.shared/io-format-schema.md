# I/O Format Schema — Chuẩn Input/Output giữa các Agent

---

## Format output chuẩn (Mọi agent)

```
## [Tiêu đề output]
**Agent:** [agent_id]
**Ngày:** [timestamp]
**Task:** [mô tả task]

### Nội dung chính
[output chính theo format riêng của agent]

### Alignment Check
- Mục tiêu: [mục tiêu từ docs/marketing-goals.md]
- KPI: [KPI cụ thể]

### Assumptions
- [ASM-1] ...

### Next Steps
- [bước tiếp theo, agent nào cần nhận output này]
```

---

## Format riêng theo Agent

### Marketing Strategist → Output: marketing-strategy
```yaml
strategy_name: string
timeframe: "monthly | quarterly"
objectives:
  - objective: string
    kpi: string
    target: string
target_segments:
  - segment_name: string
    priority: "high | medium | low"
channels:
  - channel: string
    role: string
    budget_percent: number
campaigns:
  - name: string
    type: "awareness | consideration | conversion | retention"
    timeline: string
    key_message: string
budget_allocation:
  total: number
  breakdown: []
assumptions: []
human_review_required: []
```

### Customer Insight Research → Output: insight-report
```yaml
research_topic: string
methodology: string
key_findings:
  - finding: string
    evidence: string
    confidence: "high | medium | low"
persona_updates:
  - persona_name: string
    new_insights: []
market_trends:
  - trend: string
    impact: string
    recommendation: string
content_opportunities:
  - topic: string
    audience_interest: "high | medium | low"
    competition_level: "high | medium | low"
assumptions: []
```

### Content Planner → Output: content-plan
```yaml
plan_name: string
timeframe: "weekly | monthly"
content_pillars:
  - pillar: string
    weight_percent: number
calendar:
  - date: string
    channel: string
    content_type: string
    topic: string
    pillar: string
    objective: string
    cta: string
    assigned_to: string
    status: "planned | in-progress | review | approved | published"
assumptions: []
```

### Copywriter → Output: content-piece
```yaml
content_id: string
type: "social-post | blog | email | ad-copy | landing-page | video-script"
channel: string
headline: string
body: string
cta: string
hashtags: []
seo_keywords: []
variations: []
brand_voice_check:
  tone_match: "yes | partial | no"
  persona_fit: "yes | partial | no"
assumptions: []
```

---

## Format docs-update-request

```yaml
docs_update_request:
  request_id: "DUR-[timestamp]"
  requesting_agent: string
  target_file: string
  change_type: "add | modify | delete"
  current_content: string
  proposed_content: string
  reason: string
  priority: "high | medium | low"
```

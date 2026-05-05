# 8. PROMPT SCAFFOLD DỰ ÁN

## 8.1 Prompt khởi tạo project (copy-paste vào Antigravity)

```
Hãy scaffold một dự án "AI Marketing Team" hoàn chỉnh với cấu trúc sau:

ai-marketing-team/
├── GEMINI.md
├── README.md  
├── ERRORS.md
├── .agents/
│   ├── agents/ (marketing-strategist.md, customer-insight-research.md, 
│   │           content-planner.md, copywriter.md)
│   ├── skills/ (planning-skill.md, campaign-brief-skill.md, content-review-skill.md)
│   ├── rules/ (central-governance.md, output-format-rules.md, collaboration-rules.md)
│   └── .shared/ (agent-registry.md, workflow-definitions.md, io-format-schema.md)
└── docs/ (marketing-goals.md, customer-persona.md, brand-voice.md, 
           offer-and-funnel.md, content-pillars.md, campaign-workflow.md, analytics-kpi.md)

Yêu cầu:
1. GEMINI.md: 10 rule điều hành (plan trước, không bịa data, đọc spec, bám KPI, 
   cập nhật qua Ops Coordinator, tối ưu conversion, human-in-the-loop, format chuẩn, 
   xử lý conflict, single-responsibility).
2. Mỗi agent file: role, mục tiêu, input/output format (YAML), KPI nội bộ, 
   ranh giới, phối hợp, lỗi cần tránh, quyền docs.
3. Mỗi docs file: template + ví dụ mẫu để điền thông tin doanh nghiệp.
4. Ưu tiên MVP: 4 agent chính + 1 workflow lead conversion.

Thông tin doanh nghiệp mẫu:
- Ngành: [Điền]
- Sản phẩm: [Điền]
- Persona: [Điền]
- Ngân sách: [Điền]
- Kênh: [Điền]
- Mục tiêu 3 tháng: [Điền]
```

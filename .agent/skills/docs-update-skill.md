# Docs Update Skill

## Mục đích
Quy trình cập nhật tài liệu source-of-truth.

## Khi nào dùng
- Khi agent phát hiện docs cần cập nhật
- Khi có thay đổi chiến lược, persona, brand voice

## Agent DUY NHẤT được dùng
Operations Coordinator

## Quy trình
1. Nhận docs-update-request từ agent
2. Verify request hợp lệ (có reason, có evidence)
3. Kiểm tra conflict với docs hiện tại
4. Nếu thay đổi lớn → escalate human review
5. Thực hiện cập nhật
6. Ghi log thay đổi vào cuối file
7. Thông báo agent liên quan

## Constraints
- KHÔNG agent nào khác được tự cập nhật docs
- Mỗi thay đổi phải có log
- Thay đổi chiến lược/brand → bắt buộc human approval

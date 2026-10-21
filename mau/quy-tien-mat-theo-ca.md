# Quỹ tiền mặt theo ca

Bảng này để tính số tiền cần có trong két đầu ca. Giữ ít quá thì thiếu tiền thối, giữ nhiều quá thì chôn vốn và đếm mệt.

## Bước 1: Ước doanh thu một ca

| Ngày | Doanh thu thực tế | Ghi chú |
| --- | --- | --- |
| Thứ 2 | | |
| Thứ 3 | | |
| Thứ 4 | | |
| Thứ 5 | | |
| Thứ 6 | | |
| Thứ 7 | | |
| Chủ nhật | | |
| Trung bình | | |

Lấy trung bình của tuần trước làm mốc. Ngày nào đông gấp đôi thì tính riêng, đừng lấy một mức cho cả tuần.

## Bước 2: Tính tiền thối cần có

Công thức: **doanh thu ca ÷ tỷ lệ thối**

Tỷ lệ thối là số đồng bán ra được trên mỗi đồng tiền thối cần có. Mỗi cửa hàng một tỷ lệ khác nhau, nên phải tự đếm ra chứ không áp dùng con số của người khác. Cách đếm: lấy một ca bình thường, đầu ca có bao nhiêu tiền, cuối ca còn bao nhiêu tiền lẻ.

| Chỉ số | Số của cửa hàng bạn |
| --- | --- |
| Doanh thu ca trung bình | |
| Tỷ lệ thối (1:___) | |
| Tiền thối cần có | |
| Dự phòng thêm | |
| **Tổng cần trong két** | |

Dùng script trong repo để tính nhanh:

```bash
node cong-cu/tinh-quy-tien.mjs --doanh-thu 8000000 --ti-le-thoi 3 --muc-chuan 2500000
```

Tỷ lệ dự phòng do chủ quầy tự quyết, script mặc định 20%, đổi bằng cờ `--du-phong`.

## Bước 3: Chia theo mệnh giá

Chuẩn bị sẵn nhiều tờ mệnh giá nhỏ hơn, vì khách hay đưa tờ lớn và cần tiền lẻ. Số tờ tối thiểu thì tự chọn, rồi kiểm lại mỗi quý cho khớp với mức quỹ chuẩn.

| Mệnh giá | Số tờ tối thiểu | Thành tiền |
| --- | --- | --- |
| 500.000 | | |
| 200.000 | | |
| 100.000 | | |
| 50.000 | | |
| 20.000 | | |
| 10.000 | | |
| 5.000 | | |
| Tiền lẻ khác | | |
| **Tổng** | | |

## Bước 4: Kiểm lại mỗi quý

Doanh thu thay đổi thì mức quỹ cũng phải chỉnh. Mỗi quý lấy một tuần ra đếm lại, so với bảng cũ, sửa chỗ lệch.

| Quý | Tổng quỹ chuẩn | Doanh thu ca TB | Ngày chỉnh |
| --- | --- | --- | --- |
| Quý 1 | | | |
| Quý 2 | | | |
| Quý 3 | | | |
| Quý 4 | | | |

## Nguyên tắc

Két bán hàng chỉ giữ đủ xài trong ca. Phần còn lại để ở két an toàn riêng hoặc tài khoản ngân hàng. Tiền nằm nhiều trong két bán hàng thì mỗi lần đếm mất thời gian, mà thất thoát cũng khó phát hiện vì số lớn che mất khoản lệch nhỏ.

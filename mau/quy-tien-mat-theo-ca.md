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

Tỷ lệ thối là số đồng bán ra được trên mỗi đồng tiền thối cần có. Cửa hàng bán lẻ nhỏ thường rơi vào khoảng 1:3 đến 1:5. Tính bằng cách lấy một ca bình thường ra đếm: đầu ca có bao nhiêu tiền, cuối ca còn bao nhiêu tiền lẻ.

| Chỉ số | Số của cửa hàng bạn |
| --- | --- |
| Doanh thu ca trung bình | |
| Tỷ lệ thối (1:___) | |
| Tiền thối cần có | |
| Dự phòng 20% | |
| **Tổng cần trong két** | |

Dùng script trong repo để tính nhanh:

```bash
node cong-cu/tinh-quy-tien.mjs --doanh-thu 8000000 --ti-le-thoi 3 --muc-chuan 2500000
```

## Bước 3: Chia theo mệnh giá

Mệnh giá cần nhiều nhất là 10.000, 20.000 và 50.000, vì khách hay đưa tờ 500.000 và 200.000.

| Mệnh giá | Số tờ tối thiểu | Thành tiền |
| --- | --- | --- |
| 500.000 | 2 | |
| 200.000 | 3 | |
| 100.000 | 5 | |
| 50.000 | 20 | |
| 20.000 | 30 | |
| 10.000 | 40 | |
| 5.000 | 20 | |
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

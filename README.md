# Mẫu quản lý cửa hàng — bộ sổ tay dùng được ngay

Bộ mẫu đơn giản cho chủ cửa hàng nhỏ: checklist mở ca, đóng ca, bảng tính quỹ tiền mặt, bảng kiểm kê kho, theo dõi hàng bán chạy, đối chiếu công nợ. In ra, điền bằng bút, hoặc copy vào Google Sheets — đều được.

Không cần phần mềm, không cần đăng nhập, không tính phí. Mọi file trong thư mục `mau/` đều là Markdown, mở bằng Notepad, Google Docs hay VS Code đều hiện đúng bảng.

## Trong repo này có gì

| File | Dùng khi nào |
| --- | --- |
| `mau/checklist-mo-ca.md` | Đầu ca, trước khi khách vào cửa |
| `mau/checklist-dong-ca.md` | Cuối ca, trước khi rời quầy |
| `mau/quy-tien-mat-theo-ca.md` | Tính số tiền phải có trong két đầu ca |
| `mau/kiem-ke-kho.md` | Đếm kho định kỳ, hoặc khi nghi ngờ lệch |
| `mau/theo-doi-hang-hoa.md` | Xem món nào chạy, món nào đứng |
| `mau/doi-chieu-cong-no.md` | So tiền mua hàng với tiền phải trả nhà cung cấp |
| `mau/bien-ban-ban-giao-tien.md` | Ghi lại việc bàn giao tiền giữa hai ca |
| `cong-cu/tinh-quy-tien.mjs` | Script Node.js tính quỹ tiền mặt, không cần cài thêm gì |

Bản web của bộ mẫu này (mở trên điện thoại được, có nút in): [hakiet.github.io/mau-quan-ly-cua-hang](https://hakiet.github.io/mau-quan-ly-cua-hang/).

## Dùng nhanh

```bash
# Tính quỹ tiền mặt cho một ca
node cong-cu/tinh-quy-tien.mjs --doanh-thu 8000000 --ti-le-thoi 3 --muc-chuan 2500000

# Kiểm tra kết quả (không cần cài test framework)
node cong-cu/tinh-quy-tien.mjs --self-test
```

Script chạy được bằng Node.js 18 trở lên, không cài dependency nào.

## Vài nguyên tắc đơn giản, cửa hàng nào cũng dùng được

**Tiền trong két vừa đủ xài trong ca.** Giữ nhiều quá thì mỗi lần đếm mất thời gian, thất thoát nhỏ cũng khó thấy vì con số to che mất. Giữ ít quá thì thiếu tiền thối, khách phải chờ.

**Đếm tiền hai người cùng kiểm.** Một người đếm, một người ghi. Người ghi là người nhận bàn giao sau đó.

**Mọi khoản thu trong ngày đều tính vào.** Kể cả tiền gửi xe, tiền bán thêm món lẻ ngoài quầy. Gộp chung vào tiền két thì cuối ngày không biết mất thêm bao nhiêu.

**Kiểm kê kho theo định kỳ, không đợi đến khi nghi ngờ.** Lệch 1–2% là chuyện bình thường do hàng hư, hàng mất, hàng đếm sai. Lệch 5% mà không xử lý thì đến cuối năm không biết lệch ở đâu.

Chi tiết về cách mở ca buổi sáng và đối chiếu két có bài chi tiết hơn ở [hướng dẫn mở ca bán hàng buổi sáng](https://www.cachquanlybanhang.com/blog/mo-ca-ban-hang-buoi-sang/). Phần đóng ca và ghi biên bản bàn giao nằm ở [đóng ca đối soát tiền cuối ngày](https://www.cachquanlybanhang.com/blog/dong-ca-doi-soat-tien-cuoi-ngay/).

Cách tính quỹ tiền mặt để đủ xài mà không chôn vốn được giải thích kỹ hơn ở [quỹ tiền mặt nên giữ bao nhiêu cho mỗi ca](https://www.cachquanlybanhang.com/blog/quy-tien-mat-giu-bao-nhieu-la-du/).

## Mẫu bảng tính tải thẳng

Bộ mẫu trong repo này viết bằng Markdown để in ra. Nếu bạn muốn bảng tính
mở sẵn trên trình duyệt để điền thẳng, không cần tải, không cần cài gì:

- Bảng tính giá vốn món
- Mẫu biên nhận giặt
- Bảng chấm giờ ca

Xem tại https://www.biz-vn.com/tai-lieu/

## Nếu muốn dùng phần mềm

Nếu cửa hàng nhiều quầy, nhiều ca hoặc cần xem doanh số từ xa, mấy file Markdown này sẽ không đủ. Khi đó dùng [EBIZ POS Offline](https://www.cachquanlybanhang.com/) — phần mềm bán hàng chạy trên máy cửa hàng, mất mạng vẫn tính tiền và trừ kho được, có mạng thì chủ xem doanh số trên điện thoại.

## Muốn đóng góp

Sửa file trong `mau/` cho gọn hơn, hoặc thêm mẫu mới theo ngành của bạn. Mở issue hoặc gửi pull request — mọi đóng góp đều được xem.

## License

MIT — xem file `LICENSE`.

#!/usr/bin/env node
// Tính quỹ tiền mặt nên giữ trong két cho một ca bán hàng.
// Chạy: node cong-cu/tinh-quy-tien.mjs --doanh-thu 8000000 --ti-le-thoi 3 --muc-chuan 2500000
// Không dùng dependency nào.

const args = process.argv.slice(2);
const get = (name, dflt) => {
  const i = args.indexOf('--' + name);
  return i >= 0 && args[i + 1] !== undefined ? Number(args[i + 1]) : dflt;
};
const has = (name) => args.includes('--' + name);

if (has('self-test')) {
  // Quy tien: doanh thu 8tr, ti le thoi 3, muc chuan 2.5tr, du phong 20%
  // thoi = 8tr / 3 = 2.666.666 ; + 20% du phong = 3.200.000 ; lam tron len 100k = 3.200.000
  const r = calc(8000000, 3, 2500000, 20);
  assert(r.thoi === 2666667, 'thoi = ' + r.thoi);
  assert(r.duPhong === 533333, 'duPhong = ' + r.duPhong);
  assert(r.tong === 3200000, 'tong = ' + r.tong);
  assert(r.mucChuan === 2500000, 'mucChuan = ' + r.mucChuan);
  // Ca dong gap doi doanh thu: thoi 5.333.333 + 20% = 6.400.000
  const r2 = calc(16000000, 3, 2500000, 20);
  assert(r2.thoi === 5333333, 'cao/thoi = ' + r2.thoi);
  assert(r2.tong === 6400000, 'cao/tong = ' + r2.tong);
  // Khong dat du phong: tong = lam tron len tram nghin cua thoi
  const r3 = calc(8000000, 3, 2500000, 0);
  assert(r3.duPhong === 0, 'duPhong=0');
  assert(r3.tong === 2700000, 'tong khong du phong = ' + r3.tong);
  // Lam tron len tram nghin
  assert(roundUp(1234567, 100000) === 1300000, 'roundUp');
  console.log('self-test OK');
  process.exit(0);
}

const doanhThu = get('doanh-thu', 0);
const tiLeThoi = get('ti-le-thoi', 0);
const mucChuan = get('muc-chuan', 0);
const duPhongPct = get('du-phong', 20);

if (!doanhThu || !tiLeThoi) {
  console.error('Can --doanh-thu va --ti-le-thoi. Vi du:');
  console.error('  node cong-cu/tinh-quy-tien.mjs --doanh-thu 8000000 --ti-le-thoi 3 --muc-chuan 2500000');
  process.exit(1);
}

const r = calc(doanhThu, tiLeThoi, mucChuan, duPhongPct);
const money = (n) => n.toLocaleString('vi-VN');
console.log('=== Quy tien mat theo ca ===');
console.log('Doanh thu uoc tinh : ' + money(r.doanhThu) + ' dong');
console.log('Ti le thoi         : 1 : ' + r.tiLeThoi + ' (truoc khi thoi)');
console.log('Tien thoi can co   : ' + money(r.thoi) + ' dong');
console.log('Du phong           : ' + money(r.duPhong) + ' dong');
console.log('Tong can trong ket : ' + money(r.tong) + ' dong');
if (r.mucChuan) console.log('Muc chuan da dat   : ' + money(r.mucChuan) + ' dong');
console.log('');
console.log(r.tong > r.mucChuan
  ? 'Nen tang muc chuan. Ke thu tien thoi ban le, khong giu het trong ket ban hang.'
  : 'Du tien cho ca. Nhung ngay dong hon thi tang them, khong giu nguyen mot muc ca nam.');

function calc(doanhThu, tiLeThoi, mucChuan, duPhongPct = 20) {
  const thoi = Math.round(doanhThu / tiLeThoi);
  const duPhong = Math.round(thoi * duPhongPct / 100);
  return {
    doanhThu, tiLeThoi, mucChuan,
    thoi,
    duPhong,
    tong: roundUp(thoi + duPhong, 100000),
  };
}
function roundUp(n, step) {
  return Math.ceil(n / step) * step;
}
function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL: ' + msg);
    process.exit(1);
  }
}

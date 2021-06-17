/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '__jdv=122270672|direct|-|none|-|1623903133460; __jdc=122270672; __jda=122270672.1623903133459883250468.1623903133.1623903133.1623903133.1; mba_muid=1623903133459883250468; shshshfpa=70dd6c92-3f8b-8a70-7e86-ba7fc9207400-1623903133; shshshfpb=bCH6HmZ9B4H5ey/Qr/kfxmA==; TrackerID=6JhRzKUNlN0Om3fx51Y5w6tUk3LiirbHSwajHeJVAaCTBm16ePJGbI2fF1spgBY21ko1tKz3PuBRNz_nwIF0H2zvJa5Ptp6ur-juTkbNLhU; pt_key=AAJgysvLADCtrl1No6PipXKCLkUiHcECbj2NEMdsuEVdx9q3Ne_FiRXGbT19WlGG_suKuH7mM7Q; pt_pin=hanyprin; pt_token=2ryfixiv; pwdt_id=hanyprin; sfstoken=tk01ma4351b49a8sMSsxKzJ4MysyVf/Bh35ktpXHIpf3RAuD4gJFz4yA622oNN/L8Z1tYF82FHqb6L2w4yZNpjBa4HLl; wxa_level=1; retina=1; jxsid=16239031802036353795; webp=1; visitkey=57033688468547179; shshshfp=158602493703dfa04dacd8f3679991a9; shshshsID=410739ffa86eafeb7e7571be6104f72b_2_1623903310496; 3AB9D23F7A4B3C9B=4WET3WLZ3YPECKPERSX3PVVX7ZE7M7UWC6VGST4CRVJ35AW26QISZOPE6BY7E3UFMM7TDTYVF3ZP3SCJDYHPY4WWTQ; cid=9; wqmnx1=MDEyNjM2NTpkMTM4OWwgblVuMSBNIHBLNSBMZW9zM00vOHIuM2ZmMjVWRUlVKFI=; __jdb=122270672.5.1623903133459883250468|1.1623903133; mba_sid=16239031334608435689999494258.5; __jd_ref_cls=MHome_PageExpo',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}

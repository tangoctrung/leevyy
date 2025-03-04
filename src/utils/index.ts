import { DAYS } from "@/types";

export function returnTypeDays(day: number, month: number): DAYS {
  if (day === 1 && month === 1) {
    return "1/1";
  }
  if (day === 14 && month === 2) {
    return "14/2";
  }
  if (day === 8 && month === 3) {
    return "8/3";
  }
  if (day === 14 && month === 3) {
    return "14/3";
  }
  if (day === 20 && month === 10) {
    return "20/10";
  }
  if (day === 25 && month === 10) {
    return "25/10";
  }
  return "";
}

export function formatTimeHourNormalDay() {
  const timeNow = new Date();
  const hour =
    timeNow.getHours() >= 10 ? timeNow.getHours() : "0" + timeNow.getHours();
  const minutes =
    timeNow.getMinutes() >= 10
      ? timeNow.getMinutes()
      : "0" + timeNow.getMinutes();
  const second =
    timeNow.getSeconds() >= 10
      ? timeNow.getSeconds()
      : "0" + timeNow.getSeconds();
  return hour + ":" + minutes + ":" + second;
}

export function formatTimeNormalDay() {
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const timeNow = new Date();
  const dayOfWeek = days[timeNow.getDay()];
  const day = timeNow.getDate();
  const month = timeNow.getMonth() + 1;
  const year = timeNow.getFullYear();
  return dayOfWeek + ", ngày " + day + " tháng " + month + " năm " + year;
}

export function formatTimeHolidayNormalDay() {
  const days = [
    "Tết Dương Lịch",
    "Valentine's",
    "Quốc tế Phụ nữ",
    "Phự nữ Việt Nam",
    "Sinh nhật bé iu - LeeVyy",
    "Giáng Sinh",
  ];
  const timeNow = new Date();
  const dayOfWeek = days[timeNow.getDay()];
  const day = timeNow.getDate();
  const month = timeNow.getMonth() + 1;
  const year = timeNow.getFullYear();
  return dayOfWeek + ", ngày " + day + " tháng " + month + " năm " + year;
}

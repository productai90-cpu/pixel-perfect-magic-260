const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** Converts Western digits in a string/number to Persian (Eastern Arabic) digits. */
export function toPersianDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]!);
}

/** 120000 -> "۱۲۰٬۰۰۰" */
export function formatPrice(amount: number): string {
  const grouped = amount.toLocaleString("en-US").replace(/,/g, "٬");
  return toPersianDigits(grouped);
}

/** 120000 -> "۱۲۰٬۰۰۰ تومان" */
export function formatToman(amount: number): string {
  return `${formatPrice(amount)} تومان`;
}

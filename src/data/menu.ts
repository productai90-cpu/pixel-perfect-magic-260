import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import burgerDouble from "@/assets/burger-double.jpg";
import sandwichChicken from "@/assets/sandwich-chicken.jpg";
import shawarma from "@/assets/shawarma.jpg";
import drinkMatcha from "@/assets/drink-matcha.jpg";
import dessertBrownie from "@/assets/dessert-brownie.jpg";
import fries from "@/assets/fries.jpg";
import interior from "@/assets/interior-1.jpg";

export const galleryImages = [
  { src: pizzaMargherita, alt: "پیتزا مارگاریتا تازه از فر" },
  { src: interior, alt: "فضای داخلی کافه نُور" },
  { src: burgerDouble, alt: "برگر دوبل چدار" },
  { src: fries, alt: "سیب‌زمینی سرخ‌کرده" },
  { src: drinkMatcha, alt: "ماتچا لاته یخ‌زده" },
  { src: dessertBrownie, alt: "برشِ کیک براونی" },
];

export type Category = {
  id: string;
  label: string;
};

export const categories: Category[] = [
  { id: "all", label: "همه" },
  { id: "pizza", label: "پیتزا" },
  { id: "burger", label: "برگر" },
  { id: "sandwich", label: "ساندویچ" },
  { id: "drink", label: "نوشیدنی" },
  { id: "dessert", label: "دسر" },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "pizza-margherita",
    name: "پیتزا مارگاریتا",
    description: "موزارلا، سس گوجهٔ خانگی و ریحان تازه",
    price: 285000,
    category: "pizza",
    image: pizzaMargherita,
  },
  {
    id: "burger-double",
    name: "برگر دوبل چدار",
    description: "دو لایه گوشت، پنیر چدار و سس مخصوص",
    price: 195000,
    category: "burger",
    image: burgerDouble,
  },
  {
    id: "sandwich-chicken",
    name: "ساندویچ مرغ گریل",
    description: "با کاهو، پنیر و سس مخصوص نُور",
    price: 165000,
    category: "sandwich",
    image: sandwichChicken,
  },
  {
    id: "shawarma",
    name: "شاورما مرغ",
    description: "مرغ کبابی، خیارشور و سس سیر خانگی",
    price: 150000,
    category: "sandwich",
    image: shawarma,
  },
  {
    id: "fries",
    name: "سیب‌زمینی سرخ‌کرده",
    description: "تازه سرخ‌شده با ادویهٔ مخصوص",
    price: 85000,
    category: "burger",
    image: fries,
  },
  {
    id: "drink-matcha",
    name: "ماتچا لاته یخ‌زده",
    description: "با شیر بادام و شربت وانیل",
    price: 98000,
    category: "drink",
    image: drinkMatcha,
  },
  {
    id: "dessert-brownie",
    name: "براونی شکلاتی",
    description: "مغزدار با تکه‌های شکلات تلخ",
    price: 110000,
    category: "dessert",
    image: dessertBrownie,
  },
];

export const restaurant = {
  name: "نُور",
  subtitle: "کافه و فست‌فود",
  tagline: ["سبزیجات تازه،", "ساخته‌شده با نور"],
  badge: "تحویل در ۲۵ دقیقه",
  intro:
    "از سال ۱۳۹۵، خوشمزه‌ترین ساندویچ‌ها و نوشیدنی‌های روز را در دل شهر آماده می‌کنیم.",
  about:
    "نُور یک آشپزخانهٔ کوچک خانوادگی در قلب تهران است. هر روز صبح مواد اولیه را تازه می‌خریم، نان را همان‌جا می‌پزیم و هر سفارش را لحظه‌ای که ثبت می‌شود آماده می‌کنیم.",
  hours: "هر روز، ۱۱:۰۰ تا ۲۳:۳۰",
  address: "تهران، خیابان ولیعصر، پلاک ۲۱۰",
  phone: "۰۲۱-۸۸۷۷۶۶۵۵",
};

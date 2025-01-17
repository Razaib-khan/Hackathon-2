"use client";

const images = [
  { url: '/Freshlime.png', id: 1, name: 'Fresh Lime' },
  { url: '/shopcard2.png', id: 2, name: 'Chocolate Muffin' },
  { url: '/shopcard3.png', id: 3, name: 'Burger' },
  { url: '/shopcard4.png', id: 4, name: 'Country Burger' },
  { url: '/shopcard5.png', id: 5, name: 'Drink' },
];

export default function Shopdetailsname() {
  let message = "";

  if (typeof window !== "undefined") {
    const curl = window.location.pathname;
    if (curl.includes('/Shop/1')) {
      message = "Fresh Lime";
    } else if (curl.includes('/Shop/2')) {
      message = "Chocolate Muffin";
    } else if (curl.includes('/Shop/3')) {
      message = "Burger";
    } else if (curl.includes('/Shop/4')) {
      message = "Country Burger";
    } else if (curl.includes('/Shop/5')) {
      message = "Drink";
    } else {
      ;
    }
  }

  return (
    <div>
      <section>
        <h1 className="text-5xl font-semibold">{message}</h1>
      </section>
    </div>
  );
}
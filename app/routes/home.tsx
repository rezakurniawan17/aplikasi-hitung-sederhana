import type { Route } from "./+types/home";
import { LinkButton } from "~/components/button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Aplikasi Hitung Sederhana" },
    { name: "description", content: "Aplikasi Hitung Penjumlahan, Pengurangan dan Perkalian" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center gap-6">
      <h1 className="lg:text-4xl text-4xl font-bold uppercase">Aplikasi Hitung Sederhana</h1>
      <p className="lg:text-lg text-base text-gray-700">
        Selamat datang di aplikasi hitung sederhana! Tunjukkan kemampuan berhitungmu disini
      </p>
      <p className="lg:text-xl text-lg font-semibold">Silahkan pilih permainan berikut !</p>
      <div className="flex lg:flex-row flex-col w-full items-center justify-center gap-3">
        {navLinks.map((link) => (
          <LinkButton href={link.href} key={link.name} name={link.name} />
        ))}
      </div>
    </div>
  )
}

const navLinks = [
  { name: "Penjumlahan", href: "/penjumlahan" },
  { name: "Pengurangan", href: "/pengurangan" },
  { name: "Perkalian", href: "/perkalian" },
]

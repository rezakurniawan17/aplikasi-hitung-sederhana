export function Button({ name, onClick }: { name: string, onClick?: () => void }) {
  return (
    <button onClick={onClick} className="border-2 w-full border-black bg-[#FF4081] px-5 py-3 font-semibold text-black shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 hover:ring-yellow-300 focus:outline-0">
      {name}
    </button>
  );
}

export function LinkButton({ name, href }: { name: string, href: string }) {
  return (
    <a href={href} className="border-2 w-full border-black bg-[#FF4081] px-5 py-3 font-semibold text-black shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 hover:ring-yellow-300 focus:outline-0 text-center block">
      {name}
    </a>
  );
}

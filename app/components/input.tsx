export function Input({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input
      type="number"
      className="placeholder:lg:text-base placeholder:text-sm p-2 w-64 text-center text-lg border-2 border-black shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300"
      onChange={onChange}
      placeholder="Masukkan Jawaban Anda"
    />
  );
}

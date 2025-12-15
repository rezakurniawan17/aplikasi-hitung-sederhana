import { Outlet } from "react-router"

export default function MainLayout() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#00BFFF]">
      <div className="mx-auto my-16 p-4 lg:p-8">
        <div className=" border-2 lg:p-8 px-3 py-8 h-fit  max-w-xl border-black bg-white mx shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0]">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

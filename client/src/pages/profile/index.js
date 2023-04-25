export default function Profile() {
  return (
    <>
      <div className="sm:container sm:mx-auto text-black">
        <div className="grid grid-cols-4 gap-4 p-5 justify-items-start">
          <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" class="w-32 rounded-full" alt="Avatar" />
          <h1 className="flex items-center">Kazuga</h1>
        </div>
        <div className="w-[250px]">
          <ul className="text-[#6b6b6b]">
            <li className="mb-[2px] pr-4 py-3 bg-slate-100">Courses</li>
            <li className="mb-[2px] pr-4 py-3 bg-slate-100">Quizzes</li>
            <li className="mb-[2px] pr-4 py-3 bg-slate-100">Wishlist</li>
            <li className="mb-[2px] pr-4 py-3 bg-slate-100">Orders</li>
            <li className="mb-[2px] pr-4 py-3 bg-slate-100">Settings</li>
            <li className="mb-[2px] pr-4 py-3 bg-slate-100">Logout</li>
          </ul>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

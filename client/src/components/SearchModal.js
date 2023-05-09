import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchModal = ({ searchModal, setSearchModal }) => {
  const router = useRouter();
  const [input, setInput] = useState("");

  const styles = {
    searchIcon: {},
    formInput: {},
  };

  useEffect(() => {
    if (searchModal) {
      document.getElementById("searchModal").focus();
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          router.push({ pathname: "/search", query: { key: input } });
          setSearchModal(false);
        }
        if (e.key === "Escape") {
          setSearchModal(false);
        }
      });
    }
  });
  return (
    <div
      className={`search-modal ${
        searchModal
          ? "open visible opacity-100 !items-start absolute top-0 left-0 right-0 z-10 h-full transition bg-light dark:bg-black "
          : "invisible opacity-0  "
      }`}
    >
      <button
        onClick={() => setSearchModal(false)}
        className="search-close absolute top-8 right-2 -translate-y-1/2 p-3 text-h4"
      >
        <IoCloseCircleOutline />
      </button>
      <input
        type="text"
        className="form-input bg-light h-full w-full !items-start border-0 bg-body placeholder:text-base dark:bg-darkmode-body"
        id="searchModal"
        placeholder="Type and hit enter..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchModal;

import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
// import useGetConversations from "../../hooks/useGetConversations";

const Searchinput = () => {
  const [search, setSearch] = useState();
  // const { conversations } = useGetConversations();
  // const searchItems = conversations.filter(
  //   (items) => items.userName === search
  // );
  // console.log(searchItems);

  return (
    <form className="flex items-center gap-2">
      <input
        type={search}
        placeholder="Search...."
        className="input input-bordered rounded-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Searchinput;

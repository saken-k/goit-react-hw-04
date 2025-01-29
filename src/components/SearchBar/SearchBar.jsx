import { useState } from "react";
import toast from "react-hot-toast";
import { IoSearch } from "react-icons/io5";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      toast.error("Please enter your request");
    } else {
      onSubmit(value);
    }
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <IoSearch size={24} />
        </button>
        <input
          className={css.input}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;

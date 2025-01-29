import css from "./Selector.module.css";

const Selector = ({ value, onChange }) => {
  return (
    <select className={css.select} value={value} onChange={onChange}>
      <option value={10}>10</option>
      <option value={20}>20</option>
    </select>
  );
};

export default Selector;

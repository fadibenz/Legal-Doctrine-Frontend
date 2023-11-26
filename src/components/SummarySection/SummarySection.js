import { SearchBar } from "../SearchBar/SearchBar";

import { TbHeartPlus } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";

export default function SummarySection() {
      const searchInput = useField("text");
      const powerTH = useField("number");
  return (
    <article className='Summary'>
      <div className='Summary__Search'>
        <SearchBar
          state={searchInput}
          placeholder={"Search..."}
          icon={<TfiSearch />}
        />
        <SearchBar
          state={powerTH}
          placeholder={"Power threshold"}
          icon={<TbHeartPlus />}
        />
      </div>
      <div className='Summary__Info'>
        <p>Min power: {power.min}</p>
        <p>Max power: {power.max}</p>
      </div>
    </article>
  );
}

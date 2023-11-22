import { SearchBar } from "../../components";

import { useField } from "../../hooks/useField";

import { TbHeartPlus } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";

import './PokemonTable.scss'

export default function PokemonTable() {
  const searchInput = useField("text");
  const powerTH = useField("number");
  console.log('searchInput', searchInput)
  console.log('powerTH', powerTH)

  return (
    <section className="Container">
      <article className="Summary">
        <div className="Summary__Search">
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
        <div className="Summary__Info">
          <p >Min power: 235</p>
          <p>Max power: 540</p>
        </div>
      </article>
      <article></article>
    </section>
  );
}

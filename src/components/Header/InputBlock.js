import { motion } from "framer-motion";
import { InputBlockComponent } from "../Styled/InputBlockComponent";
import { SearchContext } from "../../contexts/SearchContext";

export function InputBlock() {
  const { setSearch, handlerSearchSubmit, search } = React.useContext(
    SearchContext
  );

  return (
    <InputBlockComponent>
      <form onSubmit={handlerSearchSubmit}>
        <input
          required
          name='search'
          type='text'
          placeholder='Pesquisar...'
          title='Pesquisar'
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button type='submit' title='Buscar' alt='Buscar'>
          <motion.svg whileTap={{ scale: 0.8 }}>
            <path d='M12.1498 10.6918H11.3819L11.1098 10.4294C12.0952 9.28636 12.6369 7.82709 12.6358 6.3179C12.6358 5.06834 12.2653 3.84684 11.571 2.80786C10.8768 1.76889 9.89009 0.95911 8.73565 0.480924C7.58121 0.00273743 6.31089 -0.122378 5.08534 0.121399C3.85979 0.365177 2.73404 0.966898 1.85047 1.85047C0.966898 2.73404 0.365177 3.85979 0.121399 5.08534C-0.122378 6.31089 0.00273747 7.58121 0.480924 8.73565C0.95911 9.8901 1.76889 10.8768 2.80786 11.571C3.84684 12.2653 5.06834 12.6358 6.3179 12.6358C7.88279 12.6358 9.32133 12.0623 10.4294 11.1098L10.6918 11.3819V12.1498L15.5517 17L17 15.5517L12.1498 10.6918ZM6.3179 10.6918C3.89766 10.6918 1.94397 8.73814 1.94397 6.3179C1.94397 3.89766 3.89766 1.94397 6.3179 1.94397C8.73814 1.94397 10.6918 3.89766 10.6918 6.3179C10.6918 8.73814 8.73814 10.6918 6.3179 10.6918Z' />
          </motion.svg>
        </button>
      </form>
    </InputBlockComponent>
  );
}

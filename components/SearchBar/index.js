import styles from "./Search.module.css"

const SearchBar = ({...rest}) => {
  return(
   <div className={styles.search_coin}>
       <input  className={styles.coin_input} {...rest}/>
  </div>
  );
};

export default SearchBar;

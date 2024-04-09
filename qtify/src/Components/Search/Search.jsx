import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search({ placeholder, searchData }) {
  const [key, setKey] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!key.trim()) {
      setFilteredData([]);
      return;
    }

    const data = searchData.filter((album) =>
      album.title.toLowerCase().includes(key.toLowerCase()),
    );
    setFilteredData(data);

    return () => {
      setFilteredData([]);
    };
  }, [key, searchData]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input
          className={styles.search}
          placeholder={placeholder}
          value={key}
          onChange={(e) => setKey(e.target.value)}
          type="text"
          required
        />
        <button type="submit" className={styles.searchButton}>
          <SearchIcon />
        </button>
      </form>
      {filteredData.length > 0 && (
        <div className={styles.searchListContainer}>
          {filteredData.map((album) => (
            <div key={album.id} className={styles.searchListItem}>
              <div className={styles.listContent}>
                <img src={album.image} alt={album.title} />
                <div className={styles.listTitle}>
                  <p className={styles.albumTitle}>{album.title}</p>
                  <p style={{ fontSize: "12px" }}>
                    {album.description.slice(0, 30)}
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "12px" }}>{`${album.follows} Follows`}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Search;
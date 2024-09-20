import { useState } from "react";

export const UsePagination = (perPageRecords, totalPageRecords) => {
  const totalPages = Math.ceil(totalPageRecords / perPageRecords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const displayPage = (pageNumber) => {
    setCurrentPageIndex(pageNumber);
    let end_page_index = perPageRecords * pageNumber - 1;
    let start_page_index = perPageRecords * pageNumber - perPageRecords;
    setStartPageIndex(start_page_index + 1);

    if (end_page_index > totalPageRecords) {
      setEndPageIndex(totalPageRecords);
    } else {
      setEndPageIndex(end_page_index);
    }
  };

  return [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setStartPageIndex,
    displayPage,
  ];
};

"use client";

import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
    return (
        <div className={styles.Pagination}>
        <div className={styles.InnerPagination}>
            <nav className="govuk-pagination" aria-label="Pagination">
            <div className="govuk-pagination__prev">
                <a className="govuk-link govuk-pagination__link" href="#" rel="prev">
                <svg className="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                    <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
                </svg>
                <span className="govuk-pagination__link-title">
                    Previous<span className="govuk-visually-hidden"> page</span>
                </span>
                </a>
            </div>
            <ul className="govuk-pagination__list">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li
                    key={page}
                    className={`govuk-pagination__item ${currentPage === page ? `govuk-pagination__item--current ${styles.navActivate}` : ''}`}
                    >
                        <a
                            className="govuk-link govuk-pagination__link"
                            aria-label={`Page ${page}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>

            <div className={`govuk-pagination__next ${ currentPage === totalPages ? styles.disabledLink : "" }`}>
                <a
                    className={`govuk-link govuk-pagination__link ${ currentPage === totalPages ? styles.disabledLink : "" }`}
                    onClick={(e) => {
                        if (currentPage === totalPages) {
                          e.preventDefault();
                        } else {
                            onPageChange(currentPage + 1)
                        }
                      }}
                    aria-disabled={currentPage === totalPages }
                >
                    <span className="govuk-pagination__link-title">
                        Next<span className="govuk-visually-hidden"> page</span>
                    </span>
                    <svg
                        className="govuk-pagination__icon govuk-pagination__icon--next"
                        xmlns="http://www.w3.org/2000/svg"
                        height="13"
                        width="15"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 15 13"
                    >
                        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
                    </svg>
                </a>
            </div>
            </nav>
        </div>
        </div>
    );
}

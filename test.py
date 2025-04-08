"use client";

import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination() {

  return (
    <div className={styles.Pagination}>
      <div className={styles.InnerPagination}>
        <nav className="govuk-pagination" aria-label="Pagination">
          <ul className="govuk-pagination__list">
            <li className={`govuk-pagination__item govuk-pagination__item--current ${styles.navActivate}`}>
              <a
                className="govuk-link govuk-pagination__link"
                href="#"
                aria-label="Page 1"
                aria-current="page"
              >
                1
              </a>
            </li>
            <li className="govuk-pagination__item">
              <a
                className="govuk-link govuk-pagination__link"
                href="#"
                aria-label="Page 2"
              >
                2
              </a>
            </li>
            <li className="govuk-pagination__item">
              <a
                className="govuk-link govuk-pagination__link"
                href="#"
                aria-label="Page 3"
              >
                3
              </a>
            </li>
          </ul>
          <div className="govuk-pagination__next">
            <a
              className="govuk-link govuk-pagination__link"
              href="#"
              rel="next"
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

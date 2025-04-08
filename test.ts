"use client";

import { useRouter } from "next/navigation";
import {
  BackLink,
  Main,
  Analytics,
  Paragraph,
  WarningText,
  Button,
} from "@/app/components";

import styles from "./ChatHistory.module.css";
import { DateField } from "govuk-react";
import { useEffect, useRef, useState } from "react";
import { getMessages } from "@/app/utils/api";
import { DateParts, messagesResponseType } from "@/app/types";
import HistoryTable from "@/app/components/HistoryTable/HistoryTable";
import { convertDateToISO, convertDateToParts } from "@/app/utils/helpers";

export default function ChatHistroy() {

    const [chatMessages, setchatMessages] = useState<messagesResponseType[]>([]);
    const [startDate, setstartDate] = useState({ day: '', month: '', year: '' });
    const [endDate, setendDate] = useState({ day: '', month: '', year: '' });

    const hasFetched = useRef(false)

    const [errorStartText, seterrorStartText] = useState("")
    const [errorEndText, seterrorEndText] = useState("")

    const handleChange = (e: any, setDate: any) => {
        // const [[name, value]] = Object.entries(e);
        setDate((prev: any) => ({ ...prev, ...e }))
    }

    const validateDateRange = (
        start: DateParts,
        end?: DateParts
    ): { valid: boolean; message?: string } => {
        const isEmpty = (val: string | undefined) => !val?.trim()
    
        // 1️ Check start date is fully filled
        if (isEmpty(start.day) || isEmpty(start.month) || isEmpty(start.year)) {
            seterrorStartText("Start date is required and must be fully filled");
            return { valid: false, message: 'Start date is required and must be fully filled' }
        }
    
        // 2️ Validate start date format
        const isValidDate = (d: DateParts): boolean => {
        const dd = parseInt(d.day)
        const mm = parseInt(d.month)
        const yy = parseInt(d.year)
        if (
            isNaN(dd) || isNaN(mm) || isNaN(yy) ||
            dd < 1 || dd > 31 || mm < 1 || mm > 12 || yy < 1000
        ) return false
        const jsDate = new Date(yy, mm - 1, dd)
        return jsDate.getDate() === dd && jsDate.getMonth() === mm - 1 && jsDate.getFullYear() === yy
        }
    
        if (!isValidDate(start)) {
            seterrorStartText('Start date is not valid');
        return { valid: false, message: 'Start date is not valid' }
        }
    
        const startDate = new Date(`${start.year}-${start.month.padStart(2, '0')}-${start.day.padStart(2, '0')}T00:00:00Z`)
        const now = new Date()
        const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()))
    
        // 3️ If end date is not provided at all — use today
        if (!end || (isEmpty(end.day) && isEmpty(end.month) && isEmpty(end.year))) {
        if (startDate > todayUTC) {
            seterrorStartText('Start date cannot be in the future');
            return { valid: false, message: 'Start date cannot be in the future' }
        }
        seterrorStartText("");
        seterrorEndText("")
        return { valid: true }
        }
    
        // 4️ Check if end date is partially filled (e.g. only day)
        const endFieldsFilled = [end.day, end.month, end.year].filter(val => !isEmpty(val)).length
        if (endFieldsFilled !== 0 && endFieldsFilled !== 3) {
            seterrorEndText('End date is incomplete or not valid');
        return { valid: false, message: 'End date is incomplete or not valid' }
        }
    
        // 5️ Validate full end date
        if (!isValidDate(end)) {
            seterrorEndText('End date is not valid');
            return { valid: false, message: 'End date is not valid' }
        }
    
        const endDate = new Date(`${end.year}-${end.month.padStart(2, '0')}-${end.day.padStart(2, '0')}T00:00:00Z`)
    
        // 6️ Start date must not be after end date
        if (startDate > endDate) {
            seterrorStartText('Start date cannot be after end date');
            return { valid: false, message: 'Start date cannot be after end date' }
        }
    
        // 7️ Neither date can be in the future
        if (startDate > todayUTC) {
            seterrorStartText('Start date cannot be in the future');
        return { valid: false, message: 'Start date cannot be in the future' };
        }
    
        if (endDate > todayUTC) {
            seterrorEndText('End date cannot be in the future');
        return { valid: false, message: 'End date cannot be in the future' }
        }
        seterrorStartText("")
        seterrorEndText("")
        return { valid: true }
    }

    const handleSubmit = async () => {
        const current_date = convertDateToParts(new Date());
        const validDate = validateDateRange(startDate, endDate);
        if(validDate.valid) {
            const start_date = convertDateToISO(startDate.day, startDate.month, startDate.year);
            let end_date = convertDateToISO(current_date.day, current_date.month, current_date.year);
            if(endDate.day) {
                end_date = convertDateToISO(endDate.day, endDate.month, endDate.year)
            }
            const res: messagesResponseType[] = await getMessages(start_date, end_date);
            setchatMessages(res)
        }
    }

    const handleReset = () => {
        setstartDate({ day: '', month: '', year: '' });
        setendDate({ day: '', month: '', year: '' });
    }

    useEffect(() => {
        if (hasFetched.current) return
        hasFetched.current = true
        const fetchData = async () => {
        const now = convertDateToParts(new Date())
        const current_date = convertDateToISO(now.day, now.month, now.year)
        try {
            const res: messagesResponseType[] = await getMessages(current_date, current_date)
            setchatMessages(res)
        } catch (err) {
                console.error('Error fetching data:', err)
            }
        }
        fetchData()
    }, [])
  
    const router = useRouter();
    return (
        <Main className={styles.chatMainWindow}>
        <Analytics />
        <BackLink
            data-testid="ai-notice-home-link"
            aria-label="Home"
            role="link"
            tabIndex={0}
            onClick={() => router.push("/")}
        >
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Back
            </span>
        </BackLink>
        <Paragraph className={styles.chatLabel}>Chat Records</Paragraph>

        <WarningText data-testid="chat-window-warning-text">
            Do not refer to old chats for advice. Responses may be out of date.
        </WarningText>

        <Paragraph className={styles.chatFilterMessage}> The view is automatically filtered to show chat's from the previous calendar week, to change this - adjust the date filter.</Paragraph>

        <Paragraph className={styles.chatFilterLabel}>Filter</Paragraph>
        
        <div className={styles.filter}>
            <div className={styles.dateField}>
            <DateField 
                errorText={errorStartText}
                input={{
                    value: {
                        day: startDate.day,
                        month: startDate.month,
                        year: startDate.year
                    },
                    onChange: (e) => handleChange(e, setstartDate),
                }}
               >
                <span className={styles.DateTitle}>From date</span>
            </DateField>
            </div>

            <div className={styles.dateField}>
            <DateField 
                errorText={errorEndText}
                input={{
                    value: {
                        day: endDate.day,
                        month: endDate.month,
                        year: endDate.year
                    },
                    onChange: (e) => handleChange(e, setendDate),
                }}
                >
                <span className={styles.DateTitle}>To date (optional)</span>
            </DateField>
            </div>
        </div>

        <div className={styles.filterButtons}>
            <Button
            className={styles.chatSend}
            data-testid="chat-window-apply-button"
            disabled={false}
            aria-label="Send"
            hexButtonColour="#1D70B8"
            onClick={handleSubmit}
            >
            Apply
            </Button>
            <a href="#" onClick={handleReset}>Reset</a>
        </div>

        <HistoryTable tableContent={chatMessages} />
        </Main>
    );
}




"use client";

import React, { useState, useEffect, useCallback } from "react";
import { DateField, GridRow, Table } from "govuk-react";
import styles from "./HistoryTable.module.css";
import { messagesResponseType } from "@/app/types";
import Pagination from "../Pagination/Pagination";
import { dateFormatForHistoryPage, isEmptyObject, truncate } from "@/app/utils/helpers";


export default function HistoryTable({
  tableContent,
}: {
  tableContent: messagesResponseType[]
}) {
    return (
        <div className={styles.chatWindow}>
        <Table
            head={
            <Table.Row>
                <Table.CellHeader>Question asked</Table.CellHeader>
                <Table.CellHeader>Date</Table.CellHeader>
                <Table.CellHeader>Time</Table.CellHeader>
                <Table.CellHeader>Details</Table.CellHeader>
                <Table.CellHeader>Download</Table.CellHeader>
            </Table.Row>
            }
        >
            {tableContent && tableContent.map((item, index) => {
            const parsedDate = dateFormatForHistoryPage(item.created_at);
            if (!isEmptyObject(item.previous_chat_history)) {
                return null;
            }
            return (
                <Table.Row key={index}>
                <Table.Cell title={item.question}>{truncate(item.question, 45)}</Table.Cell>
                <Table.Cell>{parsedDate[0]}</Table.Cell>
                <Table.Cell>{parsedDate[1]}</Table.Cell>
                <Table.Cell>
                    <a href="#">View details</a>
                </Table.Cell>
                <Table.Cell>
                    <a href="#">Download as PDF</a>
                </Table.Cell>
                </Table.Row>
            )
            })}
        </Table>
        <Pagination />
        </div>
    );
}

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


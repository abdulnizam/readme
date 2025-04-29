"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Table } from "govuk-react";
import styles from "./HistoryTable.module.css";
import { messagesResponseType } from "@/app/types";
import Pagination from "../Pagination/Pagination";
import { dateFormatForHistoryPage, truncate } from "@/app/utils/helpers";
import { storeViewDetails } from "@/app/utils/storage/storage";
import Link from "../Packages/Link/Link";

type HistoryTableProps = Readonly<{
  tableContent: messagesResponseType[];
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  setCurrentPage: (page: number) => void;
  totalPages: number;
}>;

export default function HistoryTable({
  tableContent,
  currentPage,
  setCurrentPage,
  totalPages,
}: HistoryTableProps) {
  const handleView = (items: messagesResponseType, parsedDate: any) => {
    const data = {
      parsedDate,
      items,
    };
    storeViewDetails(data);
    router.push("/chat/view-details");
  };

  const router = useRouter();
  return (
    <div className={styles.chatWindow}>
      <Table
        head={
          <Table.Row>
            <Table.CellHeader>Question asked</Table.CellHeader>
            <Table.CellHeader>Date</Table.CellHeader>
            <Table.CellHeader>Details</Table.CellHeader>
          </Table.Row>
        }
      >
        {tableContent?.map((item) => {
          const parsedDate = dateFormatForHistoryPage(item.created_at);
          const truncatedQuestion = truncate(item.question, 70);

          return (
            <Table.Row key={truncatedQuestion}>
              <Table.Cell title={item.question}>{truncatedQuestion}</Table.Cell>
              <Table.Cell>{parsedDate[0]}</Table.Cell>
              <Table.Cell>
                <Link
                  tabIndex={0}
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                  ) => {
                    e.preventDefault();
                    handleView(item, parsedDate);
                  }}
                >
                  View details
                </Link>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}

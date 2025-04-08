const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);



const res = await getMessages(start_date, end_date, 1); // 👈 start from page 1
setchatMessages(res.messages);
setTotalPages(res.totalPages);
setCurrentPage(1); // 👈 reset to first page



useEffect(() => {
    const fetchData = async () => {
      const now = convertDateToParts(new Date())
      const current_date = convertDateToISO(now.day, now.month, now.year)
      try {
        const res = await getMessages(current_date, current_date, currentPage)
        setchatMessages(res.messages)
        setTotalPages(res.totalPages)
      } catch (err) {
        console.error('Error fetching data:', err)
      }
    }
  
    fetchData()
  }, [currentPage]) // 👈 triggers when page changes



  <HistoryTable
  tableContent={chatMessages}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  totalPages={totalPages}
/>



export default function HistoryTable({
    tableContent,
    currentPage,
    setCurrentPage,
    totalPages
  }: {
    tableContent: messagesResponseType[],
    currentPage: number,
    setCurrentPage: (page: number) => void,
    totalPages: number
  }) {



    <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
  />




  export default function Pagination({
    currentPage,
    totalPages,
    onPageChange
  }: {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }) {





    <ul className="govuk-pagination__list">
  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
    <li
      key={page}
      className={`govuk-pagination__item ${currentPage === page ? 'govuk-pagination__item--current' : ''}`}
    >
      <button
        className="govuk-link govuk-pagination__link"
        aria-label={`Page ${page}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    </li>
  ))}
</ul>

<div className="govuk-pagination__next">
  <button
    className="govuk-link govuk-pagination__link"
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    <span className="govuk-pagination__link-title">
      Next<span className="govuk-visually-hidden"> page</span>
    </span>
  </button>
</div>









skip = (page - 1) * page_size
take = page_size

message_links = await db.messageusers.find_many(
  ...
  skip=skip,
  take=take
)
total_count = await db.messageusers.count(where=...)
total_pages = math.ceil(total_count / page_size)





{totalPages > 1 && (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  )}



  {tableContent.length >= pageSize && totalPages > 1 && (
    <Pagination ... />
  )}






  total_count = await db.messageusers.count(
    where={
        'user_id': user.id,
        'message': {
            'created_at': {
                'gte': start_date,
                'lt': adjusted_end_date
            },
            'requestType': {
                'is_active': True
            },
            'messageType': {
                'is_active': True
            }
        }
    }
)








from datetime import timedelta

adjusted_end_date = end_date + timedelta(days=1)

# 🧮 Pagination values
page = 1  # or passed from your API route
page_size = 10
skip = (page - 1) * page_size

message_links = await db.messageusers.find_many(
    where={
        'user_id': user.id,
        'message': {
            'created_at': {
                'gte': start_date,
                'lt': adjusted_end_date
            },
            'requestType': {
                'is_active': True
            },
            'messageType': {
                'is_active': True
            }
        }
    },
    order={
        'message': {
            'created_at': 'desc'
        }
    },
    skip=skip,         # 👈 Skip records
    take=page_size,    # 👈 Limit records per page
    include={
        'message': {
            'include': {
                'country': True,
                'requestType': True,
                'messageType': True,
                'dataSource': True,
                'messageCitations': True,
                'feedback': {
                    'include': {
                        'messageFeedback': {
                            'include': {
                                'feedbackType': True
                            }
                        }
                    }
                }
            }
        }
    }
)
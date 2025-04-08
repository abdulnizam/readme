  useEffect(() => {
    const fetchData = async () => {
        const now = convertDateToParts(new Date());
        const current_date = convertDateToISO(now.day, now.month, now.year);
        try {
            const res: messagesResponseType[] = await getMessages(current_date, current_date);
            setchatMessages(res)
        } catch (err) {
            console.error('Error fetching data:', err)
        }
    }
    fetchData();
  }, [])

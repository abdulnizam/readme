SELECT *
FROM cron.job_run_details
ORDER BY end_time DESC
LIMIT 20;



SELECT *
FROM cron.job_run_details
WHERE return_code <> 0
ORDER BY end_time DESC;
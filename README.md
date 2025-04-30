SELECT *
FROM cron.job_run_details
ORDER BY end_time DESC
LIMIT 20;



SELECT *
FROM cron.job_run_details
WHERE return_code <> 0
ORDER BY end_time DESC;


SELECT j.jobname, d.*
FROM cron.job_run_details d
JOIN cron.job j ON j.jobid = d.jobid
ORDER BY d.end_time DESC
LIMIT 10;
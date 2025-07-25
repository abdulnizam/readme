"server {\n  listen   8080;\n  server_name  icca.acct1.nonprod.health.dwpcloud.uk/;\n
    \ error_log  /tmp/error.log debug;\n  port_in_redirect off;\n  #proxy_request_buffering
    off;\n  client_max_body_size 0;\n  proxy_read_timeout 360;\n  proxy_connect_timeout
    360;\n  proxy_send_timeout 360;\n  location / {\n      proxy_pass http://middleware.icca.svc.cluster.local:8080/;\n
    \     sendfile  on;\n      # settings for enabling/disabling cache\n      add_header
    Last-Modified $date_gmt;\n      add_header Cache-Control 'no-store, no-cache,
    must-revalidate, proxy-revalidate, max-age=0';\n      if_modified_since off;\n
    \     expires off;\n      etag off;\n      \n  }\n  location /dmb/api/ {\n      proxy_pass
    http://dip-ui-template-manager.icca.svc.cluster.local:8080/;\n      sendfile  on;\n
    \     # settings for enabling/disabling cache\n      add_header Last-Modified
    $date_gmt;\n      add_header Cache-Control 'no-store, no-cache, must-revalidate,
    proxy-revalidate, max-age=0';\n      if_modified_since off;\n      expires off;\n
    \     etag off;\n      \n  }\n  location /dmb/ {\n      proxy_pass http://templatize-dmb-ui.icca.svc.cluster.local:8080/;\n
    \     sendfile  on;\n      # settings for enabling/disabling cache\n      add_header
    Last-Modified $date_gmt;\n      add_header Cache-Control 'no-store, no-cache,
    must-revalidate, proxy-revalidate, max-age=0';\n      if_modified_since off;\n
    \     expires off;\n      etag off;\n      \n  }\n  location /cma/ {\n      proxy_pass
    http://gm4c-mfe-app-cma.icca.svc.cluster.local:7702/;\n      sendfile  on;\n      #
    settings for enabling/disabling cache\n      add_header Last-Modified $date_gmt;\n
    \     add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate,
    max-age=0';\n      if_modified_since off;\n      expires off;\n      etag off;\n
    \     \n  }\n  location /mam/ {\n      proxy_pass http://gm4c-mfe-app-mam.icca.svc.cluster.local:7703/;\n
    \     sendfile  on;\n      # settings for enabling/disabling cache\n      add_header
    Last-Modified $date_gmt;\n      add_header Cache-Control 'no-store, no-cache,
    must-revalidate, proxy-revalidate, max-age=0';\n      if_modified_since off;\n
    \     expires off;\n      etag off;\n      \n  }\n  location /cti/ {\n      proxy_pass
    http://gm4c-mfe-app-cti.icca.svc.cluster.local:7704/;\n      sendfile  on;\n      #
    settings for enabling/disabling cache\n      add_header Last-Modified $date_gmt;\n
    \     add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate,
    max-age=0';\n      if_modified_since off;\n      expires off;\n      etag off;\n
    \     \n  }\n  location /restcontainer/ {\n      proxy_pass http://dip-rest-container.icca.svc.cluster.local:8080/;\n
    \     sendfile  on;\n      # settings for enabling/disabling cache\n      add_header
    Last-Modified $date_gmt;\n      add_header Cache-Control 'no-store, no-cache,
    must-revalidate, proxy-revalidate, max-age=0';\n      if_modified_since off;\n
    \     expires off;\n      etag off;\n      \n      proxy_http_version 1.1;\n      proxy_set_header
    Upgrade $http_upgrade;\n      proxy_set_header Connection \"Upgrade\";\n      \n
    \ }    \n  \n  error_page   500 502 503 504  /50x.html;\n  location = /50x.html
    {\n    root   /usr/share/nginx/html;\n  }\n}"

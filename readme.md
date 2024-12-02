The vulnerability arises due to unvalidated data flowing from a URL parameter, specifically
location.pathname, to a browser history function, history.replaceState. This could allow an attacker to craft
a URL containing malicious payloads to manipulate application behaviour.
The following URL was used to access the application:
https://dwpask-staging.az.dwpcloud.uk
///attackercontrolledsite.com//zuul4yqw44%27%22%60'%22/zuul4yqw44/%3E%3Czuul4yqw44//%3Egmxwrb2
3mx&
The application took the supplied URL, extracted information with a regular expression and attempted to
insert the extracted data within the history of the browser.
Figure 8 - JavaScript security protections preventing addition of third-party site to history
Without JavaScript security protections, this attack would poison the history of the browser causing the
victim to be redirected to an unexpected website when pressing the back button. If the application renders
this manipulated URL, it could result in HTML injection, altering the content or structure of the page.
Furthermore, by embedding script tags or JavaScript payloads in the URL path, attackers could potentially
execute arbitrary JavaScript within the context of the application, leading to session hijacking, data theft, or
other malicious impacts.


The application took the supplied URL, extracted information with a regular expression and attempted to
insert the extracted data within the history of the browser.
Figure 8 - JavaScript security protections preventing addition of third-party site to history
Without JavaScript security protections, this attack would poison the history of the browser causing the
victim to be redirected to an unexpected website when pressing the back button. If the application renders
this manipulated URL, it could result in HTML injection, altering the content or structure of the page.
Furthermore, by embedding script tags or JavaScript payloads in the URL path, attackers could potentially
execute arbitrary JavaScript within the context of the application, leading to session hijacking, data theft, or
other malicious impacts.
Department for Work and Pensions
ITHC-729 ASK
DWP/ASK/1477 – v1.0 ISSUE
OFFICIAL-SENSITIVE
OFFICIAL-SENSITIVE
07/11/2024 – CGI IT UK Limited – Proprietary and Confidential
cgi-group.co.uk
© 2024 CGI IT UK Ltd Page 24 of 44
Affected Hosts
Host Port Vulnerable Script
https://dwpask-staging.az.dwpcloud.uk 443/tcp /_next/static/chunks/23-929bcfced0419017.js
Recommendation
Apply sanitisation to the data extracted from location.pathname to ensure only valid, expected characters
and structures are accepted. When updating the browser state with user-controlled or URL-based data, use
encoding functions to escape any potentially malicious characters.
Ensure that URL path components are securely parsed and encoded or decoded, particularly before
passing to functions like history.replaceState.
Strengthen Content Security Policy (CSP) headers to restrict script execution sources, further mitigating
XSS risks even if HTML injection occurs.
006 Missing Security Related HTTP Headers
CVSSv3.1: 4.2 (AV:A/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N)
HTTP response headers which could be used to enhance the security posture of the web application were
not used.
Details
The HTTP protocol specifies several HTTP headers that can enable client-side browser protections. These
protections include defences against cross-site scripting, SSL downgrade and type confusion attacks.
These headers do not necessarily protect the server, rather, they enable additional protections for the web
browser by instructing it to handle the HTTP session in a certain manner. This helps to improve the handling
of client data and session management.
The missing security related HTTP headers are:
• The X-Content-Type-Options HTTP header can be used to prevent web browsers from using
content sniffing to discover a file’s MIME type. This header, when set, can help protect against
cross-site scripting attacks.
It should be noted that if this header is enabled without “mode=block” then there is an increased
risk that otherwise non-exploitable cross-site scripting vulnerabilities may become exploitable.
• The Content-Security-Policy (CSP) HTTP header is a mechanism for controlling which external
sites can host sources of executable scripts used by a web application and how these resources
may behave. A CSP compatible browser will then only execute scripts received from those allow-
listed domains, ignoring all other scripts, including inline scripts and event-handling HTML
attributes.
Using this HTTP header can provide defence-in-depth from XSS, content injection and session-
riding attacks, but any implementation requires a degree of planning to minimise conflicts between
policy and actual application behaviour. Use of the Content-Security-Policy reflected-xss and frame-
ancestors directives has now replaced the X-XSS-Protection and the X-Frame-Options headers.
• The Referrer-Policy is an HTTP header that governs which referrer information, sent in the referrer
header, is included within the requests made. This header can be used to prevent cross-origin
information leakage. To omit all data within the referrer header, the policy should be set to ‘Referrer-
Department for Work and Pensions
ITHC-729 ASK
DWP/ASK/1477 – v1.0 ISSUE
OFFICIAL-SENSITIVE
OFFICIAL-SENSITIVE
07/11/2024 – CGI IT UK Limited – Proprietary and Confidential
cgi-group.co.uk
© 2024 CGI IT UK Ltd Page 25 of 44
Policy: no-referrer’. Alternatively, the policy can be set to ‘Referrer-Policy: Same-Origin’ to only
allow the referrer header to be included in same-origin requests.
Affected Hosts
Host Port Missing HTTP Headers
https://dwpask-staging.az.dwpcloud.uk 443/tcp X-Content-Type-Options
Content-Security-Policy
Referrer-Policy
Recommendation
The highlighted security related HTTP headers should be reviewed and, if deemed appropriate, included in
all responses sent by the web application. The response HTTP headers could be set at either the application
or web server level, however, care should be taken as some of the headers could limit application
functionality. Ideally, all changes made should be implemented in a test environment before being deployed
to production

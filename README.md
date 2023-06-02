### To start haproxy now and restart at login:

run : `brew services start haproxy`
<br><br>

Or, if you don't want/need a background service you can just run:
`/opt/homebrew/opt/haproxy/bin/haproxy -f /opt/homebrew/etc/haproxy.cfg`


### to run haproxy config

run : `haproxy -f ./my_proxy/proxy.conf`
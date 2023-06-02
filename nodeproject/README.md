### to enable https (SSL certificate) in local host

1. go to : https://github.com/FiloSottile/mkcert
2. install in mac , ubuntu or windows


### create certificate

1. open a folder 
2. run `mkcert -install`
3. create files: `mkcert localhost 127.0.0.1 ::1`


this will create 2 files:
1. key: localhost+2-key.pem
2. cert: localhost+2.pem
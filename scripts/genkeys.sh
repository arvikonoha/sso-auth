

echo 'Generating keys'

mkdir -p keys

openssl genrsa -out ./keys/private.key 2048

openssl rsa -in ./keys/private.key -out ./keys/public.key -pubout -outform PEM
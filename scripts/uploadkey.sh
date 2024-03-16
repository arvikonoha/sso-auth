

echo 'Uploading key to S3'

aws s3 cp ./keys/public.key s3://konohagakure/commonauth/keys/public.key
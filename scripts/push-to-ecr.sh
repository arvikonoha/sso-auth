

# Check if variables.sh exists
if [ -f ./scripts/variables.sh ]; then
    # Source the variables from the file
    source ./scripts/variables.sh
fi
echo $AWS_ACCESS_KEY
echo 'Get password for ECR'
aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/t2r2b1v1

echo 'Build docker image'
docker build -t konohagakure .

echo 'Add tag to the docker image'
docker tag konohagakure:latest public.ecr.aws/t2r2b1v1/konohagakure:latest

echo 'Push docker image to ECR'
docker push public.ecr.aws/t2r2b1v1/konohagakure:latest

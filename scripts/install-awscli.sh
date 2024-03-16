

# Install AWS CLI
echo "Installing AWS CLI..."
apk --no-cache add curl
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install

# Check AWS CLI version
echo "AWS CLI installed. Checking version..."
aws --version

echo "Installation complete."

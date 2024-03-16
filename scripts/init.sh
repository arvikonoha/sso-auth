

# Check if variables.sh exists
if [ -f ./scripts/variables.sh ]; then
    # Source the variables from the file
    source ./scripts/variables.sh
fi

# Run Install AWS cli
./scripts/install-awscli.sh

# Run genkeys.sh
./scripts/genkeys.sh

# Run uploadkey.sh
./scripts/uploadkey.sh

# Run npm install
echo "Running npm install..."
npm install
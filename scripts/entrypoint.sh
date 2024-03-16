

# Check if variables.sh exists
if [ -f ./scripts/variables.sh ]; then
    # Source the variables from the file
    source ./scripts/variables.sh
fi

# Run the Node.js application
exec "$@"
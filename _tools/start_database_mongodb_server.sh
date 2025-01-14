BASE_PATH="../databases/mongodb"

if [ -d "$BASE_PATH" ]; then
  echo "Project directory does exist..."
else
  echo "Project directory does not exist, creating it..."
  mkdir -p "$BASE_PATH"
fi

if [ -d "$BASE_PATH/data" ]; then
  echo "Project data directory does exist..."
else
    echo "Project data directory does not exist, creating it..."
    mkdir -p "$BASE_PATH/data"
    chmod 777 "$BASE_PATH/data"
fi

echo "Starting mongodb community docker container..."
cd "$BASE_PATH"
docker compose up
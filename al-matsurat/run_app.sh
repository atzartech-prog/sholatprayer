#!/usr/bin/env bash

# Colors for terminal
GREEN='\033[0;32m'
CYAN='\033[0;36m'
GOLD='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${GOLD}=============================================${NC}"
echo -e "${GREEN}      Al-Ma'tsurat - Dzikir Pagi & Sore      ${NC}"
echo -e "${GOLD}=============================================${NC}"
echo -e "Memeriksa ketersediaan web server di sistem..."

# Get current script directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "$DIR"

PORT=8080

# Check if port is in use and find another one
while lsof -i :$PORT >/dev/null 2>&1; do
    PORT=$((PORT+1))
done

# Try Python 3
if command -v python3 &>/dev/null; then
    echo -e "${CYAN}Menjalankan server menggunakan Python 3 pada port $PORT...${NC}"
    echo -e "Silakan buka browser Anda dan akses:"
    echo -e "${GREEN}http://localhost:$PORT${NC}"
    echo -e "Tekan Ctrl+C untuk menghentikan server."
    python3 -m http.server $PORT
# Try Python 2
elif command -v python &>/dev/null; then
    echo -e "${CYAN}Menjalankan server menggunakan Python pada port $PORT...${NC}"
    echo -e "Silakan buka browser Anda dan akses:"
    echo -e "${GREEN}http://localhost:$PORT${NC}"
    echo -e "Tekan Ctrl+C untuk menghentikan server."
    python -m SimpleHTTPServer $PORT
# Try Node.js http-server
elif command -v npx &>/dev/null; then
    echo -e "${CYAN}Menjalankan server menggunakan Node.js (npx http-server) pada port $PORT...${NC}"
    echo -e "Silakan buka browser Anda dan akses:"
    echo -e "${GREEN}http://localhost:$PORT${NC}"
    echo -e "Tekan Ctrl+C untuk menghentikan server."
    npx -y http-server -p $PORT
else
    echo -e "\n${GOLD}Peringatan: Tidak ditemukan server otomatis (Python/Node.js).${NC}"
    echo -e "Anda dapat membuka file ${GREEN}index.html${NC} langsung menggunakan browser file atau"
    echo -e "menjalankan server web statis favorit Anda di direktori ini:"
    echo -e "Direktori: ${CYAN}$DIR${NC}"
fi

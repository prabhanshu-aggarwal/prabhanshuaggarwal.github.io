#!/bin/bash

# Development Environment Management Script

echo "🚀 Portfolio Development Scripts"
echo "================================"

case "$1" in
  "start")
    echo "Starting development server..."
    npm start
    ;;
  "clean")
    echo "Cleaning development environment..."
    pkill -f "npm start" 2>/dev/null
    pkill -f "node" 2>/dev/null
    rm -rf node_modules/.cache
    rm -rf build
    npm cache clean --force
    echo "✅ Environment cleaned"
    ;;
  "fresh")
    echo "Fresh start - clean and restart..."
    pkill -f "npm start" 2>/dev/null
    pkill -f "node" 2>/dev/null
    rm -rf node_modules/.cache
    rm -rf build
    npm cache clean --force
    npm install
    npm start
    ;;
  "build")
    echo "Building for production..."
    npm run build
    ;;
  "serve")
    echo "Serving production build..."
    cd build && python3 -m http.server 3006
    ;;
  "test")
    echo "Testing production build..."
    npm run build
    cd build && python3 -m http.server 3006 &
    sleep 5
    curl -s http://localhost:3006 > /dev/null && echo "✅ Production build working" || echo "❌ Production build failed"
    pkill -f "python3"
    ;;
  *)
    echo "Usage: $0 {start|clean|fresh|build|serve|test}"
    echo ""
    echo "Commands:"
    echo "  start  - Start development server"
    echo "  clean  - Clean cache and stop processes"
    echo "  fresh  - Clean, reinstall, and start"
    echo "  build  - Build for production"
    echo "  serve  - Serve production build"
    echo "  test   - Test production build"
    exit 1
    ;;
esac 
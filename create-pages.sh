#!/bin/bash

# This script will help track which pages we need to create

# Count existing pages
echo "=== EXISTING PAGES ==="
echo "Competitor pages:"
ls -1 app/*-alternative/page.tsx 2>/dev/null | wc -l

echo "UK city pages:"
ls -1 app/uk/*/page.tsx 2>/dev/null | wc -l

echo "US city pages:"
ls -1 app/us/*/page.tsx 2>/dev/null | wc -l  

echo "UAE city pages:"
ls -1 app/ae/*/page.tsx 2>/dev/null | wc -l

echo "AU city pages:"
ls -1 app/au/*/page.tsx 2>/dev/null | wc -l

echo "Vertical pages:"
ls -1 app/salon-*/page.tsx app/barbershop-*/page.tsx app/*-salon-*/page.tsx 2>/dev/null | wc -l

echo ""
echo "TOTAL PAGES:"
find app -name "page.tsx" | wc -l

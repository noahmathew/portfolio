#!/usr/bin/env python3
from pypdf import PdfWriter, PdfReader
import sys

input_file = 'docs/Noah EECS 113 _ Final Project Report.pdf'
output_file = 'docs/Noah EECS 113 _ Final Project Report_compressed.pdf'

print(f"Reading PDF: {input_file}")
reader = PdfReader(input_file)
writer = PdfWriter()

print(f"Processing {len(reader.pages)} pages...")
for page in reader.pages:
    # Compress the page content
    page.compress_content_streams()
    writer.add_page(page)

# Add compression to the PDF
print(f"Writing compressed PDF: {output_file}")
with open(output_file, 'wb') as f:
    writer.write(f)

print("Compression complete!")


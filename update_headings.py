import re

with open('src/pages/Home.tsx', 'r') as f:
    lines = f.readlines()

for i in range(len(lines)):
    # Skip hero section (assuming it ends before line 800)
    if i < 800:
        continue
    
    # Check if line contains a heading class and it's not a Counter
    if 'text-[54px]' in lines[i] or 'text-[44px]' in lines[i]:
        lines[i] = re.sub(r'text-\[(54|44)px\]', 'text-[42px]', lines[i])
        print(f"Updated line {i+1}: {lines[i].strip()}")

with open('src/pages/Home.tsx', 'w') as f:
    f.writelines(lines)


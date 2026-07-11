import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

start_marker = '<div className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1467" data-name="Section">'
end_marker = '<div className="content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1265">'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!")
    exit(1)

with open('bento_replacement.tsx', 'r') as f:
    replacement = f.read()

new_content = content[:start_idx] + replacement + '\n          ' + content[end_idx:]

with open('src/pages/Home.tsx', 'w') as f:
    f.write(new_content)

print("Replaced successfully!")

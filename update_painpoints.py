import re

# 1. Read current Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# 2. Read old_bento.txt
with open('/tmp/old_bento.txt', 'r') as f:
    old_bento = f.read()

# 3. Clean old_bento
# Remove the last line if it's the start of 467:1265 (which we don't want)
old_bento_lines = old_bento.split('\n')
if 'data-node-id="467:1265"' in old_bento_lines[-1] or 'data-node-id="467:1265"' in old_bento_lines[-2]:
    # find the index
    idx = next(i for i, line in enumerate(old_bento_lines) if 'data-node-id="467:1265"' in line)
    old_bento_lines = old_bento_lines[:idx]
old_bento = '\n'.join(old_bento_lines)

# 4. Modify old_bento to match new requirements
# a) px-[75px] -> container mx-auto px-4 xl:px-0 (for 467:1029 and 467:1062)
# BUT wait, the original had "items-center justify-center" which was changed to "items-start" by user?
# User's current: <div className="content-stretch flex flex-col items-start overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1029" data-name="Container">
# Old: <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1029" data-name="Container">
old_bento = old_bento.replace(
    'className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1029"',
    'className="content-stretch flex flex-col items-start overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1029"'
)
old_bento = old_bento.replace(
    'className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1062"',
    'className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1062"'
)

# Fix heading alignment for 467:1030 (the header area)
# The user changed it to:
#               {/* Header area - Left aligned now */}
#               <div className="bg-clip-padding content-stretch flex flex-col items-start px-[50px] pt-[60px] pb-[40px] relative size-full">
# Old was:
#               <div className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-center py-[40px] relative size-full">
old_bento = old_bento.replace(
    'className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-center py-[40px] relative size-full"',
    'className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-start px-[50px] pt-[60px] pb-[40px] relative size-full"'
)

# Text replacements
old_bento = old_bento.replace(
    'text-[54px] text-center',
    'text-[42px]' # left aligned now, 42px
)
old_bento = old_bento.replace(
    'Sound familiar?',
    'Every growing business <br /> hits this stage'
)
old_bento = old_bento.replace('Messages slip the cracks.', 'Customers don\'t wait.')
old_bento = old_bento.replace('Three inboxes. Three teams. One missed customer.', 'Your team shouldn\'t have to search across apps to find them.')
old_bento = old_bento.replace('Carts go cold.', 'Intent doesn\'t last forever.')
old_bento = old_bento.replace('No nudge, no follow-up. Revenue walks away.', 'Every delayed follow-up is a sale someone else wins.')
old_bento = old_bento.replace('Bots break real chats.', 'Conversations aren\'t scripts.')
old_bento = old_bento.replace('Off-script questions kill the sale.', 'Your AI should know when to answer—and when to bring in your team.')

# 5. Find start and end in content
start_marker = 'data-node-id="467:1029"'
end_marker = 'data-node-id="467:1220"'

start_idx = content.find('<div className="content-stretch flex flex-col items-start overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1029" data-name="Container">')
end_idx = content.find('<div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1220" data-name="Container">')

if start_idx == -1 or end_idx == -1:
    print("Could not find start or end index!")
    print(f"start_idx: {start_idx}, end_idx: {end_idx}")
else:
    new_content = content[:start_idx] + old_bento + '\n          ' + content[end_idx:]
    with open('src/pages/Home.tsx', 'w') as f:
        f.write(new_content)
    print("Successfully replaced!")


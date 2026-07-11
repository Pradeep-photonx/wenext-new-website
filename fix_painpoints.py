import re

# 1. Read current Home.tsx
with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# 2. Extract lines 844-1045 from /tmp/Home_old.tsx
with open('/tmp/Home_old.tsx', 'r') as f:
    old_lines = f.readlines()
    
# Python is 0-indexed, so 844 is index 843. 1045 is index 1044 (so up to 1045 in slice)
old_bento = "".join(old_lines[843:1045])

# 4. Modify old_bento to match new requirements
# a) px-[75px] -> container mx-auto px-4 xl:px-0 (for 467:1029 and 467:1062)
old_bento = old_bento.replace(
    'className="content-stretch flex flex-col items-center justify-center overflow-clip px-[75px] relative shrink-0 w-full" data-node-id="467:1029"',
    'className="content-stretch flex flex-col items-start overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1029"'
)
old_bento = old_bento.replace(
    'className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start px-[75px] relative shrink-0 w-full" data-node-id="467:1062"',
    'className="border-[#e0dac6] border-b border-solid content-stretch flex flex-col items-start container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1062"'
)

# Fix heading alignment for 467:1030 (the header area)
old_bento = old_bento.replace(
    'className="bg-clip-padding border-[transparent] border-b border-l border-r border-solid content-stretch flex flex-col gap-[15px] items-center py-[40px] relative size-full"',
    'className="bg-clip-padding content-stretch flex flex-col items-start px-[50px] pt-[60px] pb-[40px] relative size-full"'
)
# Fix the small dot and "Pain Points" container to have mb-4 instead of gap-[15px] because we changed the wrapper
old_bento = old_bento.replace(
    'className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-node-id="467:1031"',
    'className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 mb-4" data-node-id="467:1031"'
)

# Text replacements
old_bento = old_bento.replace(
    'text-[54px] text-center',
    'text-[42px]'
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
# The broken section starts around where `<TrustedByStrip />` ends.
# Let's find `<TrustedByStrip />` and the next section `data-node-id="467:1220"`
trusted_strip_idx = content.find('<TrustedByStrip />')
if trusted_strip_idx == -1:
    print("Could not find TrustedByStrip!")
    exit(1)
    
start_replace_idx = content.find('\n', trusted_strip_idx) + 1

end_replace_idx = content.find('<div className="content-stretch flex flex-col items-center justify-center overflow-clip container mx-auto px-4 xl:px-0 relative shrink-0 w-full" data-node-id="467:1220"')

if end_replace_idx == -1:
    print("Could not find end index!")
    exit(1)

new_content = content[:start_replace_idx] + old_bento + content[end_replace_idx:]

with open('src/pages/Home.tsx', 'w') as f:
    f.write(new_content)
    
print("Successfully replaced with proper boundaries!")


import re

home_path = "/Users/nerellaajay/Desktop/wenex-website/src/pages/Home.tsx"
hero_path = "/Users/nerellaajay/Desktop/wenex-website/src/components/HeroV1.tsx"

with open(home_path, "r") as f:
    content = f.read()

# Find the start and end of the hero section
hero_start_str = "<div className=\"content-stretch flex flex-col items-start relative shrink-0 w-full\" data-node-id=\"467:971\">"
hero_end_str = "<TrustedByStrip />"

start_idx = content.find(hero_start_str)
end_idx = content.find(hero_end_str)

if start_idx == -1 or end_idx == -1:
    print("Could not find hero section boundaries")
    exit(1)

# Extract hero JSX
hero_jsx = content[start_idx:end_idx].strip()

# Make HeroV1.tsx content
hero_v1_content = content.replace("export default function Home", "export default function HeroV1")

# We want HeroV1 to just return the hero_jsx
return_pattern = re.compile(r"return \(\s*<div className=\"bg-\[\#f8f5ec\] relative size-full\".*", re.DOTALL)
hero_v1_content = return_pattern.sub("return (\\n    <>\n" + hero_jsx + "\n    </>\n  );\n}", hero_v1_content)

with open(hero_path, "w") as f:
    f.write(hero_v1_content)

# Now modify Home.tsx
# Replace the hero_jsx with <HeroV1 />
new_home_content = content[:start_idx] + "<HeroV1 />\n          " + content[end_idx:]

# Add import HeroV1
import_hero = "import HeroV1 from '../components/HeroV1';\n"
if "import HeroV3 from '../components/HeroV3';" in new_home_content:
    new_home_content = new_home_content.replace("import HeroV3 from '../components/HeroV3';", "import HeroV3 from '../components/HeroV3';\n" + import_hero)
else:
    new_home_content = import_hero + new_home_content

with open(home_path, "w") as f:
    f.write(new_home_content)

print("Successfully created HeroV1.tsx and updated Home.tsx")

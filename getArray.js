with open("leetCodeEasy.txt") as f:
    lines = [line.strip() for line in f if line.strip()]

with open("easy-problems.js", "w") as out:
    out.write("const easyProblems = [\n")
    for link in lines:
        out.write(f'  "{link}",\n')
    out.write("];\n")

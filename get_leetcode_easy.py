
import json
import urllib.request

def fetch_easy(offset):
    query = {
        "query": """
        query problemsetQuestionList($categorySlug: String, $skip: Int, $limit: Int, $filters: QuestionListFilterInput) {
          problemsetQuestionList: questionList(
            categorySlug: $categorySlug,
            skip: $skip,
            limit: $limit,
            filters: $filters
          ) {
            totalNum
            questions: data {
              titleSlug
              title
              difficulty
            }
          }
        }
        """,
        "variables": {
            "categorySlug": "",
            "skip": offset,
            "limit": 50,
            "filters": {"difficulty": "EASY"}
        }
    }

    req = urllib.request.Request(
        "https://leetcode.com/graphql",
        data=json.dumps(query).encode(),
        headers={
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
        },
        method="POST"
    )

    with urllib.request.urlopen(req) as response:
        return json.loads(response.read())["data"]["problemsetQuestionList"]["questions"]

# collect all
offset = 0
all_urls = []

while True:
    chunk = fetch_easy(offset)
    if not chunk:
        break
    for q in chunk:
        all_urls.append(f"https://leetcode.com/problems/{q['titleSlug']}/")
    offset += 50

# print or save
for url in all_urls:
    print(url)

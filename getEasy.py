import requests

all_easy = []
skip = 0

while True:
    payload = {
        "query": """
        query problemsetQuestionList($categorySlug: String, $skip: Int, $limit: Int, $filters: QuestionListFilterInput) {
          problemsetQuestionList: questionList(
            categorySlug: $categorySlug,
            skip: $skip,
            limit: $limit,
            filters: $filters
          ) {
            questions {
              titleSlug
              title
              difficulty
            }
            total
          }
        }""",
        "variables": {
            "categorySlug": "",
            "skip": skip,
            "limit": 50,
            "filters": {
                "difficulty": "EASY"
            }
        }
    }

    res = requests.post("https://leetcode.com/graphql", json=payload)
    data = res.json()["data"]["problemsetQuestionList"]

    if not data["questions"]:
        break

    all_easy.extend(data["questions"])
    skip += 50

print(f"found {len(all_easy)} easy problems")
for q in all_easy:
    print(f"https://leetcode.com/problems/{q['titleSlug']}/")

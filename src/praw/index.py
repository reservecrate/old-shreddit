import praw
import json
import datetime
from dotenv import dotenv_values 

print('\nStarting new session...')

config = dotenv_values('.env')

reddit = praw.Reddit(client_id=config['CLIENT_ID'],
                     client_secret=config['CLIENT_SECRET'], password=config['PASSWORD'],
                     user_agent=config['USER_AGENT'], username=config['USERNAME'])

subreddit = reddit.subreddit('apexlegends')
postsList = []
utcnow_aware = datetime.datetime.now(tz=datetime.timezone.utc)

for submission in subreddit.hot(limit=10):
    created_utc = datetime.datetime.fromtimestamp(
        submission.created_utc, tz=datetime.timezone.utc
    )
    postDict = {}
    postDict['type'] = submission.post_hint
    postDict['title'] = submission.title
    postDict['author'] = submission.author.name
    postDict['age'] = str(utcnow_aware - created_utc) 
    if postDict['type'] == 'self':
        postDict['textContent'] = submission.selftext
    elif postDict['type'] == 'link':
        postDict['linkUrl'] = submission.url 
    elif postDict['type'] == 'image':
        postDict['imageUrl'] = submission.url
    else:
        postDict['videoUrl'] = submission.url
    postsList.append(postDict)

with open('PrawData.js', 'w', encoding='utf-8') as f:
    f.write('export const Posts = ')
    json.dump(postsList, f, ensure_ascii=False, indent=4)


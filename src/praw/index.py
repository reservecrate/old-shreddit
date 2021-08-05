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

def create_data_file():
    for submission in subreddit.hot(limit=50):
        created_utc = datetime.datetime.fromtimestamp(
            submission.created_utc, tz=datetime.timezone.utc
        )
        postDict = {}
        postDict['url'] = submission.shortlink
        postDict['domain'] = submission.domain
        postDict['title'] = submission.title
        postDict['author'] = submission.author.name
        postDict['age'] = str(utcnow_aware - created_utc) 
        if postDict['domain'] == 'self.apexlegends':
            postDict['textContent'] = submission.selftext
        elif postDict['domain'] == 'i.redd.it':
            postDict['imageUrl'] = submission.url
        postsList.append(postDict)
    with open('src/praw/PrawData.js', 'w', encoding='utf-8') as f:
        f.write('export const postsArr = ')
        json.dump(postsList, f, ensure_ascii=False, indent=4)
        f.write(';\n\n')
        f.write(f"export const subreddit = '{subreddit}'")
        f.write(';\n\n') 

create_data_file()

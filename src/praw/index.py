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

def get_submissions():
    for submission in subreddit.hot(limit=50):
        print(submission.url)
        created_utc = datetime.datetime.fromtimestamp(
            submission.created_utc, tz=datetime.timezone.utc
        )
        postDict = {}
        postDict['domain'] = submission.domain
        postDict['title'] = submission.title
        postDict['author'] = submission.author.name
        postDict['age'] = str(utcnow_aware - created_utc) 
        if postDict['domain'] == 'self.apexlegends':
            postDict['textContent'] = submission.selftext
            postsList.append(postDict)
        elif postDict['domain'] == 'i.redd.it':
            postDict['imageUrl'] = submission.url
            postsList.append(postDict)
        # elif postDict['type'] == 'link':
            # postDict['linkUrl'] = submission.url
        """ else:
            return """
            # postDict['videoUrl'] = submission.url

get_submissions()

with open('src/praw/PrawData.js', 'w', encoding='utf-8') as f:
    f.write('export const Posts = ')
    json.dump(postsList, f, ensure_ascii=False, indent=4)
    f.write(';\n\n')
    f.write(f"export const Subreddit = '{subreddit}'")
    f.write(';\n\n')


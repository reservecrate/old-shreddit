export interface IPost {
    url: string;
    domain: string;
    title: string;
    author: string;
    age: string;
    textContent?: string;
    imageUrl?: string;
}

export const postsArr: IPost[];
export const subreddit: string;
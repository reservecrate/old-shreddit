export interface IPost {
    url: string;
    domain: string;
    title: string;
    author: string;
    age: string;
    textContent?: string;
    imageUrl?: string;
    handleClick: (url: string) => void;
}

export const Posts: IPost[];
export const Subreddit: string;
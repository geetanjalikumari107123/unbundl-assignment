import { useEffect, useState } from "react";

type FaqPost = {
  id: number;
  title: string;
  body: string;
};

type FaqPostState = {
  posts: FaqPost[];
  isLoading: boolean;
  error: string | null;
};

const FAQ_POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=3";
const REQUEST_TIMEOUT_MS = 8000;

const toFaqQuestion = (title: string) =>
  title
    .split(" ")
    .slice(0, 6)
    .join(" ")
    .replace(/^\w/, (letter) => letter.toUpperCase());

export function useFaqPosts() {
  const [state, setState] = useState<FaqPostState>({
    posts: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    let isActive = true;
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    async function fetchPosts() {
      try {
        setState((currentState) => ({
          ...currentState,
          isLoading: true,
          error: null,
        }));

        const response = await fetch(FAQ_POSTS_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to load FAQ content.");
        }

        const posts = (await response.json()) as FaqPost[];

        if (!isActive) {
          return;
        }

        setState({
          posts: posts.map((post) => ({
            ...post,
            title: `${toFaqQuestion(post.title)}?`,
          })),
          isLoading: false,
          error: null,
        });
      } catch (error) {
        if (!isActive) {
          return;
        }

        if (error instanceof DOMException && error.name === "AbortError") {
          setState({
            posts: [],
            isLoading: false,
            error: "We could not load the latest questions right now.",
          });
          return;
        }

        setState({
          posts: [],
          isLoading: false,
          error: "We could not load the latest questions right now.",
        });
      }
    }

    fetchPosts();

    return () => {
      isActive = false;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return state;
}

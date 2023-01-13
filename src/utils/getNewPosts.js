import { api } from '../services/index';

export async function getNewPosts(dependencies, functions) {
  const {
    setUserAuth,
    userAuth,
    postsData,
    setNewPosts
  } = dependencies;
  const { navigate, usersFollowed } = functions;

  try {
    await usersFollowed();

    const res = await api.get("/timeline", {
      headers: { Authorization: `Bearer ${userAuth.token}` },
    });

    if ((res.data).length > postsData.length)
      setNewPosts((res.data).slice(0, (res.data).length - postsData.length))
  } catch (e) {
    setUserAuth(undefined);

    return navigate("/");
  };
};

export function loadNewPosts(dependencies) {
  const {
    setNewPosts,
    newPosts,
    setPostsData,
    postsData
  } = dependencies;

  setPostsData([...newPosts, ...postsData]);
  setNewPosts([]);
};
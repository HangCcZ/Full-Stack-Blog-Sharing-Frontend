import axios from "axios";
const baseUrl = "/api/blogs";
const userUrl = "/api/users";

let token = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// send request to api/user/id
// get all blogs corresponding to current user
const getAllFromUser = async (userId) => {
  const response = await axios.get(`${userUrl}/${userId}`);

  return response.data.blogs;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token, "Content-Type": "multipart/form-data" },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const deleteBlog = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${newObject.id}`, config);
  return response;
};

const updateLikes = async (blogObject, userObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    `${baseUrl}/${blogObject.id}/like`,
    { userID: userObject.id },
    config
  );
  return response.data;
};

const updateUnlikes = async (blogObject, userObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(
    `${baseUrl}/${blogObject.id}/unlike`,
    { userID: userObject.id },
    config
  );
  return response.data;
};

const updateComments = async (comment, blogObject) => {
  const response = await axios.post(`${baseUrl}/${blogObject.id}/comments`, {
    comment,
  });
  return response.data;
};

export default {
  getAll,
  getAllFromUser,
  setToken,
  create,
  updateLikes,
  deleteBlog,
  updateComments,
  updateUnlikes,
};


import axios from "axios"

const githubAPI = axios.create(
  {
    baseURL: 'https://api.github.com/users/fersoria001/repos?'
  }
)

export const getRepos = async () => {
  const response = await githubAPI.get("/repos?");
  return response.data;
};
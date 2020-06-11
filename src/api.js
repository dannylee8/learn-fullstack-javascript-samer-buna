import axios from "axios";

export const fetchContest = (contestID) => {
  return axios.get(`/api/contests/${contestID}`).then((resp) => resp.data);
};

export const fetchContestList = () => {
  return axios.get(`/api/contests`).then((resp) => resp.data.contests);
};

import axios from "axios";

export const fetchContest = (contestID) => {
  return axios.get(`/api/contests/${contestID}`).then((resp) => resp.data);
};

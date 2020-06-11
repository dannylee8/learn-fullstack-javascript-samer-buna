import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./src/components/App";

import config from "./config";
import axios from "axios";

const getApiUrl = (contestID) => {
  if (contestID) {
    return `${config.serverURL}/api/contests/${contestID}`;
  }
  return `${config.serverURL}/api/contests`;
};

const getInitialData = (contestID, apiData) => {
  if (contestID) {
    return {
      currentContestID: apiData.id,
      contests: {
        [apiData.id]: apiData,
      },
    };
  }
  return {
    contests: apiData.contests,
  };
};

const serverRender = (contestID) =>
  axios.get(getApiUrl(contestID)).then((resp) => {
    const initialData = getInitialData(contestID, resp.data);
    return {
      initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData} />
      ),
      initialData,
    };
  });

export default serverRender;

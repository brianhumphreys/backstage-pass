import React from "react";

const GitHubProfile = ({gitHubData}) => {
  // useEffect(() => {
  //   axios
  //    .get(`https://api.github.com/users/jab115`)
  //    .then(({ data }) => {
  //      console.log('we did it')
  //      updateGitHubData(data)
  //      console.log(data)
  //    }).catch((e) => {
  //      updateGitHubData({})
  //    });
  //   // let data = fetchGitHubData(gitHubUserName)
  //   // console.log(data, '(((((((((((())))))))))))')
  //   // updateGitHubData(data)
  // }, []);
  return (
    <div>
      <p>
        Ice-cream trucks only play music when out of ice-cream. Well
        played dad. On{" "}
      <a className="tweet-link" href="#17">
        @Quora
      </a>
      </p>
      <p>
      <a className="time-ago scnd-font-color" href="#18">
        3 minutes ago
      </a>
      </p>
    </div>
  );
}
export default GitHubProfile;

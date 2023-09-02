const fullPath = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cn3yXvjKF97PRvRVQIE4/scores/';

const postScore = async (user, score) => {
  try {
    const response = await fetch(fullPath, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.status) {
      throw new Error('Failed to create a post.');
    }
  } catch (error) {
    return error.message;
  }
  return [];
};

// Add score
export const addScore = () => {
  const form = document.querySelector('#form');
  const user = document.querySelector('#name-player').value;
  const score = document.querySelector('#score-player').value;
  postScore(user, score);
  form.reset();
};

const getLeaderboard = async () => {
  try {
    const response = await fetch(fullPath);
    if (!response.status) {
      throw new Error('Failed to create a post.');
    }
    const leaderboardResponse = await response.json();

    return leaderboardResponse.result;
  } catch (error) {
    return error.message;
  }
};

export const populate = async () => {
  const list = document.querySelector('#list');
  list.innerHTML = '';
  const result = await getLeaderboard();
  result.forEach((obj) => {
    const li = document.createElement('li');
    li.textContent = `${obj.user}: ${obj.score}`;
    list.appendChild(li);
  });
};

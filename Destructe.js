
let userData = {
    username: 'smith',
    id: 12345,
    password: 'fiddlesticks',
    ratings: [{Star: 1}, {Star: 2}],
    firstName: 'Angela',
    lastName: 'Smith',
    age: 'guess',
    isLegit: undefined
  };
  
  let x = 'username'
  const username = userData[x];
  let firstName = userData.firstName;
  let lastName = userData.lastName;
  let id = userData.id;

  console.log(username)
  const {ratings: [Star]} = userData
  console.log(ratings)

  const options = {
    // refreshTime: 200
  }
  const { refreshTime = 750, waitTime = 1000 } = options;
  console.log(refreshTime); // 200 - initialized in options
  console.log(waitTime); // 1000 - fallback to default


  const myFavoriteThings = ['teaching', 'music', 'hiking', 'dank memes'];

  const [first, second, ...others] = myFavoriteThings;
  console.log(first)
  console.log(others);


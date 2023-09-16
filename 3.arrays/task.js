  function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.every((value, index) => value === arr2[index]);
  }

  const array1 = [0, 6, -1];
  const array2 = [0, 6, -1];
  console.log(compareArrays(array1, array2));

  const array3 = [6, 2, 3];
  const array4 = [5, 2, 1];
  console.log(compareArrays(array3, array4));

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender);

  if (filteredUsers.length === 0) {
    return 0;
  }

  const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / filteredUsers.length;

  return averageAge;
}

const users = [
  { name: 'Maria', age: 45, gender: 'female' },
  { name: 'Mark', age: 53, gender: 'male' },
  { name: 'Nick', age: 21, gender: 'male' },
  { name: 'Polina', age: 54, gender: 'female' },
  { name: 'Filipp', age: 34, gender: 'male' }
];

console.log(getUsersNamesInAgeRange(users, 'female'));
console.log(getUsersNamesInAgeRange(users, 'male'));

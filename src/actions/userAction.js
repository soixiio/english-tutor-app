import { activeLessons, completedLessons } from "src/stores/lessonsStore.js";
const JOURNAL_PATH = "./data/journal.json";
const USER_PATH = "./data/users/";
const COMPLETED_LESSON_PATH = "https://gila.cf/mvp/user/";

async function getUser(login){
  const URL = USER_PATH + login + ".json";
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error(res.status);
  }
  const userData = await res.json();
  return userData;
};

async function getAllUsers(){
  try {
    const res = await fetch(JOURNAL_PATH);
    const data = await res.json();
    const users = data.users;
    return users;
  } catch (error){
    console.log(error);
  }
};

async function getUserLessons(login){
  try {
    const userData = await getUser(login);
    const { passedTests } = await getCompletedTests(login);

    activeLessons.set({
      login: login,
      lesson: userData.lesson || [],
      hometask: userData.hometask || []
    });

    completedLessons.set({
      login: login,
      lesson: passedTests.filter(test => test.lesson === "lesson") || [],
      hometask: passedTests.filter(test => test.lesson === "hometask") || []
    });
  } catch(error) {
    console.log(error);
  }
};

async function setUserActiveLessons(login){
  try {
    const userData = await getUser(login); 

    activeLessons.set({
      user: login,
      lesson: userData.lesson || [],
      hometask: userData.hometask || []
    });
  } catch(error) {
    activeLessons.set({
      user: " ",
      lesson: [],
      hometask: []
    });
    console.log(error);
  }
};

async function getCompletedTests(login){
  const URL = COMPLETED_LESSON_PATH + login;
  try {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch(error) {
    console.log(error);
  }
};

export {
  getUser,
  getAllUsers,
  getUserLessons,
  // setUserActiveLessons,
  //setUserCompletedLessons
};
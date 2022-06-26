const BASE_URL = "https://first-server-uqgwz.run-us-west2.goorm.io";

const getAllAnime = async (setState) => {
  try{
    const response = await fetch(`${BASE_URL}/anime`);
    const results = await response.json();
    setState(results.data);
  } catch(error) {
    console.log(error);
  }
};

const getDetailAnime = async (setState, titleAnime) => {
  try{
    const response = await fetch(`${BASE_URL}/anime/${titleAnime}`);
    const results = await response.json();
    setState([results.data]);
  } catch(error) {  
    console.log(error);
  }
}

export default BASE_URL;

export {
  getAllAnime,
  getDetailAnime,
};
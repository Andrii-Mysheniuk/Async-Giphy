import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data.data[0].images.original)

    const gifUrl = data.data[0].images.original.url;
    console.log("GIF URL:", gifUrl);
    return gifUrl;
  } catch (error) {
    console.error("Error fetching GIF:", error);
    return null;
  }
}

getImage("cats");

import axios from "axios"

// const url = `https://api.stackexchange.com/2.3/tags?page=1&pagesize=100&order=desc&sort=popular&site=stackoverflow`

export const fetchImagesFromAPI = async (pagesize, page = 1) => {
    try{

    
    const response = await axios.get('https://api.stackexchange.com/2.3/tags?', {
      params: {
        site: 'stackoverflow',
        sort: 'popular',
        order: 'desc',
        pagesize: pagesize,
        page: page,
        
      },
    });
    console.log(response.data.items)
    return response.data.items;

    }catch (error){
        console.error('Error fetching images:', error);
        throw error;
    }
  };
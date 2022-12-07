const fetchAgain = async (url, n) =>{
        try {
            return await axios.get(url);
          } catch (err) {
            if (n === 1) {
              throw err;
            }
            return await fetchAgain(url, n - 1);
          }
}


fetchAgain('https://northwind.vercel.app/api/suppliers', 4);

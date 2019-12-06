import store from "../store.js";
// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  constructor() {
    this.getQuoteAsync()
  }
  async getQuoteAsync() {
    let res = await _quoteApi.get()
    store.commit("quote", res.data.quote)
  }
}

const quoteService = new QuoteService();
export default quoteService;

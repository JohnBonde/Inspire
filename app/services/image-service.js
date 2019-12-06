import store from "../store.js";

// @ts-ignore
const _imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor() {
    this.getImageAsync()
  }
  async getImageAsync() {
    let res = await _imgApi.get()
    store.commit("image", res.data)
  }
}

const imageService = new ImageService();
export default imageService;

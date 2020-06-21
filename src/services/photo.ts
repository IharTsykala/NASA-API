const axios = require("axios")

export default class ServicePhoto {
  static getPhotoById = async (idDialog: string) => {
    try {
      const request = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=VhPpn50ZBCAiZCbJPSV9uHl1q3XXZuAq8PVDmwMH"
      )
      return request.data
    } catch (e) {
      console.log(e)
    }
  }
}

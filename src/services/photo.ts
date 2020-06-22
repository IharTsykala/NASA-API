const axios = require("axios")

export default class ServicePhoto {
  static getPhotoById = async (currentDate: string) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=VhPpn50ZBCAiZCbJPSV9uHl1q3XXZuAq8PVDmwMH&date=${currentDate}`
      )
      // console.log(response)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}

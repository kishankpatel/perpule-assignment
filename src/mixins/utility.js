const moment = require('moment');

export default {
  methods: {
    getImgUrl(imgName) {
      var images = require.context('../assets/images', false)
      return images('./' + imgName)
    },
    formatDate (date) {
      return moment(date).format("MM/DD/YYYY")
    }
  }
}

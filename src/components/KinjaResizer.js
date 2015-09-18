let KinjaResizer = {
  componentDidMount() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  },

  resize() {
    let height = this.getHeight() + 20
    console.log(height)
    window.top.postMessage(
      JSON.stringify({
        kinja: {
          sourceUrl: window.location.href,
          resizeFrame: {
            height
          }
        }
      }), '*'
    )
  },

  getHeight() {
    let minHeight = 450
    let body = document.body
    let html = document.documentElement

    return Math.max(html.scrollHeight, html.offsetHeight, minHeight)
  }

}

export default KinjaResizer

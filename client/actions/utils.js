export default {
    showTitle() {
        const homeStore = this.getStore('home')
        alert(homeStore.title)
    }
}
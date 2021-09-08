const searchInput = document.querySelector('.searchInput')
const searchBtn = document.querySelector('.searchBtn')

document.addEventListener('keypress', (event) => {
  if(event.key === 'Enter') {
    request()
  }
})

searchBtn.addEventListener('click', () => {
  request()
})

const request = async () => {
  try {
    const username = searchInput.value
    const response = await axios.get(`https://api.github.com/users/${username}`)
    showSearch(response)
  } catch (e) {
    console.log(e)
  }
}

const showSearch = (data) => {
  console.log(data)
}
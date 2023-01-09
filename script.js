const wrapper = document.querySelector('.wrapper')
qrInput = wrapper.querySelector('.form input')
generateBtn = wrapper.querySelector('.form button')
qrImg = wrapper.querySelector('.qr-code img')

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value
  // if the input is empty return from here
  if (!qrValue) return
  //   getting a qr code of user entered value using the qr server
  // api and passing the api returned img src of qrImg
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
  wrapper.classList.add('active')
})

// recordatorios
// alert('agregar blazi, otro cdn de optimizacion y estilos para el color background del lado alguna linea debajo')
// Prototipe buttons


var bLazy = new Blazy ({
  selector: 'img'
})



class btnChanger{


  constructor(btn , imgDesktop, imgCellPhone){
    this.btn = btn
    this.imgDesktop = imgDesktop // state = true
    this.imgCellPhone = imgCellPhone || undefined //state = flase
    this.state = true
    try{
      this.imgCellPhone.style.display = 'none'
      this.btn.addEventListener('mouseup', () => this.onClcik())
    }catch(err) {
      this.btn.style.display = 'none'
    }
  }
  onClcik(){

    this.state = !this.state
    if (this.state) {
      this.imgDesktop.style.display = 'initial'
      this.imgCellPhone.style.display = 'none'      
      this.btn.style.background = 'radial-gradient(circle, red, #000)'
    } else {
      this.imgDesktop.style.display = 'none'
      this.imgCellPhone.style.display = 'initial'
      this.btn.style.background = '#ff0000'
    }
  }
}

class btnSlideDescription{
  constructor(btn, slide){
    this.btn = btn
    this.slide = slide
    this.state = false 
    this.btn.addEventListener('mouseup', () => this.onClcik())
  }
  onClcik(){
    this.state = !this.state
    if (this.state) {
      this.slide.style.width = '50vw'
      this.slide.style.fontSize = '16px'
    } else {
      this.slide.style.width =  '0'
      this.slide.style.fontSize = '0' 
      this.btn.style.background = 'radial-gradient(circle, #0078FF, #000)'
    }



  }
}
//arreglar este codigo
class ModalImg{
  constructor(btn,box,overlay){
    this.btn = btn
    this.box = box
    this.overlay = overlay
    this.state = false
    this.btn.addEventListener('click', () => this.onClcik())
    this.overlay.addEventListener('click', () => this.closeModal())
    window.addEventListener('keyup', (ev) => {
      if (ev.keyCode == 27 ) this.closeModal()
    })
  }
  onClcik(){
    this.overlay.classList.add('active')
    this.box.classList.add('active')
  }
  closeModal(){

    this.overlay.classList.remove('active')
    this.box.classList.remove('active')
  }
  
}
if ( window.matchMedia('(min-width: 850px)').matches ) {
  
    //global
  const $darkOverlay = document.getElementById('dark-overlay')

  //heph
  const $btnHeph = document.getElementById('change-btn-heph')
  const $pcImaHeph = document.getElementById('pc-image-heph')
  const $phoneImaHeph = document.getElementById('phone-image-heph')

  const $btnSlideHeph = document.getElementById('btn-slide-heph')
  const $descriptionSlideHeph = document.getElementById('description-slide-heph')

  const $imagesHeph = document.getElementById('images-heph')
  const $boxHeph = document.getElementById('box-heph')

  const hephChanger = new btnChanger( $btnHeph, $pcImaHeph, $phoneImaHeph )
  const hephSlide = new btnSlideDescription ( $btnSlideHeph, $descriptionSlideHeph)
  const hephModal = new ModalImg( $imagesHeph, $boxHeph, $darkOverlay )

  //showPhotos


  const $btnShowPhotos = document.getElementById('change-btn-show-photos')
  const $pcImaShowPhotos = document.getElementById('pc-image-show-photos')
  const $phoneImaShowPhotos = document.getElementById('phone-image-show-photos')

  const $btnSlideShowPhotos = document.getElementById('btn-slide-show-photos')
  const $descriptionSlideShowPhotos = document.getElementById('description-slide-show-photos')

  const $imagesShowPhotos = document.getElementById('images-show-photos')
  const $boxShowPhotos = document.getElementById('box-show-photos')

  const showPhotosChanger = new btnChanger( $btnShowPhotos, $pcImaShowPhotos, $phoneImaShowPhotos )
  const showPhotosSlide = new btnSlideDescription ( $btnSlideShowPhotos, $descriptionSlideShowPhotos)
  const showPhotosModal = new ModalImg( $imagesShowPhotos, $boxShowPhotos, $darkOverlay )

  //crossroad

  const $btnCrossroad = document.getElementById('change-btn-crossroad')
  const $pcImaCrossroad = document.getElementById('pc-image-crossroad')
  const $phoneImaCrossroad = document.getElementById('phone-image-crossroad')

  const $btnSlideCrossroad = document.getElementById('btn-slide-crossroad')
  const $descriptionSlideCrossroad = document.getElementById('description-slide-crossroad')

  const $imagesCrossroad = document.getElementById('images-crossroad'); $imagesCrossroad.style.background = '#778899'
  const $boxCrossroad = document.getElementById('box-crossroad')

  const CrossroadChanger = new btnChanger( $btnCrossroad, $pcImaCrossroad, $phoneImaCrossroad )
  const CrossroadSlide = new btnSlideDescription ( $btnSlideCrossroad, $descriptionSlideCrossroad)
  const CrossroadModal = new ModalImg( $imagesCrossroad, $boxCrossroad, $darkOverlay )


}





// class InteractiveBtn{
//   constructor( btn , imgPc, imgPhone){
//     this.btn = btn
//     this.imgPc = imgPc  //state = true
//     this.imgPhone = imgPhone || undefined//state = false
//     this.state = true
//     try {
//       this.imgPhone.style.display = 'none'
//       this.btn.addEventListener('mouseup', () => this.onClcik())
//     } catch(error){
//       this.btn.style.display = 'none'
//     };
//   }
//   onClcik(){
//     this.state = !this.state

//     if (this.state && ( this.imgPc != this.imgPhone )) {
//       this.imgPc.style.display = 'initial'
//       this.imgPhone.style.display = 'none'

//     } else {
//       this.imgPc.style.display = 'none'
//       this.imgPhone.style.display = 'initial'

//     }
//   }
// }
// heph

// showPhotos

// const $btnShowPhotos = document.getElementById('btn-show-photos')
// const $pcImaShowPhotos= document.getElementById('pc-image-show-photos')
// const $imgTitleShowPhotos= document.getElementById('images-title-show-photos')

// const btnShowPhotos = new InteractiveBtn( $btnShowPhotos, $pcImaShowPhotos, $imgTitleShowPhotos)

// ------------------------------------------------------

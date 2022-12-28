import Glide from '@glidejs/glide'
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'

export function slideIndex(){
new Glide('.glide',{
 type: 'carousel',
  startAt: 0,
  perView: 3, 
  //focusAt: 'center',
  gap: 20,
  peek: {
    before: 0,
    after: 70
  },
  breakpoints: {
    1024: {
      perView: 2
    },
    479: {
      perView: 1
    }
  },
  // autoplay: 12000
}).mount(
  {Controls}
)



}
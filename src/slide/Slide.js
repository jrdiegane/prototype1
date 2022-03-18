import  "./slide.css";
import home from "../images/home.jpg";
import avion from "../images/avion.jpg";
import lot from "../images/lot.jpg";
export default function Slide() {
    return (
      
      <div>
      <div>
          <div class="sm">
  <div id="carouselExampleFade" class="carousel slide .carousel-fade" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img src={lot} class="d-block w-100 h-70" alt="..." />
</div>
<div class="carousel-item">
<img src={avion} class="d-block w-100 h-70" alt="..." />
</div>
<div class="carousel-item">
<img src={home} class="d-block w-100 h-70" alt="..." />
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
</div>
</div>
<div><h3 className="text-center">...</h3></div>
</div>
    )
}
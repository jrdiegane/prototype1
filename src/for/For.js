import  "./for.css";
export default function For() {
    return (
        <div class="container-fluid">
        <h3>Hire me to receive extraordinary creations!</h3>
        <p>Fill in the form and I will get in touch with you as<br></br> soon as possible.</p>
        
        <form class="needs-validation" novalidate>
            <div class="form-row">
                <div class="col-md-4 offset-md-4">
                    <label for="name">Name*</label>
                    <input type="text" class="form-control" id="name" placeholder="" required></input>
                    <div class="valid-feedback">Ok !</div>
                    <div class="invalid-feedback">Valeur incorrecte</div>
                </div>
                <div class="col-md-4 offset-md-4">
                    <label for="nom">Phone number*</label>
                    <input type="number" class="form-control" id="number" placeholder="" required></input>
                    <div class="valid-feedback">Ok !</div>
                    <div class="invalid-feedback">Valeur incorrecte</div>
                </div>
                <div class="col-md-4 offset-md-4">
                    <label for="pseudo">Email*</label>
                    <input type="email" class="form-control" id="Email" placeholder="" required></input>
                    <div class="valid-feedback">Ok !</div>
                    <div class="invalid-feedback">Valeur incorrecte</div>
                </div>
            </div>
            <button class="btn btn-secondary" type="submit">Request a quote</button>
        </form>
    
        </div>
)
}
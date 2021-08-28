import React from "react";
import CoverSubPage from "../components/Cover/CoverSubPage";

const ContactPage = () => {
  return (
    <main>
      <CoverSubPage
        title="Contacto"
        description={["Puedes realizarnos cualquier duda que tengas"]}
        image="/images/carousel/cartel-bienvenida.jpg"
      />

      <section className="contact-section">
        <div className="container">
          <div class="d-none d-sm-block mb-5 pb-4">
            <iframe
              title="ubicacion"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.9898748742676!2d-71.09836819210776!3d-37.81948338897515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966d012cbb46dceb%3A0xcd9840d79c84cc7e!2sValle+Del+Volcan!5e0!3m2!1ses!2sar!4v1535314576539"
              width="100%"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Escribinos tu consulta</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                novalidate
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        placeholder=" Escriba su mensaje"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Ingrese su nombre"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Asunto"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i class="fas fa-hotel"></i>
                </span>
                <div className="media-body">
                  <h3>Herrero Ducloux 120, Copahue</h3>
                  <p>Q8348AGA Argentina</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i class="fas fa-mobile-alt"></i>
                </span>
                <div className="media-body">
                  <h3>+54 9 2942 66-9435</h3>
                  <p>Lunes a Sábado. 9hs a 18hs</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <i class="far fa-envelope"></i>
                </span>
                <div className="media-body">
                  <h3>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                    >
                      info@hotelvalledelvolcan.info
                    </a>
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

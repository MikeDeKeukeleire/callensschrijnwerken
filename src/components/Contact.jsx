import React from "react";

const Contact = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="mt-8 text-center text-2xl">
          <h1>Contact</h1>
          <form
            action="https://formsubmit.co/info@callensschrijnwerken.be"
            method="POST"
            validate
            className="mt-8"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control max-w-full p-4 text-base"
                    placeholder="Naam"
                    required
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control max-w-full p-4 text-base"
                    placeholder="Email"
                    required
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-control max-w-full p-4 text-base"
                rows="4"
                placeholder="Bericht"
                required
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button
              type="submit"
              className="btn btn-lg bg-tcprimary rounded p-2 mb-32"
            >
              Verstuur
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

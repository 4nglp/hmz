import Image from "next/image";
import lol from "../docs/fake-submit.png";

const Contact = () => {
  return (
    <main className="bg-gray-900 text-gray-100 py-3">
      <section className="contact-page mx-auto max-w-3xl p-5">
        <h1 className="text-4xl text-yellow-500 mb-5">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-8">
          Got a suggestion? Want to confess your undying love for us? Need to
          contact your favorite celebrities but don't know how? We know you
          believe in us, and we <em>pretend</em> to care about your opinion. So,
          what are you waiting for? <strong>CONTACT US NOW!</strong>
        </p>
        <div className="fake-submit text-center mt-8">
          <Image
            src={lol}
            alt="Submit Button"
            className="w-96 mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <p className="mt-3 text-lg text-gray-900">
            This button does absolutely nothing btw. Good luck out there!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;

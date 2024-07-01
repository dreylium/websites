import { Phone, Message } from '@ui/assets/Icons';

const Contact = () => {
  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-[minmax(auto,340px)_1fr] gap-x-8 px-[135px] py-20">
      <div className="rounded px-10 py-2 text-sm leading-5 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <section className="border-b py-8">
          <div className="mb-6 flex items-center gap-x-4 font-medium">
            <Phone />
            <h2>Call To Us</h2>
          </div>
          <p className="mb-4">We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </section>
        <section className="border-b py-8">
          <div className="mb-6 flex items-center gap-x-4 font-medium">
            <Message />
            <h2>Write To Us</h2>
          </div>
          <p className="mb-4">Fill out our form and we will contact you within 24 hours.</p>
          <p className="mb-4">Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </section>
      </div>
      <form className="grid grid-cols-3 grid-rows-[1fr_13rem_1fr] gap-x-4 gap-y-8 rounded p-10 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <input
          name="name"
          type="text"
          placeholder="Your Name*"
          required
          className="rounded border bg-clr-Secondary px-4 py-3.5"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email*"
          required
          className="rounded border bg-clr-Secondary px-4 py-3.5"
        />
        <input
          name="phone"
          type="text"
          placeholder="Your Phone*"
          required
          className="rounded border bg-clr-Secondary px-4 py-3.5"
        />
        <textarea
          name="messages"
          placeholder="Your Message*"
          className="e col-span-3 resize-none rounded border bg-clr-Secondary px-4 py-3.5"
        />
        <div className="col-start-3 flex justify-end">
          <button type="submit" className="rounded bg-clr-ButtonRed px-12 font-medium text-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;


function Contact() {

    return (
        <>
            <section className="bg-bg px-6 py-16 md:px-24">
                <div className="mx-auto max-w-3xl">
                    <h1 className="hero-title mb-6 text-6xl md:text-8xl">
                    Contact Us
                    </h1>

                    <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    action="/thank-you"
                    className="flex flex-col gap-5 tracking-widest"
                    >
                    <input type="hidden" name="form-name" value="contact" />

                    <p className="hidden">
                        <label>
                        Do not fill this out:
                        <input name="bot-field" />
                        </label>
                    </p>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xl font-bold">
                        Name
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xl font-bold">
                        Email
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xl font-bold">
                        Phone
                        </label>
                        <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xl font-bold">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="rounded-xl bg-rosa px-6 py-3 text-xl font-bold text-white cursor-pointer"
                    >
                        Send Message
                    </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
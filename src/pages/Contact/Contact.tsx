
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
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg font-sans tracking-normal"
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
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg font-sans tracking-normal"
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
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg font-sans tracking-normal"
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
                        className="rounded-xl border border-black/20 bg-white px-4 py-3 text-lg font-sans resize-none tracking-normal"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="rounded-xl bg-rosa px-6 py-3 text-xl font-bold text-white cursor-pointer hover:bg-dark-rosa transition duration-300"
                    >
                        Send Message
                    </button>
                    </form>
                </div>
            </section>

            <section className="bg-bg px-6 py-16 md:px-24">
                <div className="rounded-2xl bg-white p-6 shadow-sm max-w-3xl mx-auto">
                    <h2 className="mb-3 text-3xl font-bold">Apply for a Job</h2>

                    <p className="mb-4 text-black/70">
                        Download the application, fill it out, then upload the completed form below.
                        You may also upload a resume if you have one.
                    </p>

                    <a
                        href="public/la_michoacana_aztek_employment_application.pdf"
                        download
                        className="inline-block rounded-xl bg-amarillo px-6 py-3 font-bold text-black tracking-wider hover:bg-dark-amarillo transition duration-300"
                    >
                        Download Application
                    </a>
                </div>
                
                {/* Job Application Form */}
                <div className="mx-auto max-w-3xl">
                    <form
                        name="job-application"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        encType="multipart/form-data"
                        className="mt-8 flex flex-col gap-5 tracking-widest"
                        >
                        <input type="hidden" name="form-name" value="job-application" />

                        <p className="hidden">
                            <label>
                            Don’t fill this out:
                            <input name="bot-field" />
                            </label>
                        </p>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="applicant-name" className="font-bold text-xl">
                            Name
                            </label>
                            <input
                            id="applicant-name"
                            name="name"
                            type="text"
                            required
                            className="rounded-xl border border-black/20 bg-white px-4 py-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="applicant-email" className="font-bold text-xl">
                            Email
                            </label>
                            <input
                            id="applicant-email"
                            name="email"
                            type="email"
                            required
                            className="rounded-xl border border-black/20 bg-white px-4 py-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="applicant-phone" className="font-bold text-xl">
                            Phone
                            </label>
                            <input
                            id="applicant-phone"
                            name="phone"
                            type="tel"
                            required
                            className="rounded-xl border border-black/20 bg-white px-4 py-3"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-center">
                            <label htmlFor="completed-application" className="font-bold text-xl">
                            Completed Application PDF
                            </label>
                            <input
                            id="completed-application"
                            name="completed-application"
                            type="file"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            required
                            className="rounded-xl border border-black/20 bg-white px-4 py-3 cursor-pointer hover:bg-gray-100 transition duration-300"
                            />
                            <p className="text-sm text-black/60">
                            Please upload the completed application. File must be under 8 MB.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 text-center">
                            <label htmlFor="resume" className="font-bold text-xl">
                            Resume (optional)
                            </label>
                            <input
                            id="resume"
                            name="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="rounded-xl border border-black/20 bg-white px-4 py-3 cursor-pointer hover:bg-gray-100 transition duration-300"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-xl bg-rosa px-6 py-3 text-xl font-bold text-white cursor-pointer hover:bg-dark-rosa transition duration-300"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
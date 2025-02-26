import { useState } from 'react'
import { personalInfo, socialLinks } from '../constants'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', form)
  }

  return (
    <section id="contact" className="relative w-full min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact
        </h2>
        <p className="mt-4 text-[#dfd9ff] text-[17px] max-w-3xl leading-[30px]">
          Get in touch with me for any questions or opportunities.
        </p>

        <div className="mt-12 flex flex-col-reverse gap-10 lg:flex-row">
          {/* Contact Form */}
          <div className="flex-[0.75] bg-[#1d1836] p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-[#151030] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-[#151030] py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-[#151030] py-4 px-6 text-white rounded-lg outline-none border-none font-medium resize-none"
                />
              </label>

              <button
                type="submit"
                className="bg-[#915EFF] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#804dee] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-[0.25] flex flex-col gap-4">
            <div className="bg-[#1d1836] p-8 rounded-2xl">
              <h3 className="text-white font-bold text-[24px] mb-4">Contact Info</h3>
              <p className="text-[#aaa6c3]">
                <strong>Email:</strong> {personalInfo.email}
              </p>
              <p className="text-[#aaa6c3]">
                <strong>Location:</strong> {personalInfo.location}
              </p>
            </div>

            <div className="bg-[#1d1836] p-8 rounded-2xl">
              <h3 className="text-white font-bold text-[24px] mb-4">Social Links</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#915EFF] hover:text-[#804dee] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnjlvnkb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let's Build Together
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to scale your business with a high-performance web product?
            Drop a message and let's get to work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <div className="space-y-6">
              <a
                href="mailto:arpitarpit696916@gmail.com"
                className="flex items-center group"
              >
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Email</p>
                  <p className="text-lg font-medium">
                    arpitarpit696916@gmail.com
                  </p>
                </div>
              </a>

              <a href="tel:+916280904396" className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Phone</p>
                  <p className="text-lg font-medium">+91 6280904396</p>
                </div>
              </a>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center mr-4">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="text-lg font-medium">Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-surface/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-400"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-400"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-400"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your requirements..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-semibold rounded-xl px-4 py-4 hover:bg-zinc-200 transition-colors flex items-center justify-center group"
              >
                {loading ? "Sending..." : "Send Message"}

                <Send
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>

              {success && (
                <p className="text-green-500 text-center">
                  Message sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useT } from '../i18n/LanguageContext';

const EMAILJS_SERVICE_ID = 'service_8q7000p';
const EMAILJS_TEMPLATE_ID = 'template_cc81edn';
const EMAILJS_PUBLIC_KEY = 'Yd5eNNFh6aLp69-J1';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const t = useT();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || status === 'sending') return;

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : t.contact.fallbackError
      );
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-navy text-offwhite border-t border-offwhite/10 relative overflow-hidden">

      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-125 bg-linear-to-t from-copper/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">

        {/* Left column — staggered children */}
        <motion.div
          className="lg:w-1/3"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-copper font-bold tracking-widest uppercase mb-6 flex items-center"
          >
            <span className="w-8 h-0.5 bg-copper mr-4"></span> {t.contact.eyebrow}
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight"
          >
            {t.contact.heading}
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-xl text-offwhite/80 leading-relaxed mb-10 font-medium"
          >
            {t.contact.body}
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-lg text-offwhite/60 font-medium"
          >
            {t.contact.directIntro}{' '}
            <a href="mailto:founder@astraventures.ai" className="text-copper hover:text-white transition-colors pb-0.5 border-b border-copper/30 hover:border-white">
              founder@astraventures.ai
            </a>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/3 max-w-2xl bg-offwhite/2 p-8 md:p-12 border border-offwhite/10 backdrop-blur-sm"
        >
          <form ref={formRef} className="space-y-8" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">{t.contact.labels.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">{t.contact.labels.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="company" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">{t.contact.labels.company}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>
              <div>
                <label htmlFor="url" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">{t.contact.labels.url}</label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="stage" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">{t.contact.labels.stage}</label>
              <div className="relative">
                <select
                  id="stage"
                  name="stage"
                  defaultValue=""
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 appearance-none font-medium cursor-pointer"
                  required
                >
                  <option value="" disabled className="text-navy bg-offwhite">{t.contact.stageOptions.placeholder}</option>
                  <option value="Pre-seed" className="text-navy bg-offwhite">{t.contact.stageOptions.preseed}</option>
                  <option value="Seed" className="text-navy bg-offwhite">{t.contact.stageOptions.seed}</option>
                  <option value="Other" className="text-navy bg-offwhite">{t.contact.stageOptions.other}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-copper">
                  <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="building" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">{t.contact.labels.building}</label>
              <textarea
                id="building"
                name="building"
                rows={5}
                className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 resize-y font-medium"
                placeholder={t.contact.placeholderBuilding}
                required
              ></textarea>
            </div>

            <div className="pt-4 flex flex-col gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto px-10 py-4 bg-copper text-offwhite font-bold uppercase tracking-widest rounded-full hover:bg-copper/90 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'sending' ? t.contact.sending : t.contact.submit}
              </button>

              {status === 'success' && (
                <p className="text-copper text-sm font-medium">
                  {t.contact.success}
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-300 text-sm font-medium">
                  {t.contact.errorPrefix} {errorMessage} {t.contact.errorSuffix}{' '}
                  <a href="mailto:founder@astraventures.ai" className="underline">founder@astraventures.ai</a> {t.contact.errorTail}
                </p>
              )}
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  )
}

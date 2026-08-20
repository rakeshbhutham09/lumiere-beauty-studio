import { useMemo, useState, type FormEvent } from 'react';
import { CalendarHeart, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { serviceOptions, timeSlots } from '@/data/content';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[0-9+()\-\s]{7,18}$/;

export default function Appointment() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const update = (key: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    else if (values.name.trim().length < 2) next.name = 'Name looks too short.';

    if (!values.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!phoneRe.test(values.phone.trim()))
      next.phone = 'Enter a valid phone number.';

    if (!values.email.trim()) next.email = 'Please enter your email.';
    else if (!emailRe.test(values.email.trim()))
      next.email = 'Enter a valid email address.';

    if (!values.service) next.service = 'Please choose a service.';
    if (!values.date) next.date = 'Please pick a preferred date.';
    if (!values.time) next.time = 'Please pick a preferred time.';

    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      const el = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus({ preventScroll: false });
      return;
    }
    setSubmitting(true);
    // Simulate a request — no backend is connected.
    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setValues(initialState);
    }, 900);
  };

  const reset = () => setSuccess(false);

  return (
    <section id="appointment" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <span className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <span className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-300/10 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <div className="reveal">
            <span className="eyebrow text-gold-300">
              <span className="h-px w-8 bg-gold-400/70" />
              Book an Appointment
            </span>
            <h2 className="section-title mt-5 text-cream-50">
              Let’s Plan Your Visit
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-200/80">
              Share a few details and our team will reach out to confirm your
              appointment. This is a <span className="font-semibold text-gold-300">demo form</span> —
              submissions are validated on the front end only and are not sent
              anywhere.
            </p>

            <ul className="mt-10 space-y-5 text-cream-100/85">
              {[
                'Personalized consultation before every service',
                'Flexible morning and evening time slots',
                'Premium products and a calm, private studio',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                  <span className="text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden rounded-2xl border border-cream-50/10 bg-cream-50/5 p-5 sm:block">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300">
                Studio Hours
              </p>
              <p className="mt-2 text-sm text-cream-100/80">
                Mon – Sat · 10:00 AM – 8:00 PM
              </p>
              <p className="text-sm text-cream-100/80">Sunday · By appointment</p>
            </div>
          </div>

          {/* Form card */}
          <div className="reveal">
            <div className="relative overflow-hidden rounded-3xl bg-cream-50 p-7 shadow-card sm:p-9">
              {success ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-ink-900">
                    Request Received!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-700/80">
                    Thank you — your appointment request has been noted. Our team
                    would normally reach out within 24 hours to confirm. (This is a
                    demo form, so no request was actually sent.)
                  </p>
                  <button onClick={reset} className="btn-outline mt-8">
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 text-white">
                      <CalendarHeart className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-ink-900">
                        Appointment Form
                      </h3>
                      <p className="text-xs uppercase tracking-[0.18em] text-gold-600">
                        Demo · Front-end only
                      </p>
                    </div>
                  </div>

                  <Field label="Full Name" error={errors.name} htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Ava Thompson"
                      value={values.name}
                      onChange={(e) => update('name', e.target.value)}
                      aria-invalid={!!errors.name}
                      className={inputClass(!!errors.name)}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Phone Number" error={errors.phone} htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 555 123 4567"
                        value={values.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        aria-invalid={!!errors.phone}
                        className={inputClass(!!errors.phone)}
                      />
                    </Field>

                    <Field label="Email" error={errors.email} htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@email.com"
                        value={values.email}
                        onChange={(e) => update('email', e.target.value)}
                        aria-invalid={!!errors.email}
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>

                  <Field label="Service" error={errors.service} htmlFor="service">
                    <select
                      id="service"
                      name="service"
                      value={values.service}
                      onChange={(e) => update('service', e.target.value)}
                      aria-invalid={!!errors.service}
                      className={inputClass(!!errors.service)}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Preferred Date" error={errors.date} htmlFor="date">
                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={today}
                        value={values.date}
                        onChange={(e) => update('date', e.target.value)}
                        aria-invalid={!!errors.date}
                        className={inputClass(!!errors.date)}
                      />
                    </Field>

                    <Field label="Preferred Time" error={errors.time} htmlFor="time">
                      <select
                        id="time"
                        name="time"
                        value={values.time}
                        onChange={(e) => update('time', e.target.value)}
                        aria-invalid={!!errors.time}
                        className={inputClass(!!errors.time)}
                      >
                        <option value="" disabled>
                          Select a time
                        </option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message" htmlFor="message" optional>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about the look you have in mind…"
                      value={values.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={inputClass(false) + ' resize-none'}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <CalendarHeart className="h-4 w-4" />
                        Request Appointment
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-2 text-center text-xs text-ink-700/60">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Demo form — no data is stored or sent.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return [
    'w-full rounded-xl border bg-cream-100/60 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40',
    'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0',
    hasError
      ? 'border-red-400 focus:border-red-400 focus:ring-red-300'
      : 'border-cream-300 focus:border-gold-400 focus:ring-gold-300',
  ].join(' ');
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-ink-700"
      >
        <span>{label}</span>
        {optional && <span className="font-normal normal-case text-ink-700/50">Optional</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/utils/constants/services";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { cn } from "@/utils/helpers/cn";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid UK phone number")
    .regex(/^[+]?[\d\s()-]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  postcode: z
    .string()
    .min(5, "Please enter a valid UK postcode")
    .regex(/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i, "Please enter a valid UK postcode"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function SuccessAnimation() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="flex flex-col items-center py-12 text-center"
    >
      <motion.svg
        viewBox="0 0 52 52"
        className="h-20 w-20"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
      >
        <motion.circle
          cx="26"
          cy="26"
          r="25"
          fill="none"
          stroke="#156FEA"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          fill="none"
          stroke="#156FEA"
          strokeWidth="3"
          strokeLinecap="round"
          d="M14 27l7 7 16-16"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        />
      </motion.svg>
      <h3 className="mt-6 font-heading text-2xl font-bold text-navy">
        Message Sent Successfully!
      </h3>
      <p className="mt-2 text-text-secondary">
        Thank you for contacting us. We will get back to you within 24 hours.
      </p>
    </motion.div>
  );
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-brand border border-border bg-white px-4 py-3 text-text-main transition-colors focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20";

  return (
    <div className="card-surface rounded-brand-xl p-6 md:p-8">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <SuccessAnimation />
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <h2 className="font-heading text-2xl font-bold text-navy">
              Request a Free Quote
            </h2>

            <div>
              <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-navy">
                Full Name *
              </label>
              <input
                id="fullName"
                {...register("fullName")}
                className={cn(inputClasses, errors.fullName && "border-red-500")}
                placeholder="John Smith"
              />
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.fullName.message}
                </motion.p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={cn(inputClasses, errors.email && "border-red-500")}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className={cn(inputClasses, errors.phone && "border-red-500")}
                  placeholder="07XXX XXXXXX"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
                  Service *
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className={cn(inputClasses, errors.service && "border-red-500")}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.service.message}
                  </motion.p>
                )}
              </div>
              <div>
                <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-navy">
                  Preferred Date *
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  {...register("preferredDate")}
                  className={cn(inputClasses, errors.preferredDate && "border-red-500")}
                />
                {errors.preferredDate && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.preferredDate.message}
                  </motion.p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="postcode" className="mb-1.5 block text-sm font-medium text-navy">
                Postcode *
              </label>
              <input
                id="postcode"
                {...register("postcode")}
                className={cn(inputClasses, errors.postcode && "border-red-500")}
                placeholder="SW1A 1AA"
              />
              {errors.postcode && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.postcode.message}
                </motion.p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className={cn(inputClasses, "resize-none", errors.message && "border-red-500")}
                placeholder="Tell us about your requirements..."
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-sm text-red-500"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-brand bg-brand-gradient px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {isLoading ? <LoadingSpinner size="sm" /> : "Send Message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

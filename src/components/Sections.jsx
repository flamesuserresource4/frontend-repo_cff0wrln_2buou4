import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-6">{title}</h2>
        <div className="text-gray-800 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <div className="bg-white">
      {/* About */}
      <Section id="about" title="About">
        <p className="text-base sm:text-lg max-w-3xl">
          Machine Learning Engineer with an educational background in computer science and a strong foundation in technical and soft skills. Experienced in Machine Learning and Deep Learning algorithms with expertise in Natural Language Processing. Passionate about applying cutting-edge AI solutions to real-world challenges.
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow transition">
            <h3 className="mb-3 font-medium text-gray-900">Programming & Frameworks</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Python, TensorFlow, PyTorch, Scikit-learn, Keras</li>
              <li>Pandas, NumPy</li>
              <li>Flask, FastAPI</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow transition">
            <h3 className="mb-3 font-medium text-gray-900">Machine Learning</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Deep Learning, Natural Language Processing (NLP)</li>
              <li>Recommender Systems, Clustering</li>
              <li>Feature Engineering, Data Preprocessing</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow transition">
            <h3 className="mb-3 font-medium text-gray-900">Soft Skills</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Problem-Solving</li>
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="rounded-lg border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-medium text-gray-900">Machine Learning Intern | Prodigy InfoTech</h3>
            <p className="text-sm text-gray-600">Remote | September 2024</p>
          </div>
          <p className="mt-3 text-gray-700">
            Built 3+ projects based on Machine Learning and Deep Learning including house price prediction, customer segmentation, and image classification. Performed feature engineering to improve model performance and training time.
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="group rounded-lg border border-gray-200 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="text-lg font-medium text-gray-900">Recipe Vision - AI-Powered Recipe Generation System</h3>
            <p className="mt-1 text-sm text-gray-500">June 2024 - September 2024</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
              <li>Created recipe generation system with secure user authentication</li>
              <li>Enabled image upload, recipe history management, and recipe generation using REST APIs and React UI</li>
              <li>Implemented Flask backend integrating BLIP for image captioning and CLIP for embeddings</li>
              <li>Searches over 35,000+ recipes using FAISS indexing with SQLite storage</li>
            </ul>
          </article>
          <article className="group rounded-lg border border-gray-200 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
            <h3 className="text-lg font-medium text-gray-900">Large Language Model (LLM) from Scratch</h3>
            <p className="mt-1 text-sm text-gray-500">September 2024 - October 2024</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
              <li>Built transformer language model from ground up to understand LLM architecture</li>
              <li>Implemented core components in PyTorch: multi-head attention, layer normalization, positional encodings</li>
              <li>Handled tokenization, training pipeline, and text generation with custom optimization</li>
              <li>Fine-tuned model for classification and personal assistant tasks</li>
            </ul>
          </article>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900">Bachelor of Computer Science</h3>
          <p className="mt-1 text-gray-700">University of Sahiwal | 2021 - 2025</p>
          <p className="mt-1 text-gray-700">GPA: 3.36 / 4.0</p>
          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Certifications</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Machine Learning Specialization from Deeplearning.ai (Coursera)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <ul className="space-y-2 text-gray-800">
              <li><span className="text-gray-600">Email:</span> <a className="underline underline-offset-4 hover:no-underline" href="mailto:arham7813@gmail.com">arham7813@gmail.com</a></li>
              <li><span className="text-gray-600">Phone:</span> <a className="underline underline-offset-4 hover:no-underline" href="tel:+923296297173">+92-329-6297173</a></li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 hover:opacity-80" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" /> <span>LinkedIn</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-gray-900 hover:opacity-80" aria-label="GitHub">
                <Github className="h-5 w-5" /> <span>GitHub</span>
              </a>
            </div>
          </div>
          <form className="rounded-lg border border-gray-200 p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-1">Name</label>
              <input id="name" type="text" className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
              <input id="email" type="email" className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Write your message" />
            </div>
            <button type="button" className="w-full rounded border border-gray-900 bg-gray-900 px-4 py-2 text-white hover:opacity-90">Send</button>
          </form>
        </div>
      </Section>
    </div>
  );
}

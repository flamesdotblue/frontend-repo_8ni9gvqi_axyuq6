import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Healthcare Workforce Management',
    desc: 'Nurse scheduling and wellness tracking with real-time health monitoring and optimized shift management.',
    tech: ['Oracle APEX', 'PL/SQL', 'Oracle Cloud']
  },
  {
    title: 'Hospital Management System Migration',
    desc: 'Migration from legacy SSMS to Oracle Cloud with 40% cost reduction and 99.9% uptime.',
    tech: ['Data Migration', 'ETL Pipelines', 'Cloud Architecture']
  },
  {
    title: 'Digital Approval Workflow',
    desc: 'Multi-level request approval replacing paper processes with 50% faster turnaround.',
    tech: ['Workflow Automation', 'RBAC', 'Real-time Processing']
  },
  {
    title: 'Campus Recruitment Platform',
    desc: 'End-to-end job portal enabling company-student interactions with automated matching.',
    tech: ['Full-Stack', 'API Integration', 'Dashboard Analytics']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
          <p className="mt-2 text-gray-600">Selected work that blends data engineering, cloud, and product UX.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:via-violet-500/5 transition pointer-events-none" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border bg-gray-50 px-3 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div id="contact" className="mt-16 rounded-2xl border bg-white p-8 text-center">
          <h3 className="text-2xl font-semibold">Let’s build something impactful</h3>
          <p className="mt-2 text-gray-600">Reach out for collaborations, consulting, or full-time roles.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:pavan.kumar@nerdsandgeeks.in" className="rounded-md bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800">Email</a>
            <a href="https://linkedin.com/in/pavankumarps/" target="_blank" rel="noreferrer" className="rounded-md border px-5 py-3 font-semibold hover:bg-gray-50">LinkedIn</a>
            <a href="tel:+918639015085" className="rounded-md border px-5 py-3 font-semibold hover:bg-gray-50">Call</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ id, title, subtitle }) => (
  <div id={id} className="text-center">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
  </div>
);

const Experience = () => {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader id="about" title="About" />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-gray-700 leading-relaxed space-y-4">
              <p>
                PL/SQL Developer with expertise in Data Engineering and Cloud Application Development with over 3.2 years of experience across healthcare, education, and recruitment sectors.
              </p>
              <p>
                Skilled in Oracle APEX, PL/SQL, SQL, Snowflake and cloud technologies. I manage end-to-end projects including data migration, workflow automation, and scalable app development.
              </p>
              <p>
                I design robust data pipelines, migrate legacy systems to cloud environments, and build user-centric applications with measurable impact.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border p-4 text-center">
                <div className="text-3xl font-extrabold">3.2+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="rounded-xl border p-4 text-center">
                <div className="text-3xl font-extrabold">15+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="rounded-xl border p-4 text-center">
                <div className="text-3xl font-extrabold">5</div>
                <div className="text-sm text-gray-500">Certifications</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="experience"
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Experience" />
          <div className="mt-8 relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-px bg-gray-200" />
            <div className="space-y-10">
              {[{
                date: 'May 2025 – Present',
                role: 'PL/SQL Developer · Team Lead',
                company: 'Parkmed Hospitals, Bengaluru',
                points: [
                  'Led migration of legacy Hospital Management System from SSMS to Oracle Cloud',
                  'Achieved 40% reduction in infrastructure costs and 99.9% system uptime',
                  'Developed ETL pipelines for seamless data migration and real-time processing',
                  'Built dashboards replacing legacy Power BI systems'
                ]
              }, {
                date: 'Jul 2023 – Apr 2025',
                role: 'Oracle APEX Developer',
                company: 'Green Tick, Bengaluru',
                points: [
                  'Migrated Excel-based systems to cloud-native Oracle solutions',
                  'Designed ETL pipelines for real-time data synchronization',
                  'Reduced query time by 30% through optimized data architecture',
                  'Implemented RBAC and data encryption'
                ]
              }, {
                date: 'Aug 2022 – Jun 2023',
                role: 'Application Developer',
                company: 'Garden City University, Bengaluru',
                points: [
                  'Developed digital solutions for administrative efficiency',
                  'Built Student Portfolio Creation Platform and Placement Management System',
                  'Reduced recruitment time by 35% through automated workflows',
                  'Implemented Digital Approval Workflow with 50% faster turnaround'
                ]
              }].map((item, idx) => (
                <div key={idx} className="relative grid grid-cols-[auto_1fr] sm:grid-cols-[1fr_auto_1fr] gap-6 items-start">
                  <div className="hidden sm:block text-right text-sm text-gray-500">{item.date}</div>
                  <div className="relative h-3 w-3 rounded-full bg-gray-900 sm:mx-0 mx-4" />
                  <div className="bg-gray-50 border rounded-xl p-5">
                    <div className="text-sm text-gray-500 sm:hidden mb-1">{item.date}</div>
                    <h3 className="font-semibold">{item.role}</h3>
                    <div className="text-sm text-gray-600">{item.company}</div>
                    <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                      {item.points.map((p, i) => (<li key={i}>{p}</li>))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          id="skills"
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Skills" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Programming', items: ['Oracle APEX', 'PL/SQL', 'SQL', 'Python', 'JavaScript', 'React.js'] },
              { title: 'Database', items: ['Oracle SQL', 'MySQL', 'SQL Server', 'MongoDB', 'Snowflake', 'ETL Pipelines'] },
              { title: 'Cloud', items: ['Oracle Cloud', 'AWS', 'Autonomous DB', 'VCN', 'Load Balancer', 'CI/CD'] },
              { title: 'Tools', items: ['Power BI', 'Tableau', 'Git/GitHub', 'REST APIs', 'Agile', 'Project Management'] },
            ].map((cat, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm">
                <h3 className="font-semibold">{cat.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span key={s} className="inline-flex items-center rounded-full border bg-gray-50 px-3 py-1 text-sm text-gray-700">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
